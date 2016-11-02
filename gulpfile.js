'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var responsive = require('gulp-responsive');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('images:share', function () {
  gulp.src('src/share.*')
    .pipe(responsive({
      '*': {
        height: 315,
        width: 600,
        format: 'jpeg'
      }
    }))
    .pipe(gulp.dest('public/images'));
});

gulp.task('scripts', function () {
  gulp.src('scripts/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('public/scripts'));
});

gulp.task('styles', function () {
  gulp.src('sass/*.scss')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function () {
  gulp.watch('scripts/*.js', ['scripts']);
  gulp.watch('sass/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
