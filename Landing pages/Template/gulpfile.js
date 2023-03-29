/* eslint-disable no-undef */
// /* eslint-disable no-undef */
// const gulp = require("gulp");
// const react = require("gulp-react");
// const babel = require("gulp-babel");
// const watch = require('gulp-watch');

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

// const jsxFiles = [
//   "./jsx/NavBar.jsx",
//   "./jsx/Landing.jsx",
//   "./jsx/Features.jsx",
//   "./jsx/SpecialHeading.jsx",
//   "./jsx/Services.jsx",
//   "./jsx/Portfolio.jsx",
//   "./jsx/About.jsx",
//   "./jsx/Contact.jsx",
//   "./jsx/Data.js"
// ];

// gulp.task("build", function () {
//   return (
//     gulp.src(jsxFiles)
//     .pipe(babel({
//       presets: ['@babel/preset-react']
//     }))
//     .pipe(
//       babel({
//         presets: ["@babel/env", "@babel/preset-react"],
//       })
//     )
//     .pipe(sourcemaps.init())
//     .pipe(react())
//     .pipe(uglify())
//     .pipe(sourcemaps.write())
//     .pipe(eslint())
//     .pipe(eslint({ fix: true }))
//     .pipe(eslint({ configFile: '.eslintrc.json' }))
//     .pipe(eslint({ configFile: '.eslintrc.json' }))
//     .pipe(eslint.format())
//     .pipe(eslint.failAfterError())
//     .pipe(
//       eslint.results((results) => {
//         console.log(`Total Results: ${results.length}`);
//         console.log(`Total Warnings: ${results.warningCount}`);
//         console.log(`Total Errors: ${results.errorCount}`);
//       })
//     )
//     .pipe(plumber())
//     .pipe(
//       eslint({
//         plugins: ["react"],
//         parserOptions: {
//           ecmaVersion: 2021,
//           sourceType: "module",
//           ecmaFeatures: {
//             jsx: true,
//           },
//         },
//         rules: {
//           "react/jsx-uses-vars": "error",
//           "no-func-assign": "error",
//           "no-unsafe-finally": "error",
//           "no-unused-vars": "error",
//           "no-unused-labels": "error",
//           "no-unsafe-negation": "error",
//           "no-console": "off",
//         },
//       })
//     )
//     .pipe(eslint.format())
//     .pipe(failedReporter())
//       .pipe(gulp.dest("./src/Component"))
//   );
// });

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

// gulp.task('watch', function() {
//   return watch(jsxFiles, gulp.series('babel'))

// });

// gulp.task('default', gulp.series('babel', 'watch'));

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // import { task, watch, series, src, dest } from "gulp";
// // import babel from "gulp-babel";
// // import { init, write } from "gulp-sourcemaps";
// // import react from "gulp-react";

// // task("watch", function () {
// //   watch(
// //     [
// //       "./jsx/NavBar.jsx",
// //       "./jsx/Landing.jsx",
// //       "./jsx/Features.jsx",
// //       "./jsx/SpecialHeading.jsx",
// //       "./jsx/Services.jsx",
// //       "./jsx/Portfolio.jsx",
// //       "./jsx/About.jsx",
// //       "./jsx/Contact.jsx",
// //       "./jsx/Data.js",
// //     ],
// //     series("build-component")
// //   );
// // });

// // task("build-component", function () {
// //   return src([
// //       "./jsx/NavBar.jsx",
// //       "./jsx/Landing.jsx",
// //       "./jsx/Features.jsx",
// //       "./jsx/SpecialHeading.jsx",
// //       "./jsx/Services.jsx",
// //       "./jsx/Portfolio.jsx",
// //       "./jsx/About.jsx",
// //       "./jsx/Contact.jsx",
// //       "./jsx/Data.js",
// //     ])
// //     .pipe(init())
// //     .pipe(
// //       babel({
// //         presets: ["@babel/env", "@babel/preset-react"],
// //       })
// //     )
// //     .pipe(react())
// //     .pipe(write("."))
// //     .pipe(dest("./src/Component"));
// // });

// // task("default", series("watch"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// eslint-disable-next-line no-undef
// const gulp = require('gulp');
// // eslint-disable-next-line no-undef
// const ts = require('gulp-typescript');
// const sourcemaps = require('gulp-sourcemaps');
// const uglify = require('gulp-uglify')
// // eslint-disable-next-line no-unused-vars
// const tsProject = createProject('tsconfig.json');

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

// gulp.task('watch', function () {
//   const tsProject = ts.createProject('tsconfig.json');
//   return tsProject.src([
//     "./jsx/NavBar.tsx",
//     "./jsx/Landing.tsx",
//     "./jsx/Features.tsx",
//     "./jsx/SpecialHeading.tsx",
//     "./jsx/Services.tsx",
//     "./jsx/Portfolio.tsx",
//     "./jsx/About.tsx",
//     "./jsx/Contact.tsx",
//     "./jsx/Data.js",
//   ])
//       .pipe(sourcemaps.init())
//       .pipe(tsProject())
//       .pipe(uglify())
//       .pipe(sourcemaps.write('.'))
//       .pipe(gulp.dest('./src/Component'));
// });

