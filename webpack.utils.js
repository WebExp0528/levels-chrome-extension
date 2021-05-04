const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const path = require('path');

const getHTMLPlugins = (browserDir, outputDir = 'dev', sourceDir = 'src') => [
    new HtmlWebpackPlugin({
        title: 'Popup',
        filename: path.resolve(__dirname, `${outputDir}/${browserDir}/popup/index.html`),
        template: `${sourceDir}/popup/index.html`,
        chunks: ['popup'],
    }),
    new HtmlWebpackPlugin({
        title: 'Options',
        filename: path.resolve(__dirname, `${outputDir}/${browserDir}/options/index.html`),
        template: `${sourceDir}/options/index.html`,
        chunks: ['options'],
    }),
];

const getOutput = (browserDir, outputDir = 'dev') => {
    return {
        path: path.resolve(process.cwd(), `${outputDir}/${browserDir}`),
        filename: '[name]/[name].js',
    };
};

const getEntry = (sourceDir = 'src') => {
    return {
        popup: [path.resolve(__dirname, `${sourceDir}/popup/index.tsx`)],
        options: [path.resolve(__dirname, `${sourceDir}/options/options.tsx`)],
        content: [path.resolve(__dirname, `${sourceDir}/content/index.tsx`)],
        background: [path.resolve(__dirname, `${sourceDir}/background/index.ts`)],
        hotreload: [path.resolve(__dirname, `${sourceDir}/utils/hot-reload.js`)],
    };
};

const getCopyPlugins = (browserDir, outputDir = 'dev', sourceDir = 'src') => [
    new CopyWebpackPlugin({
        patterns: [
            {
                from: `${sourceDir}/assets`,
                to: path.resolve(__dirname, `${outputDir}/${browserDir}/assets`),
            },
            {
                from: `${sourceDir}/_locales`,
                to: path.resolve(__dirname, `${outputDir}/${browserDir}/_locales`),
            },
            {
                from: `${sourceDir}/manifest.json`,
                to: path.resolve(__dirname, `${outputDir}/${browserDir}/manifest.json`),
            },
        ],
    }),
];

const getFirefoxCopyPlugins = (browserDir, outputDir = 'dev', sourceDir = 'src') => [
    new CopyWebpackPlugin({
        patterns: [
            {
                from: `${sourceDir}/assets`,
                to: path.resolve(__dirname, `${outputDir}/${browserDir}/assets`),
            },
            {
                from: `${sourceDir}/_locales`,
                to: path.resolve(__dirname, `${outputDir}/${browserDir}/_locales`),
            },
            {
                from: `${sourceDir}/manifest-ff.json`,
                to: path.resolve(__dirname, `${outputDir}/${browserDir}/manifest.json`),
            },
        ],
    }),
];

const getZipPlugin = (browserDir, outputDir = 'dist') =>
    new ZipPlugin({
        path: path.resolve(__dirname, `${outputDir}/${browserDir}`),
        filename: browserDir,
        extension: 'zip',
        fileOptions: {
            mtime: new Date(),
            mode: 0o100664,
            compress: true,
            forceZip64Format: false,
        },
        zipOptions: {
            forceZip64Format: false,
        },
    });

const getResolves = () => {
    return {
        alias: {
            utils: path.resolve(__dirname, './src/utils/'),
            popup: path.resolve(__dirname, './src/popup/'),
            background: path.resolve(__dirname, './src/background/'),
            options: path.resolve(__dirname, './src/options/'),
            content: path.resolve(__dirname, './src/content/'),
            assets: path.resolve(__dirname, './src/assets/'),
            components: path.resolve(__dirname, './src/components/'),
            types: path.resolve(__dirname, './src/types/'),
            '@redux': path.resolve(__dirname, './src/@redux/'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    };
};

module.exports = {
    getHTMLPlugins,
    getOutput,
    getCopyPlugins,
    getFirefoxCopyPlugins,
    getZipPlugin,
    getEntry,
    getResolves,
};
