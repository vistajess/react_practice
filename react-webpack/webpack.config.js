module.exports = {
	entry: "./app.jsx",
	output : {
		path: __dirname + "/build",
		filename: "app.js"
	},
	 module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx-loader" },
            
        ]
    }
};