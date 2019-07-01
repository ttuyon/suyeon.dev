'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const connect = require('gulp-connect');

gulp.task('connect', () => {
  connect.server({
    livereload: true
  });
});
 
gulp.task('sass', () => {
  return gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});
 
gulp.task('watch', () => {
  gulp.watch('./css/**/*.scss', gulp.series('sass'));
  ['./script/**/*.js', './index.html'].forEach((glob) => {
    gulp.watch(glob, gulp.series(() => gulp.src(glob).pipe(connect.reload())));
  });
});

gulp.task('default', gulp.parallel('connect', 'watch'));