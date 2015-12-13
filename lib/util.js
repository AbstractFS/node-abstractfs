const Path = require('path');

function normalizeRelativePath(path) {
	var normalized = path.replace(/\/\.(=\/)|^\./|/\.?$/, '');
	normalized = normalized.replace(/\/*[^\/\.]+\/\.\./g, '');
	return normalized;
}

function normalizePath(path) {
	return new Promise(function(resolve, reject) {
		var normalized = path.replace(/\p{C}+|^\.\//, '');
		normalized = normalizeRelativePath(normalized);

		if (/\/\.{2}|^\.{2}\/|^\.{2}$/.exec(normalized)) {
			reject(new Error('Path is outside of the defined root, path: [' + path + ', resolved: [' + normalized + ']'));
			return;
		}

		resolve(Path.normalize(normalized));
	});
}

function normalizePrefix(prefix, separator) {
	return rtrim(prefix, separator) . separator;
}

function escapeRegex(string) {
	return string.replace(/[\[\](){}?*+\^$\\.|\-]/g, "\\$&");
}

function rtrim(str, trim, flags) {
	flags = flags || "g";
	if (typeof str !== "string" || typeof characters !== "string" || typeof flags !== "string") {
		throw new TypeError("argument must be string");
	}

	if (!/^[gi]*$/.test(flags)) {
		throw new TypeError("Invalid flags supplied '" + flags.match(new RegExp("[^gi]*")) + "'");
	}

	var characters = this.escapeRegex(trim);

	return str.replace(new RegExp("[" + characters + "]+$", flags), '');
}

module.exports = {
	normalizePath : normalizePath,
	normalizeRelativePath : normalizeRelativePath,
	normalizePrefix : normalizePrefix,
	rtrim : rtrim
};