const { build } = require('esbuild')

const options = {
  stdio: 'inherit',
  entryPoints: ['./src/index.ts'],
  outfile: './dist/index.js',
  minify: true,
  bundle: true,
}

build(options).catch(() => process.exit(1))
