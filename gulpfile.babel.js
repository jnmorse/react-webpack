import gulp from 'gulp';
import lintjs from './build/lintjs';
import nodemon from 'gulp-nodemon';
import webpack from './build/webpack';
import sass from './build/sass';
import sync, { reload } from 'browser-sync';

// Lint Javascript Files
gulp.task('lint', lintjs);

// Build Sass Files
gulp.task('sass', sass);

// Server Files
gulp.task('serve', () => {
  nodemon({
    script: 'server',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' },
    ignore: ['app', 'node_modules', 'client']
  });
});

// Watch for changes
gulp.task('watch', () => {
  gulp.watch('src/styles/**/*.scss', ['sass']);
  gulp.watch('src/client/**/*.js', ['client']);
});

// browser sync
gulp.task('sync', ['sass', 'client', 'serve', 'watch'], () => {
  sync.init(null, {
    proxy: 'http://localhost:3000',
    logLevel: 'debug',
    files: ['src/**/*'],
    port: 3001,
    open: false,
    reloadDelay: 1000
  });
});

// Client Scripts Task
gulp.task('client', webpack);

// Build Task
gulp.task('build', ['lint', 'sass', 'client']);

// Default Taks
gulp.task('default', ['build']);
