import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const pluginRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = resolve(pluginRoot, '..', '..');
const source = join(repoRoot, '.agents', 'skills', 'store-of-scope');
const target = join(pluginRoot, 'skills', 'store-of-scope');

try {
  if (!(await stat(source)).isDirectory()) throw new Error('source is not a directory');
} catch (error) {
  throw new Error(
    `Noodle product skill is missing at ${source}. Run noodle agents setup --write first.`,
    { cause: error },
  );
}

await mkdir(dirname(target), { recursive: true });
await rm(target, { recursive: true, force: true });
await cp(source, target, { recursive: true, force: true });

process.stdout.write(`Synced Noodle product skill to ${target}\n`);
