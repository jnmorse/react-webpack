require('babel-core/register');

import eslint from 'gulp-eslint';
import gulp from 'gulp';
import webpack from './build/webpack';

// const stream = process.stdout;

gulp.task('lint', () => {
  return gulp.src(['client/**/**.js', 'server/**/**.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Client Scripts Task
gulp.task('client', ['lint'], webpack);

// Build Task
gulp.task('build', ['client']);

// Default Taks
gulp.task('default', ['build']);
