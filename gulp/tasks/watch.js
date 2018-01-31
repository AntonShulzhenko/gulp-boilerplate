var gulp = require('gulp');

gulp.task('watch',
  [
    'copy:watch',
    'pug:watch',
    // 'sprite:svg:watch',
    // 'svgo:watch',
    // 'list-pages:watch',
    'webpack:watch',
    'sass:watch'
  ]);
