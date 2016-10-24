'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('sass', function () {
  return gulp.src('./assets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'));
});

gulp.task('minify-css', function() {
  return gulp.src('style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('.'));
});
 
gulp.task('watch', function () {
  gulp.watch('./assets/*.scss', ['sass']);
  gulp.watch('style.css', ['minify-css']);
  gulp.watch('main.js', ['babel']);
});

gulp.task('default', ['sass', 'minify-css', 'watch']);