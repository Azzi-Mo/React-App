const gulp = require("gulp");
const react = require("gulp-react");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

// Compile Sass

function compileSass() {
  return (
    gulp
      .src("./src/Component/Style/Styles.scss")
      // 2. Compile Sass to CSS
      .pipe(sass().on("error", sass.logError))
      // 3. Add vendor prefixes
      .pipe(autoprefixer())
      // 4. Rename the CSS file
      .pipe(rename("style.css"))
      // 5. Minify CSS
      .pipe(cleanCSS())
      // 6. Write the CSS file to the 'dist' folder
      .pipe(gulp.dest("./dist/css"))
      // 7. Stream changes to all connected browsers
      .pipe(browserSync.stream())
  );
}

gulp.task("build-js", function () {
  return gulp
    .src("./src/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(concat("bundle.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"));
});

gulp.task("sass", compileSass);
gulp.task("default", gulp.series("build-js"));

gulp.task("watch", function () {
  gulp.watch("./src/Component/Style/Styles.scss", compileSass);
  gulp.watch("./src/**/*.js", gulp.series("build-js"));
});
