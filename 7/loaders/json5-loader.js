const path = require('node:path');
const fs = require('node:fs');
const json5 = require('json5')

module.exports = function(source) {
	const result = json5.parse(source)
	const callback = this.async();
	const logger = this.getLogger();
	const metaPath = path.resolve(__dirname, './meta-settings.json')

	this.addDependency(metaPath);

	fs.readFile(metaPath, 'utf-8', function (err, content) {
		logger.info(content, 'result')
		if (err) return callback(err);
		callback(null, JSON.stringify(result), null, { json: { ...result } });
	});
}
