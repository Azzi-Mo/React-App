/* eslint-disable no-undef */
const gulp = require("gulp");
const react = require("gulp-react");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const eslint = require("gulp-eslint");
// const concat = require("gulp-concat");
// const responsive = require('gulp-responsive');

// Compile Sass

function compileSass() {
  return (
    gulp
      .src("./Style/Styles.scss")
      // 2. Compile Sass to CSS
      .pipe(sass().on("error", sass.logError))
      // 3. Add vendor prefixes
      .pipe(autoprefixer())
      // 4. Rename the CSS file
      .pipe(rename("style.css"))
      // 5. Minify CSS
      .pipe(cleanCSS())
      // 6. Write the CSS file to the 'dist' folder
      .pipe(gulp.dest("./src/Component/style"))
      // 7. Stream changes to all connected browsers
      .pipe(browserSync.stream())
  );
}

gulp.task("build-js", function () {
  return (
    gulp
      .src(["./jsx/Landing.jsx"])
      .pipe(
        babel({
          presets: ["@babel/env", "@babel/preset-react"],
        })
      )
      .pipe(sourcemaps.init())
      .pipe(react())
      // .pipe(concat("bundle.js"))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      // .pipe(react())
      // .pipe(eslint())
      // .pipe(eslint.format())
      // .pipe(eslint.failOnError())
      .pipe(gulp.dest("./src/Component"))
  );
});

gulp.task("compile-components", function () {
  return (
    gulp
      .src(["./jsx/NavBar.jsx"])
      .pipe(
        babel({
          presets: ["@babel/env", "@babel/preset-react"],
        })
      )
      .pipe(sourcemaps.init())
      .pipe(react())
      // .pipe(concat("bundle.js"))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      // .pipe(react())
      // .pipe(eslint())
      // .pipe(eslint.format())
      // .pipe(eslint.failOnError())
      .pipe(gulp.dest("./src/Component"))
  );
});

gulp.task("lint", function () {
  return gulp
    .src(["./jsx/*.jsx", "!node_modules/**"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("sass", compileSass);
gulp.task("default", gulp.series("build-js"));
gulp.task("default", gulp.series("compile-components"));

gulp.task("watch", function () {
  gulp.watch("./Style/Styles.scss", compileSass);
  gulp.watch(["./jsx/Landing.jsx"], gulp.series("build-js"));
  gulp.watch(["./jsx/NavBar.jsx"], gulp.series("compile-components"));
});
