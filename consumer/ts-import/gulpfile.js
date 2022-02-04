const gulp = require('gulp');
const {series} = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('gulp-browserify');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function cleanAll(cb) {
  return gulp.src([
      "./tmp/",
      "./dist/js"
    ], { read: false, allowEmpty: true })
    .pipe(clean());
}

function transpileTS() {
  const tsproject = ts.createProject('./tsconfig.json');
  return tsproject
      .src()
      .pipe(sourcemaps.init())
      .pipe(tsproject()).js
      .pipe(sourcemaps.write('./sourcemaps'))
      .pipe(gulp.dest('./tmp/js'));
}

function minJS() {
  return gulp
      .src('./tmp/js/Index.js')
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(browserify())
    //   .pipe(uglify())
      .pipe(concat('index.min.js'))
      .pipe(sourcemaps.write('./sourcemaps'))
      .pipe(gulp.dest('./dist/js'))
}

exports.default = series( cleanAll, transpileTS, minJS );