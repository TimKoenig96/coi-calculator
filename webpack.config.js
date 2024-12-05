import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export default (_, {mode}) => {
	const is_production = (mode === "production");

	return {
		entry: "./src/Script.ts",

		output: {
			path: resolve("./dist/"),
			filename: "script.js",
			clean: true
		},

		module: {
			rules: [
				{
					test: /\.ts$/,
					use: "ts-loader",
					exclude: /node-modules/
				}
			]
		},

		resolve: {
			extensions: [".ts", ".js"]
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: "./src/index.html",
				inject: true,
				scriptLoading: "module",
				minify: {
					removeRedundantAttributes: false,
					collapseWhitespace: is_production
				}
			}),

			new CopyPlugin({
				patterns: [{
					from: "./src",
					globOptions: {
						ignore: [
							"**/*.ts",
							"**/*.html"
						]
					}
				}]
			}),

			is_production && new CssMinimizerPlugin()
		].filter(Boolean),

		devtool: (is_production ? false : "eval-source-map"),

		optimization: {
			minimize: is_production
		},

		devServer: {
			client: {
				logging: "warn",
				overlay: true,
				progress: true
			},
			compress: true,
			port: 8080,
			static: false,
			watchFiles: [
				"./src/*"
			]
		}
	}
}
