/* eslint-disable no-undef */
// /* eslint-disable no-undef */
// const gulp = require("gulp");
// const react = require("gulp-react");
// const babel = require("gulp-babel");
// const uglify = require("gulp-uglify");
// const sourcemaps = require("gulp-sourcemaps");
// const sass = require("gulp-sass")(require("sass"));
// const rename = require("gulp-rename");
// const cleanCSS = require("gulp-clean-css");
// const autoprefixer = require("gulp-autoprefixer");
// const browserSync = require("browser-sync").create();
// const eslint = require("gulp-eslint");
// const failedReporter = require("gulp-eslint-failed-reporter");
// const plumber = require("gulp-plumber");
// const eslintReact = require('eslint-plugin-react');
// const concat = require("gulp-concat");
// const responsive = require('gulp-responsive');

// // Compile Sass

// function compileSass() {
//   return (
//     gulp
//       .src("./Style/Styles.scss")
//       // 2. Compile Sass to CSS
//       .pipe(sass().on("error", sass.logError))
//       // 3. Add vendor prefixes
//       .pipe(autoprefixer())
//       // 4. Rename the CSS file
//       .pipe(rename("style.css"))
//       // 5. Minify CSS
//       .pipe(cleanCSS())
//       // 6. Write the CSS file to the 'dist' folder
//       .pipe(gulp.dest("./src/Component/style"))
//       // 7. Stream changes to all connected browsers
//       .pipe(browserSync.stream())
//   );
// }

// // NavBar

// gulp.task("build", function () {
//   return (
//     gulp
//       .src([
//         "./jsx/NavBar.jsx",
//         "./jsx/Landing.jsx",
//         "./jsx/Features.jsx",
//         "./jsx/SpecialHeading.jsx",
//         "./jsx/Services.jsx",
//         "./jsx/Portfolio.jsx",
//         "./jsx/About.jsx",
//         "./jsx/Contact.jsx",
//         "./jsx/Data.js",
//       ])
//       .pipe(
//         babel({
//           presets: ["@babel/env", "@babel/preset-react"],
//         })
//       )
//       .pipe(sourcemaps.init())
//       .pipe(react())
//       .pipe(uglify())
//       .pipe(sourcemaps.write())
//       .pipe(eslint())
//       .pipe(eslint({ fix: true }))
//       .pipe(eslint({ configFile: '.eslintrc.json' }))
//       .pipe(eslint({ configFile: '.eslintrc.json' }))
//       .pipe(eslint.format())
//       .pipe(eslint.failAfterError())
//       .pipe(
//         eslint.results((results) => {
//           console.log(`Total Results: ${results.length}`);
//           console.log(`Total Warnings: ${results.warningCount}`);
//           console.log(`Total Errors: ${results.errorCount}`);
//         })
//       )
//       .pipe(plumber())
//       .pipe(
//         eslint({
//           plugins: ["react"],
//           parserOptions: {
//             ecmaVersion: 2021,
//             sourceType: "module",
//             ecmaFeatures: {
//               jsx: true,
//             },
//           },
//           rules: {
//             "react/jsx-uses-vars": "error",
//             "no-func-assign": "error",
//             "no-unsafe-finally": "error",
//             "no-unused-vars": "error",
//             "no-unused-labels": "error",
//             "no-unsafe-negation": "error",
//             "no-console": "off",
//           },
//         })
//       )
//       .pipe(eslint.format())
//       .pipe(failedReporter())
//       .pipe(gulp.dest("./src/Component"))
//   );
// });

// // Landing

// // Features

// // SpecialHeading

// // Services

// // Portfolio

// // About

// // Contact

// // Data

// gulp.task("sass", compileSass);
// gulp.task("default", gulp.series("NavBar"));
// gulp.task("default", gulp.series("Landing"));
// gulp.task("default", gulp.series("Features"));
// gulp.task("default", gulp.series("Services"));
// gulp.task("default", gulp.series("SpecialHeading"));
// gulp.task("default", gulp.series("Portfolio"));
// gulp.task("default", gulp.series("About"));
// gulp.task("default", gulp.series("Contact"));
// gulp.task("default", gulp.series("Data"));

