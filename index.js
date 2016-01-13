module.exports = {
	Filesystem : require('./lib/filesystem'),
	Adapter : require('./lib/adapter'),

	Adapters : {
		Local : require('./lib/adapters/local')
	}
};