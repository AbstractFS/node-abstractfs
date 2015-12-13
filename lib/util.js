function streamToPromise(stream) {
	return new Promise(function(resolve, reject) {
		stream.on("end", resolve);
		stream.on("error", reject);
	});
}

module.exports = {
	streamToPromise : streamToPromise
};