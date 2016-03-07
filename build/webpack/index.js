import errorHandler from '../lib/error-handler';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import webpack from 'webpack-stream';
import webpackConfig from '../webpack.gulp';

export default function() {
  let { path } = webpackConfig.output;

  return gulp.src('./client')
    .pipe(plumber({ errorHandler }))
    .pipe(webpack({...webpackConfig, devtool: 'inline-source-map'}))
    .pipe(gulp.dest(path));
}
