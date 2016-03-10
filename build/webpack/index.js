import errorHandler from '../lib/error-handler';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import plumber from 'gulp-plumber';
import webpack from 'webpack-stream';
import webpackConfig from '../webpack.gulp';
import uglify from 'gulp-uglify';

const ENV = process.env.NODE_ENV || 'development';
const BASE = path.join(__dirname, '..', '..');
const DEV = ENV === 'development';

export default function() {
  return gulp.src(webpackConfig.entry.client)
    .pipe(plumber({ errorHandler }))
    .pipe(webpack({...webpackConfig, devtool: 'inline-source-map'}))
    .pipe(DEV ? gutil.noop() : uglify())
    .pipe(gulp.dest(path.join(BASE, 'app', 'js')));
}
