import eslint from 'gulp-eslint';
import gulp from 'gulp';
import path from 'path';

module.exports = function() {
  return gulp.src(path.join(__dirname, '..', 'src'))
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
};
