const gulp   = require('gulp');
const config = require('../config');

gulp.task('watch',
  [
    'copy:watch',
    'nunjucks:watch',
    'sass:watch',
    // 'sprite:svg:watch',
    // 'list-pages:watch',
    'webpack:watch'
  ]
);
