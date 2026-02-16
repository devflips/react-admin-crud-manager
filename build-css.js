const { spawnSync } = require('child_process');
const path = require('path');

const input = path.resolve(__dirname, 'src/index.css');
const output = path.resolve(__dirname, 'dist/tailwind.css');
const postcssConfig = path.resolve(__dirname, 'postcss.build.config.js');

const result = spawnSync(
  `npx postcss "${input}" -o "${output}" -c "${postcssConfig}"`,
  { stdio: 'inherit', shell: true }
);
if (result.status !== 0) {
  process.exit(result.status);
}
console.log('Tailwind CSS built to dist/tailwind.css');
