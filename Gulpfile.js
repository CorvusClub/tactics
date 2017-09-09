const gulp = require('gulp');

const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

const browserSync = require('browser-sync');


const paths = {
  js: './src/**/*.ts',
  output: './dist'
};

function build() {
  const buildResult = gulp.src(paths.js)
    .pipe(tsProject(ts.reporter.fullReporter(true)));

  return buildResult.js
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.reload({stream: true}));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    open: false
  });
  gulp.watch(paths.js, build);
}



gulp.task(build);

gulp.task("watch", gulp.series(build, watch));