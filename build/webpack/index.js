import errorHandler from '../lib/error-handler';
import gulp from 'gulp';
import path from 'path';
import plumber from 'gulp-plumber';
import webpack from 'webpack-stream';
import webpackConfig from '../webpack.gulp';

const BASE = path.join(__dirname, '..', '..');
console.log(BASE);

export default function() {
  return gulp.src(webpackConfig.entry.client)
    .pipe(plumber({ errorHandler }))
    .pipe(webpack({...webpackConfig, devtool: 'inline-source-map'}))
    .pipe(gulp.dest(path.join(BASE, 'app', 'js')));
}
