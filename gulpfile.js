'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var responsive = require('gulp-responsive');
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

gulp.task('modify:collection', function () {
  gulp.src('src/original/collection/*')
    .pipe(responsive({
      '*': {
        height: 1920,
        format: 'jpeg'
      }
    }))
    .pipe(gulp.dest('src/modified/collection'));
});

gulp.task('modify:muses', function () {
  gulp.src('src/original/muses/*')
    .pipe(responsive({
      '*': {
        width: 450,
        format: 'jpeg',
        rename: {
          extname: '.jpg'
        }
      }
    }))
    .pipe(gulp.dest('src/modified/muses'));
});

gulp.task('watch', function () {
  gulp.watch('scripts/*.js', ['scripts']);
  gulp.watch('sass/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
