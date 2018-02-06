const gulp     = require('gulp');
const config   = require('../config.js');
const imagemin = require('gulp-imagemin');

gulp.task('copy:fonts', () => {
  return gulp
    .src(`${config.src.fonts}/*.{ttf,eot,woff,woff2}`)
    .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:img', () => {
  return gulp
    .src([
      `${config.src.img}/**/*.{jpg,png,jpeg,svg,gif}`,
      `${config.src.icons}/**/*.{png,svg}`,
      `!${config.src.img}/svgo/**/*.*`
    ])
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(config.dest.img));
});

gulp.task('copy', [
  'copy:img',
  'copy:fonts'
]);
gulp.task('copy:watch', () => {
  gulp.watch(`${config.src.img}/*`, ['copy']);
});
