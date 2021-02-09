import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

console.log("devMode: " + process.env.NODE_ENV);

const devMode = process.env.NODE_ENV;

const currentPath = path.join(__dirname);

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve("dist/assets"),
        filename: "js/[name].bundle.js",
        chunkFilename: "js/[name].bundle.js",
        publicPath: "/"   //It's mandatory to define this publicPath to get access to the website when we reload     
    },
    devtool: "source-map",
    devServer: {
        inline: true,
        contentBase: './dist', 
        port: 3000,
        open: true, //Open web browser by default
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",    //where is our template
            filename: "../index.html",              //where we are going to put our index.html inside the output directory
            //favicon: "./src/client/img/favicon-96x96.png",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }            
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-react"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader, 
                    "css-loader"],
            },            
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    publicPath: "/assets/images/",
                    outputPath: "./images/"
                }
            },            
        ]
    }
};