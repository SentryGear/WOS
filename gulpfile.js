'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
  gulp.src('scripts/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('public/vendor/scripts'));
});

gulp.task('styles', function () {
  gulp.src('sass/*.scss')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('public/vendor/stylesheets'));
});

gulp.task('watch', function () {
  gulp.watch('scripts/*.js', ['scripts', 'styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
