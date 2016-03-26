import gulp from 'gulp';
import path from 'path';

import lintjs from './gulp-tasks/lintjs';
import nodemon from 'gulp-nodemon';
import webpack from './gulp-tasks/webpack';
import sass from './gulp-tasks/sass';

import sync, { stream, reload } from 'browser-sync';

// Lint Javascript Files
gulp.task('lint', lintjs);

// Build Sass Files
gulp.task('sass', () => sass().pipe(stream({match: 'css/main.css'})));

// Server Files
gulp.task('nodemon', (cb) => {
  let called = false;

  nodemon({
    script: 'index',
    ext: 'js html',
    ignore: ['app', 'node_modules', 'client']
  })

  .on('start', function() {
    if (called === false) {
      called = true;
      cb();
    }
  })

  .on('restart', function() {
    setTimeout(function() {
      reload({ stream: false });
    }, 1500);
  });
});

// Watch for changes
gulp.task('watch', () => {
  gulp.watch('src/styles/**/*.scss', ['sass']);
});

// browser sync
gulp.task('serve', ['sass', 'nodemon'], () => {
  sync.init(null, {
    proxy: 'http://localhost:5000',
    logLevel: 'debug',
    port: 8080,
    open: false,
    reloadDelay: 1000
  });

  gulp.watch(path.resolve(__dirname, 'src/styles/**/*.css'), ['sass']);
});

// Client Scripts Task
gulp.task('webpack', webpack);

// Build Task
gulp.task('build', ['lint', 'sass', 'webpack']);

// Default Taks
gulp.task('default', ['build']);
