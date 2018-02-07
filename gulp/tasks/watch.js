const gulp   = require('gulp');
const config = require('../config');

gulp.task('watch',
  [
    'copy:watch',
    'nunjucks:watch',
    'sprite:svg:watch',
    'svgo:watch',
    'list-pages:watch',
    'webpack:watch',
    'sass:watch'
  ]
);
