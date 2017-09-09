const gulp = require('gulp');

const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

const rollup = require('gulp-better-rollup');
const sourcemaps = require('gulp-sourcemaps');
const resolvePlugin = require('rollup-plugin-node-resolve');

const browserSync = require('browser-sync');


const paths = {
  js: './src/**/*.ts',
  output: './dist',
  build: './build'
};

function build() {
  const buildResult = gulp.src(paths.js)
    .pipe(tsProject(ts.reporter.fullReporter(true)));

  return buildResult.js
    .pipe(gulp.dest(paths.build))
}

function dist() {
  return gulp.src(paths.build + '/**/*.js')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(rollup({plugins: [resolvePlugin()]}, 'iife'))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest(paths.output));
}

function reload() {
  browserSync.reload();
  return Promise.resolve();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    open: false
  });
  gulp.watch(paths.js, gulp.series('deploy', reload));
}



gulp.task(build);
gulp.task(dist);

gulp.task('deploy', gulp.series(build, dist));

gulp.task("watch", gulp.series('deploy', watch));