let gulp = require('gulp');

gulp.task('copy', () => {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('build/'));
});
