import autoprefixer from 'autoprefixer';
import cssnano from 'gulp-cssnano';
import errorHandler from './lib/error-handler';
import gulp from 'gulp';
import path from 'path';
import fm from 'postcss-font-magician';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import { stream } from 'browser-sync';

export default function() {
  return gulp.src(path.resolve(__dirname, '../src/styles/**/*.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', errorHandler))
    .pipe(postcss(
      [fm(), autoprefixer({ browsers: ['last 2 versions'] })]
    ))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.join(__dirname, '..', 'dist', 'css')))
    .pipe(stream({match: '**/*.css'}));
}
