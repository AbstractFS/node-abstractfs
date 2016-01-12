"use strict";

const Path = require('./normalize'),
	  Promise = require('bluebird');

class Filesystem {
	constructor(adapter) {
		this.adapter = adapter;
	}

	/**
	 * Check if a file exists.
	 * @param path
	 */
	has(path, cb) {
		const promise = Path.normalizePath(path).then((path) => this.adapter.has(path));

		if (cb) {
			promise.nodeify(cb);
		}

		return promise;
	}

	/**
	 * Write a file.
	 * @param path
	 * @param contents
	 */
	write(path, contents, cb) {
		const promise = Path.normalizePath(path).then((path) => this.adapter.write(path, contents));

		if (cb) {
			promise.nodeify(cb);
		}

		return promise;
	}

	/**
	 * Write a file using a stream.
	 * @param path
	 * @param stream
	 */
	writeStream(path, stream, cb) {
		const promise = Path.normalizePath(path).then((path) => this.adapter.writeStream(path, stream));

		if (cb) {
			promise.nodeify(cb);
		}

		return promise;
	}

	/**
	 * Read a file's contents.
	 *
	 * @param path
	 */
	read(path, cb) {
		const promise = Path.normalizePath(path).then((path) => this.adapter.read(path));

		if (cb) {
			promise.nodeify(cb);
		}

		return promise;
	}

	/**
	 * Get a stream to the file's contents.
	 *
	 * @param path
	 */
	readStream(path, cb) {
		const promise = Path.normalizePath(path).then((path) => this.adapter.readStream(path));

		if (cb) {
			promise.nodeify(cb);
		}

		return promise;
	}

	/**
	 * Rename/move a file/directory.
	 *
	 * @param path
	 * @param newpath
	 */
	rename(path, newpath, cb) {
		const promise = Promise.props({ path : Path.normalizePath(path), newpath : Path.normalizePath(newpath) }).then((result) => this.adapter.rename(result.path, result.newpath));

		if (cb) {
			promise.nodeify(cb);
		}

		return promise;
	}

	/**
	 * Copy a file/directory to a new path.
	 *
	 * @param path
	 * @param newpath
	 */
	copy(path, newpath, cb) {
		const promise = Promise.props({ path : Path.normalizePath(path), newpath : Path.normalizePath(newpath) }).then((result) => this.adapter.copy(result.path, result.newpath));

		if (cb) {
			promise.nodeify(cb);
		}

		return promise;
	}

	/**
	 * Delete a file.
	 *
	 * @param path
	 */
	delete(path, cb) {
		const promise = Path.normalizePath(path).then((path) => this.adapter.delete(path));

		if (cb) {
			promise.nodeify(cb);
		}

		return promise;
	}

	/**
	 * Delete a directory.
	 *
	 * @param path
	 */
	deleteDir(path, cb) {
		const promise = Path.normalizePath(path).then((path) => this.adapter.deleteDir(path));

		if (cb) {
			promise.nodeify(cb);
		}

		return promise;
	}

	/**
	 * Create a directory.
	 *
	 * @param path
	 */
	createDir(path, cb) {
		const promise = Path.normalizePath(path).then((path) => this.adapter.createDir(path));

		if (cb) {
			promise.nodeify(cb);
		}

		return promise;
	}

	/**
	 * List the contents of a directory, with sizes etc.
	 *
	 * TODO unify this format, defining a standard it should use...
	 *
	 * @param path
	 */
	listContents(path, recursive, cb) {
		const promise = Path.normalizePath(path).then((path) => this.adapter.listContents(path, recursive));

		if (cb) {
			promise.nodeify(cb);
		}

		return promise;
	}

	/**
	 * Get the size of a file.
	 *
	 * @param path
	 */
	getMetadata(path) {
		const promise = Path.normalizePath(path).then((path) => this.adapter.getMetadata(path));

		if (cb) {
			promise.nodeify(cb);
		}

		return promise;
	}
}

module.exports = Filesystem;