'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var responsive = require('gulp-responsive');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('images:collection-thumbnails', function () {
  gulp.src('src/collection/*')
    .pipe(responsive({
      '*': {
        height: 310,
        width: 230,
        quality: 100
      }
    }))
    .pipe(gulp.dest('public/images/collection/thumbnails'));
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

gulp.task('concat:styles', function() {
  return gulp.src(['public/stylesheets/slick.css', 'public/stylesheets/styles.css'])
    .pipe(concat('build.css'))
    .pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('watch', function () {
  gulp.watch('scripts/*.js', ['scripts']);
  gulp.watch('sass/*.scss', ['styles', 'concat:styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
