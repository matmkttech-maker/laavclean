import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const project = path.dirname(fileURLToPath(import.meta.url));
const config = JSON.parse(readFileSync(path.join(project, 'vercel.json'), 'utf8'));
assert.equal(config.framework, null);
assert.equal(config.buildCommand, '');
assert.equal(config.outputDirectory, 'dist');
const dist = path.join(project, config.outputDirectory);

for (const file of ['index.html', 'galeria.html', 'app.js', 'gallery.js']) {
  const content = readFileSync(path.join(dist, file), 'utf8');
  assert(!/(?:href|src)=["']\//.test(content), `${file}: caminho absoluto quebra ao abrir o arquivo local`);
  assert(!/\.src\s*=\s*["']\//.test(content), `${file}: imagem dinâmica com caminho absoluto`);
  for (const [, ref] of content.matchAll(/(?:href|src)="([^"\n]+)"/g)) {
    if (!ref.startsWith('./') || ref.includes('${')) continue;
    const fileURL = new URL(ref, pathToFileURL(path.join(dist, file.endsWith('.html') ? file : 'index.html')));
    fileURL.hash = '';
    fileURL.search = '';
    assert(existsSync(fileURLToPath(fileURL)), `${file}: arquivo ausente: ${ref}`);
    const webURL = new URL(ref, 'https://example.com/subpasta/index.html');
    assert(webURL.pathname.startsWith('/subpasta/'), `${file}: link sai da pasta de publicação`);
  }
}

for (const script of ['app.js', 'gallery.js']) {
  const content = readFileSync(path.join(dist, script), 'utf8');
  for (const [, image] of content.matchAll(/(?:image|file):'([a-z0-9-]+\.(?:png|jpe?g|webp))'/g)) {
    assert(existsSync(path.join(dist, 'assets', image)), `Imagem ausente: ${image}`);
  }
}
assert(readFileSync(path.join(dist, 'gallery.js'), 'utf8').includes("location.protocol !== 'file:'"), 'Filtros locais não devem depender do histórico HTTP');
console.log('OK: arquivos, imagens, caminhos locais, subpastas e configuração Vercel.');
