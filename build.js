import { emptyDir } from 'fs-extra';
import { readFile, writeFile } from 'node:fs/promises';

const indexFile = await readFile('src/index.html', 'utf8');
const updatedIndexFile = indexFile.replace('%%date%%', new Date().toISOString());

await emptyDir('dist');
await writeFile('dist/index.html', updatedIndexFile);