// gulp.task("lint", function () {
//   return (
//     gulp
//       .src(["./jsx/*.js", "!node_modules/**"])
//       .pipe(plumber())
//       .pipe(eslint())
// .pipe(eslint({ configFile: '.eslintrc.json' }))
// .pipe(eslint.format())
// .pipe(
//   eslint({
//     plugins: ["react"],
//     parserOptions: {
//       ecmaVersion: 2021,
//       sourceType: "module",
//       ecmaFeatures: {
//         jsx: true,
//       },
//     },
//     rules: {
//       "react/jsx-uses-vars": "error",
//       "no-func-assign": "error",
//       "no-unsafe-finally": "error",
//       "no-unused-vars": "error",
//       "no-unused-labels": "error",
//       "no-unsafe-negation": "error",
//       "no-console": "off",
//     },
//   })
// )
//       .pipe(eslint.failAfterError())
//   );
// });
// gulp.task("build", gulp.series("lint" /* other build tasks */));

// gulp.task("watch", function () {
//   gulp.watch("./Style/Styles.scss", compileSass);
//   gulp.watch(["./jsx/Landing.jsx"], gulp.series("Landing"));
//   gulp.watch(["./jsx/NavBar.jsx"], gulp.series("NavBar"));
//   gulp.watch(["./jsx/Features.jsx"], gulp.series("Features"));
//   gulp.watch(["./jsx/Services.jsx"], gulp.series("Services"));
//   gulp.watch(["./jsx/SpecialHeading.jsx"], gulp.series("SpecialHeading"));
//   gulp.watch(["./jsx/Portfolio.jsx"], gulp.series("Portfolio"));
//   gulp.watch(["./jsx/About.jsx"], gulp.series("About"));
//   gulp.watch(["./jsx/Contact.jsx"], gulp.series("Contact"));
//   gulp.watch(["./jsx/Data.js"], gulp.series("Data"));
// gulp.watch(["./jsx/*.js"], lint);
// });

// exports.default = gulp.series(lint, watch);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import { task, watch, series, src, dest } from "gulp";
// import babel from "gulp-babel";
// import { init, write } from "gulp-sourcemaps";
// import react from "gulp-react";

// task("watch", function () {
//   watch(
//     [
//       "./jsx/NavBar.jsx",
//       "./jsx/Landing.jsx",
//       "./jsx/Features.jsx",
//       "./jsx/SpecialHeading.jsx",
//       "./jsx/Services.jsx",
//       "./jsx/Portfolio.jsx",
//       "./jsx/About.jsx",
//       "./jsx/Contact.jsx",
//       "./jsx/Data.js",
//     ],
//     series("build-component")
//   );
// });

// task("build-component", function () {
//   return src([
//       "./jsx/NavBar.jsx",
//       "./jsx/Landing.jsx",
//       "./jsx/Features.jsx",
//       "./jsx/SpecialHeading.jsx",
//       "./jsx/Services.jsx",
//       "./jsx/Portfolio.jsx",
//       "./jsx/About.jsx",
//       "./jsx/Contact.jsx",
//       "./jsx/Data.js",
//     ])
//     .pipe(init())
//     .pipe(
//       babel({
//         presets: ["@babel/env", "@babel/preset-react"],
//       })
//     )
//     .pipe(react())
//     .pipe(write("."))
//     .pipe(dest("./src/Component"));
// });

// task("default", series("watch"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// eslint-disable-next-line no-undef
const gulp = require('gulp');
// eslint-disable-next-line no-undef
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify')
// eslint-disable-next-line no-unused-vars
const tsProject = createProject('tsconfig.json');

// task('watch', function () {
//   return src([
//           "./jsx/NavBar.tsx",
//           "./jsx/Landing.tsx",
//           "./jsx/Features.tsx",
//           "./jsx/SpecialHeading.tsx",
//           "./jsx/Services.tsx",
//           "./jsx/Portfolio.tsx",
//           "./jsx/About.tsx",
//           "./jsx/Contact.tsx",
//           "./jsx/Data.js",
//         ])
//     .pipe(init())
//     .pipe(tsProject())
//     .pipe(uglify())
//     .pipe(write('.'))
//     .pipe(dest('./src/Component'));
// })

gulp.task('watch', function () {
  const tsProject = ts.createProject('tsconfig.json');
  return tsProject.src([
    "./jsx/NavBar.tsx",
    "./jsx/Landing.tsx",
    "./jsx/Features.tsx",
    "./jsx/SpecialHeading.tsx",
    "./jsx/Services.tsx",
    "./jsx/Portfolio.tsx",
    "./jsx/About.tsx",
    "./jsx/Contact.tsx",
    "./jsx/Data.js",
  ])
      .pipe(sourcemaps.init())
      .pipe(tsProject())
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./src/Component'));
});