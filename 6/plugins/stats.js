const fs = require('node:fs')
const path = require('node:path')

module.exports = class StatsCustomPlugin {
  apply(compiler) {
    compiler.hooks.done.tap(
      'MyPlugin',
      (statsProps) => {
        const definedResult = statsProps.toJson()
        const result = { ...definedResult, time: null, builtAt: null, memesCount: 3 }
        const outputPath = result.outputPath
        const pathToRewrite = path.resolve('/Users/f.rychkov/Desktop/projects/homework/webpack', '')
        const filePath = path.resolve(outputPath, './compilation-stats.json')
        const fileStr = JSON.stringify(result, null, 2)
        const parsedFileStr = fileStr?.replaceAll(pathToRewrite, '')
        // Записываем статистику в файл
        fs.writeFile(filePath, parsedFileStr, (err) => {
          if (err) throw err;
          console.log(`Compilation stats saved to ${filePath}`);
        });
      }
    );
  }
}
