let gulp = require('gulp');
let sass = require('gulp-sass');
let cfgStyles = require('../package.json').config.styles;

gulp.task('sass', function () {
  return gulp.src(`${cfgStyles.src.sass}/**/*.{scss,sass}`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(`${cfgStyles.build.css}`));
});

gulp.task('sass:watch', function () {
  gulp.watch(`${cfgStyles.src.sass}/**/*.{scss,sass}`, ['sass']);
});
