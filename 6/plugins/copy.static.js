const fs = require('node:fs')

module.exports = class CopyCustomPlugin {
  apply(compiler) {
    compiler.hooks.done.tap(
      'MyPlugin',
      (file, props) => {
        const staticPath = file.compilation.compiler.context + '/static' //(fullpath to root)
        const outputPath = file.compilation.compiler.outputPath //(fullpath to root)
        fs.cpSync(staticPath, outputPath, { recursive: true }, (err) => console.error(err, 'error copy'))
      }
    );
  }
}
