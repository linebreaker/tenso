require("./index.js")({
	port: 8000,
	routes: require("./test/routes.js"),
	logging: {
		level: "error",
		dtrace: true,
		stderr: true
	},
	auth: {
		local: {
			enabled: false,
			auth: function (username, password, callback) {
				if (username === "test" && password === 123) {
					callback(null, {username: username, password: password});
				} else {
					callback(true, null);
				}
			}
		},
		jwt: {
			enabled: true,
			auth: function (token, cb) {
				cb(null, token);
			},
			secretOrKey: "jennifer"
		},
		protect: ["/uuid"]
	},
	security: {
		csrf: false
	}
});
