"use strict";

class Adapter {
	constructor(prefix) {

	}

	/**
	 * Check if a file exists.
	 * @param path
	 */
	has(path) {

	}

	/**
	 * Write a file.
	 * @param path
	 * @param contents
	 */
	write(path, contents) {

	}

	/**
	 * Write a file using a stream.
	 * @param path
	 * @param stream
	 */
	writeStream(path, stream) {

	}

	/**
	 * Read a file's contents.
	 *
	 * @param path
	 */
	read(path) {

	}

	/**
	 * Get a stream to the file's contents.
	 *
	 * @param path
	 */
	readStream(path) {

	}

	/**
	 * Rename/move a file/directory.
	 *
	 * @param path
	 * @param newpath
	 */
	rename(path, newpath) {

	}

	/**
	 * Copy a file/directory to a new path.
	 *
	 * @param path
	 * @param newpath
	 */
	copy(path, newpath) {

	}

	/**
	 * Delete a file.
	 *
	 * @param path
	 */
	delete(path) {

	}

	/**
	 * Delete a directory.
	 *
	 * @param path
	 */
	deleteDir(path) {

	}

	/**
	 * Create a directory.
	 *
	 * @param path
	 */
	createDir(path) {

	}

	/**
	 * List the contents of a directory, with sizes etc.
	 *
	 * @param path
	 */
	listContents(path) {

	}

	/**
	 * Get the size of a file.
	 *
	 * @param path
	 */
	getMetadata(path) {

	}
}

module.exports = Adapter;