const path = require('path'),
      merge = require('webpack-merge'),
      nodeExternals = require('webpack-node-externals');

const mode = process.env.NODE_ENV || 'development';

const commons = {
  mode,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
};

module.exports = [
  merge.smart([commons, {
    name: 'client',
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  }]),
  merge.smart([commons, {
    name: 'server',
    entry: './src/server.ts',
    externals: [nodeExternals()],
    target: 'node',
    node: false,
    output: {
      filename: 'server.js',
      libraryTarget: 'commonjs',
      path: path.resolve(__dirname, 'dist')
    }
  }])
];
