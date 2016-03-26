import errorHandler from '../lib/error-handler';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import plumber from 'gulp-plumber';
import webpack from 'webpack-stream';
import webpackConfig from '../webpack.gulp';
import uglify from 'gulp-uglify';

require('dotenv').config();

const ENV = process.env.NODE_ENV;
const BASE = path.resolve(__dirname, '../..');
const DEV = ENV === 'development';

let config;

if (DEV === true) {
  config = Object.assign({}, webpackConfig, {
    devtool: 'inline-source-map'
  });
}

else {
  config = webpackConfig;
}

export default function() {
  return gulp.src(webpackConfig.entry['js/app'])
    .pipe(plumber({ errorHandler }))
    .pipe(webpack(config))
    .pipe(ENV === 'production' ? uglify() : gutil.noop())
    .pipe(gulp.dest(path.resolve(BASE, 'dist')));
}
