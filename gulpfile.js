var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

gulp.task(
  'compile',
  [
    'compile-es6',
    'compile-html',
    'compile-scss'
  ]
);

gulp.task(
  'compile-es6',
  function() {
    gulp.src('src/**/*.js')
      .pipe(plumber())
      .pipe(babel())
      .pipe(gulp.dest('www'));
  }
);

gulp.task(
  'compile-html',
  function() {
    gulp.src('src/**/*.html')
      .pipe(gulp.dest('www'));
  }
);

gulp.task(
  'compile-scss',
  function() {
    gulp.src('src/**/*.scss')
      .pipe(sass({ includePaths: ['node_modules'] }).on('error', sass.logError))
      .pipe(gulp.dest('www'));
  }
);

gulp.task(
  'watch',
  function() {
    gulp.watch('src/**/*', ['compile']);
  }
);
