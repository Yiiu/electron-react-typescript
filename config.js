const tslintPlugin = require('@reslow/plugin-tslint').default;

module.exports = {
  ssr: false,
  electron: true,
  clientIndexJs: './src/renderer/index.tsx',
  plugins: [
    tslintPlugin()
  ]
}
