var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var image = require('gulp-image');
var sym = require('gulp-sym');
var watch = require('gulp-watch');

gulp.task(
  'compile',
  [
    'compile-es6',
    'compile-html',
    'compile-scss',
    'compile-image',
    'compile-symlink'
  ]
);

gulp.task(
  'compile-es6',
  function() {
    browserify('src/js/app.js')
      .transform('babelify', {presets: ['es2015', 'react']})
      .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('www/js/'));
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
    gulp.src('src/css/app.scss')
      .pipe(sass({ includePaths: ['node_modules'] }).on('error', sass.logError))
      .pipe(gulp.dest('www/css/'));
  }
);

gulp.task(
  'compile-image',
  function() {
    gulp.src('src/img/*')
      .pipe(image())
      .pipe(gulp.dest('www/img/'));
  }
);

gulp.task(
  'compile-symlink',
  function() {
    gulp.src('node_modules/font-awesome/fonts')
      .pipe(sym('www/fonts', { force: true }));
  }
);

gulp.task(
  'watch',
  function() {
    gulp.watch('src/**/*', ['compile']);
  }
);
