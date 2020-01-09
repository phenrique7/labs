const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

function compileSass() {
  return src('./assets/css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./assets/css'));
}

function buildCss() {
  return src('./assets/css/style.css')
    .pipe(postcss())
    .pipe(rename('style.min.css'))
    .pipe(dest('./assets/css'));
}

exports.default = function() {
  watch('./assets/css/sass/**/*.scss', series(compileSass, buildCss));
};
