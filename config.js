exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                       	// need to include this to host for heroku:
                            'mongodb://deb:lolpassword@ds113668.mlab.com:13668/mixtape' :
                            'mongodb://deb:lolpassword@ds113668.mlab.com:13668/mixtape');
exports.PORT = process.env.PORT || 3000;