// const gulp = require('gulp');
// const babel = require('gulp-babel');
// const plumber = require('gulp-plumber');
// const rename = require('gulp-rename');
// const sourcemaps = require('gulp-sourcemaps');
// const ts = require('gulp-typescript');
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
//       "no-console": "error",
//     },
//   })
// )
//       .pipe(eslint.failAfterError())
//   );
// });
// gulp.task("build", gulp.series("lint" /* other build tasks */));

// const jsxFiles = [
//   "./jsx/NavBar.jsx",
//   "./jsx/Landing.jsx",
//   "./jsx/Features.jsx",
//   "./jsx/SpecialHeading.jsx",
//   "./jsx/Services.jsx",
//   "./jsx/Portfolio.jsx",
//   "./jsx/About.jsx",
//   "./jsx/Contact.jsx",
//   "./jsx/Data.js"
// ];
// Define source and destination paths
// const paths = {
//   src: './jsx/*.tsx',
//   dest: './src/components',
// };

// // Initialize TypeScript compiler
// const tsProject = ts.createProject('tsconfig.json');

// // Define the task to convert JSX to TypeScript
// gulp.task('jsx2ts', function() {
//   return gulp.src(paths.src)
//     .pipe(plumber())
//     .pipe(sourcemaps.init())
//     .pipe(babel({
//       presets: ['@babel/env'],
//       plugins: [
//         ['transform-react-jsx', { pragma: "React.createElement" }]
//       ]
//     }))
//     // .pipe(babel({
//     //   presets: ['@babel/preset-env', '@babel/preset-react'],
//     // }))
//     .pipe(tsProject())
//     .pipe(rename(function(path) {
//       path.extname = '.tsx';
//     }))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest(paths.dest));
// });

// // Define the task to watch for changes
// gulp.task('watch', function() {
//   gulp.watch(paths.src, gulp.series('jsx2ts'));
// });

// // Define the default task
// gulp.task('default', gulp.series('jsx2ts', 'watch'));

// const tsProject = ts.createProject('tsconfig.json');

// gulp.task('default', gulp.series('babel', 'watch'));

// _______________________________________________________________

/* eslint-disable no-undef */
// const gulp = require("gulp");
// const plumber = require("gulp-plumber");
// const babel = require("gulp-babel");
// const sourcemaps = require("gulp-sourcemaps");
// const rename = require("gulp-rename");
// const autoprefixer = require("gulp-autoprefixer");
// // const sassGlob = require("gulp-sass-glob");
// const sass = require('gulp-sass')(require('sass'));
// const cleanCSS = require("gulp-clean-css");
// // const { series, parallel } = require("gulp");

// // Set up the source and destination file paths
// const paths = {
//   src: ["./jsx/*.jsx", "./jsx/*.js", "./Style/Styles.scss"],
//   dest: "./src/Components",
// };

// function compieSass() {
//   return gulp
//     .src("./Style/Styles.scss")
//     .pipe(plumber())
//     .pipe(sass())
//     .pipe(babel({
//       presets: ['@babel/preset-env']
//     }))
//     // .pipe(sassGlob())
//     .pipe(autoprefixer())
//     .pipe(sourcemaps.init())
//     .pipe(sourcemaps.write("."))
//     .pipe(cleanCSS())
//     .pipe(rename({ suffix: ".min" }))
//     .pipe(sass({ outputStyle: 'compressed' }).on("error", sass.logError))
//     .pipe(gulp.dest("./src/components/"));
// }

// // gulp.task("watch", function () {
// //   gulp.watch("./Style/Styles.scss", gulp.series("sass"));
// // });

// // Define the function to compile the JSX file
// function compile() {
//   return gulp
//     .src(paths.src.map((src) => src))
//     .pipe(plumber()) // Prevents gulp from stopping on error
//     .pipe(sourcemaps.init()) // Creates sourcemaps for debugging
//     .pipe(babel()) // Transpile JSX to ES5 JavaScript
//     .pipe(rename({ extname: ".js" })) // Rename the file extension
//     .pipe(sourcemaps.write(".")) // Writes the sourcemaps
//     .pipe(gulp.dest(paths.dest)); // Outputs the compiled file
// }

// // Define the gulp task
// function watch() {
//   gulp.watch(
//     paths.src.map((src) => src),
//     compile
//   );
//   gulp.watch("./Style/Styles.scss", compieSass);
// }

// // Expose the gulp task for command line usage

// // exports.compile = compile;
// exports.watch = watch;
// // exports.watch = series(compile, watch);
