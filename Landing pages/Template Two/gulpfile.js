/* eslint-disable no-undef */
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
// import plumber from "gulp-plumber";
// import babel from "gulp-babel";
// import { init, write } from "gulp-sourcemaps";
// import rename from "gulp-rename";

// Set up the source and destination file paths
const paths = {
  src: ["./jsx/*.jsx", "./jsx/*.js"],
  dest: "./src/Component",
};

// Define the gulp task
function watch() {
  gulp.watch(
    paths.src.map((src) => src),
    compile 
    
  );
  gulp.watch(
    './Style/Styles.scss',
    compielSass 
    
  );
}

function compielSass()
{
  return gulp.src('./Style/Styles.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer()]))
  .pipe(dest('./src/Component'));
}

// Define the function to compile the JSX file
function compile() {
  return gulp.src(paths.src.map((src) => src))
    .pipe(plumber()) // Prevents gulp from stopping on error
    .pipe(init()) // Creates sourcemaps for debugging
    .pipe(babel()) // Transpile JSX to ES5 JavaScript
    .pipe(rename({ extname: ".js" })) // Rename the file extension
    .pipe(write(".")) // Writes the sourcemaps
    .pipe(dest(paths.dest)); // Outputs the compiled file
}



// Define the gulp task

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
