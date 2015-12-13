module.exports = {
	Filesystem : require('./lib/filesystem'),
	Adapters : {
		Local : require('./lib/adapters/local')
	}
};