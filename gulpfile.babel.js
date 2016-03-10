import gulp from 'gulp';
import lintjs from './build/lintjs';
import webpack from './build/webpack';
import sass from './build/sass';

// const stream = process.stdout;

gulp.task('lint', lintjs);

gulp.task('sass', sass);

// Client Scripts Task
gulp.task('client', ['lint'], webpack);

// Build Task
gulp.task('build', ['lint', 'sass', 'client']);

// Default Taks
gulp.task('default', ['build']);
