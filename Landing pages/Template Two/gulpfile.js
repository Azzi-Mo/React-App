/* eslint-disable no-undef */
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

// Set up the source and destination file paths
const paths = {
  src: ['./jsx/*.jsx' , './jsx/*.js'],
  dest: './src/Component'
};

// Define the gulp task
function watch() {
  return gulp.watch(paths.src.map((src)=> src), compile);
}

// Define the function to compile the JSX file
function compile() {
  return gulp.src(paths.src.map((src)=> src))
    .pipe(plumber()) // Prevents gulp from stopping on error
    .pipe(sourcemaps.init()) // Creates sourcemaps for debugging
    .pipe(babel()) // Transpile JSX to ES5 JavaScript
    .pipe(rename({ extname: '.js' })) // Rename the file extension
    .pipe(sourcemaps.write('.')) // Writes the sourcemaps
    .pipe(gulp.dest(paths.dest)); // Outputs the compiled file
}

// Expose the gulp task for command line usage
exports.watch = watch;