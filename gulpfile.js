'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
  gulp.src('scripts/*.js')
  .pipe(uglify())
  .pipe(livereload())
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
  .pipe(livereload())
  .pipe(gulp.dest('public/vendor/stylesheets'));
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('scripts/*.js', ['scripts', 'styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
