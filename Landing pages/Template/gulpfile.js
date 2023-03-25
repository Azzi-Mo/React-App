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
const failedReporter = require("gulp-eslint-failed-reporter");
const plumber = require('gulp-plumber');
const eslintReact = require('eslint-plugin-react');
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
//NavBar
gulp.task("NavBar", function () {
  return (
    gulp
      .src(["./jsx/NavBar.jsx"])
      // .pipe(
      //   babel({
      //     presets: ["@babel/env", "@babel/preset-react"],
      //   })
      // )
      .pipe(sourcemaps.init())
      .pipe(react())
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(eslint())
      // .pipe(eslint({ fix: true }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .pipe(
        eslint.results((results) => {
          console.log(`Total Results: ${results.length}`);
          console.log(`Total Warnings: ${results.warningCount}`);
          console.log(`Total Errors: ${results.errorCount}`);
        })
      )
      .pipe(plumber())
    .pipe(eslint({
      plugins: ['react'],
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'react/jsx-uses-vars': 'error',
        'no-func-assign': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-vars': 'error',
        'no-unused-labels': 'error',
        'no-unsafe-negation': 'error'
      }
    }))
    .pipe(eslint.format())
      .pipe(failedReporter())
      .pipe(gulp.dest("./src/Component"))
  );
});
//Landing
gulp.task("Landing", function () {
  return gulp
    .src(["./jsx/Landing.jsx"])
    .pipe(
      babel({
        presets: ["@babel/env", "@babel/preset-react"],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/Component"));
});
//Features
gulp.task("Features", function () {
  return gulp
    .src(["./jsx/Features.jsx"])
    .pipe(
      babel({
        presets: ["@babel/env", "@babel/preset-react"],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/Component"));
});

//SpecialHeading
gulp.task("SpecialHeading", function () {
  return gulp
    .src(["./jsx/SpecialHeading.jsx"])
    .pipe(
      babel({
        presets: ["@babel/env", "@babel/preset-react"],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/Component"));
});

//Services

gulp.task("Services", function () {
  return gulp
    .src(["./jsx/Services.jsx"])
    .pipe(
      babel({
        presets: ["@babel/env", "@babel/preset-react"],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/Component"));
});

//Portfolio

gulp.task("Portfolio", function () {
  return gulp
    .src(["./jsx/Portfolio.jsx"])
    .pipe(
      babel({
        presets: ["@babel/env", "@babel/preset-react"],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/Component"));
});

//About
gulp.task("About", function () {
  return gulp
    .src(["./jsx/About.jsx"])
    .pipe(
      babel({
        presets: ["@babel/env", "@babel/preset-react"],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/Component"));
});

//Contact
gulp.task("Contact", function () {
  return gulp
    .src(["./jsx/Contact.jsx"])
    .pipe(
      babel({
        presets: ["@babel/env", "@babel/preset-react"],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/Component"));
});

// Data
gulp.task("Data", function () {
  return gulp
    .src(["./jsx/Data.js"])
    .pipe(
      babel({
        presets: ["@babel/env", "@babel/preset-react"],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/Component"));
});

gulp.task("sass", compileSass);
gulp.task("default", gulp.series("NavBar"));
gulp.task("default", gulp.series("Landing"));
gulp.task("default", gulp.series("Features"));
gulp.task("default", gulp.series("Services"));
gulp.task("default", gulp.series("SpecialHeading"));
gulp.task("default", gulp.series("Portfolio"));
gulp.task("default", gulp.series("About"));
gulp.task("default", gulp.series("Contact"));
gulp.task("default", gulp.series("Data"));

gulp.task("lint", function () {
  return gulp
    .src(["./jsx/*.jsx", "!node_modules/**"])
    .pipe(eslint())
    .pipe(plumber())
    .pipe(eslint({
      plugins: ['react'],
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'react/jsx-uses-vars': 'error',
        'no-func-assign': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-vars': 'error',
        'no-unused-labels': 'error',
        'no-unsafe-negation': 'error'
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
// gulp.task('build', gulp.series('lint', /* other build tasks */));

gulp.task("watch", function () {
  gulp.watch("./Style/Styles.scss", compileSass);
  gulp.watch(["./jsx/Landing.jsx"], gulp.series("Landing"));
  gulp.watch(["./jsx/NavBar.jsx"], gulp.series("NavBar"));
  gulp.watch(["./jsx/Features.jsx"], gulp.series("Features"));
  gulp.watch(["./jsx/Services.jsx"], gulp.series("Services"));
  gulp.watch(["./jsx/SpecialHeading.jsx"], gulp.series("SpecialHeading"));
  gulp.watch(["./jsx/Portfolio.jsx"], gulp.series("Portfolio"));
  gulp.watch(["./jsx/About.jsx"], gulp.series("About"));
  gulp.watch(["./jsx/Contact.jsx"], gulp.series("Contact"));
  gulp.watch(["./jsx/Data.js"], gulp.series("Data"));
});
