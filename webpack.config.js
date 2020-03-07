const {BannerPlugin} = require("webpack");

const isDebug = (process.env.NODE_ENV === "development");

module.exports = {
    devtool: false,
    entry: {
        cli: "./src/cli.js"
    },
    mode: (isDebug ? "development" : "production"),
    output: {
        filename: "[name].js",
        path: __dirname + "/build",
        libraryTarget: "umd"
    },
    plugins: [
        new BannerPlugin({
            banner: "#!/usr/bin/env node",
            raw: true,
            exclude: "*",
            include: "cli.js"
        })
    ],
    target: "node"
};
