var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var sass = require('gulp-sass');
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
    browserify('src/js/app.js')
      .transform('babelify', {presets: ['es2015', 'react']})
      .bundle()
      .pipe(fs.createWriteStream('www/js/app.js'));
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
