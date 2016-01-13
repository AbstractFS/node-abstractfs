"use strict";

const Adapter = require('../adapter'),
	  Promise = require('bluebird'),
	  fs = require('fs'),
	  fs2 = require('fs2'),
      Path = require('path').posix,
	  glob = Promise.promisify(require('glob')),
      rimraf = require('rimraf'),
	  Util = require('../util');

class LocalAdapter extends Adapter {

	constructor(prefix) {
		super();
		this.prefix = Path.normalize(prefix);
	}

	/**
	 * Apply the directory prefix to the path.
	 *
	 * @param path
	 * @returns {string}
	 */
	applyPrefix(path) {
		return Path.join(this.prefix, path);
	}

	/**
	 * Check if a file exists.
	 * @param path
	 */
	has(path) {
		path = this.applyPrefix(path);
		return new Promise((resolve, reject) => {
			fs2.stat(path, (err, stat) => {
				if (err || !stat) {
					reject();
				} else {
					resolve();
				}
			});
		});
	}

	/**
	 * Write a file.
	 * @param path
	 * @param contents
	 */
	write(path, contents) {
		return this.createDir(Path.dirname(path)).then(() => fs2.writeFile(this.applyPrefix(path), contents));
	}

	/**
	 * Write a file using a stream.
	 * @param path
	 * @param stream
	 */
	writeStream(path, stream) {
		path = this.applyPrefix(path);

		return new Promise((resolve, reject) => {
			const out = fs.createWriteStream(path);

			out.on('error', reject);

			stream.pipe(out);

			resolve(stream);
		}).then((out) => Util.streamToPromise(out));
	}

	/**
	 * Read a file's contents.
	 *
	 * @param path
	 */
	read(path) {
		path = this.applyPrefix(path);
		return fs2.readFile(path);
	}

	/**
	 * Get a stream to the file's contents.
	 *
	 * @param path
	 */
	readStream(path) {
		path = this.applyPrefix(path);
		return new Promise((resolve, reject) => {
			const out = fs.createReadStream(path);

			if (out) {
				resolve(out);
			} else {
				reject();
			}
		});
	}

	/**
	 * Rename/move a file/directory.
	 *
	 * @param path
	 * @param newpath
	 */
	rename(path, newpath) {
		path = this.applyPrefix(path);
		newpath = this.applyPrefix(newpath);

		return fs2.rename(path, newpath);
	}

	/**
	 * Copy a file/directory to a new path.
	 *
	 * @param path
	 * @param newpath
	 */
	copy(path, newpath) {
		path = this.applyPrefix(path);
		return fs2.copy(path, newpath);
	}

	/**
	 * Delete a file.
	 *
	 * @param path
	 */
	delete(path) {
		path = this.applyPrefix(path);
		return fs2.unlink(path);
	}

	/**
	 * Delete a directory.
	 *
	 * @param path
	 */
	deleteDir(path) {
		path = this.applyPrefix(path);

		return new Promise((resolve, reject) => {
			rimraf(path, function(err) {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}

	/**
	 * Create a directory.
	 *
	 * @param path
	 */
	createDir(path) {
		path = this.applyPrefix(path);

		return fs2.mkdir(path, {
			intermediate : true
		});
	}

	/**
	 * List the contents of a directory, with sizes etc.
	 *
	 * @param path
	 */
	listContents(path, recursive) {
		path = this.applyPrefix(path);

		return fs2.readdir(path, {
			depth : recursive ? Infinity : 0
		})
	}

	/**
	 * Get the stats of a file
	 *
	 * @param path
	 */
	getMetadata(path) {
		path = this.applyPrefix(path);

		return fs2.stat(path);
	}
}

module.exports = LocalAdapter;