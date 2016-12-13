import gulp from 'gulp';
import webpack from 'webpack';
import path from 'path';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import del from 'del';
import colorsSupported from 'supports-color';
import gutil from 'gulp-util';
import iconfontCss from 'gulp-iconfont-css';
import iconfont from 'gulp-iconfont';
import clientAppConfig from './client/config';

const plugins = gulpLoadPlugins();

// CLIENT TASKS
gulp.task('clean:client', () =>
  del(['www/**', '!www'])
);

gulp.task('icons:client', () => {
  gulp.src(clientAppConfig.icons.iconsPath)
    .pipe(iconfontCss({
      fontName: 'test-app',
      path: clientAppConfig.icons.fontCssPath,
      targetPath: clientAppConfig.icons.iconsCss,
      fontPath: clientAppConfig.icons.fontsPath
    }))
    .pipe(iconfont({
      fontName: 'test-app',
      appendUnicode: true,
      formats: ['ttf', 'eot', 'woff']
    }))
    .pipe(gulp.dest(clientAppConfig.icons.fontsDest));
});

gulp.task('compile:client', (cb) => {
  const webpackConfig =
    require(clientAppConfig.webpack.production); // eslint-disable-line global-require
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);

    gutil.log('[webpack]', stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true,
      children: false
    }));

    cb();
  });
});

gulp.task('build:client', () => {
  runSequence('clean:client', 'icons:client', 'compile:client');
});

// SERVER TASKS
const paths = {
  js: ['./server/**/*.js'],
  nonJs: ['./package.json', './.gitignore'],
  tests: './server/src/tests/*.js'
};

// Clean up dist and coverage directory
gulp.task('clean:server', () =>
    del(['dist/**', 'coverage/**', '!dist', '!coverage'])
);

// Copy non-js files to dist
gulp.task('copy:server', () =>
    gulp.src(paths.nonJs)
        .pipe(plugins.newer('dist'))
        .pipe(gulp.dest('dist'))
);

// Compile ES6 to ES5 and copy to dist
gulp.task('compile:server', () =>
    gulp.src([...paths.js, '!gulpfile.babel.js'], { base: '.' })
        .pipe(plugins.newer('dist'))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.babel())
        .pipe(plugins.sourcemaps.write('.', {
          includeContent: false,
          sourceRoot(file) {
            return path.relative(file.path, __dirname);
          }
        }))
        .pipe(gulp.dest('dist'))
);

// Start server with restart on file changes
gulp.task('nodemon', ['copy:server', 'compile:server'], () =>
    plugins.nodemon({
      script: path.join('dist', 'server', 'index.js'),
      ext: 'js',
      watch: ['server'],
      tasks: ['copy:server', 'compile:server']
    })
);

// gulp serve for development
gulp.task('serve:server', ['clean:server'], () => runSequence('nodemon'));

// default task: clean dist, compile js files and copy non-js files.
gulp.task('build:server', ['clean:server'], () => {
  runSequence(
      ['copy:server', 'compile:server']
  );
});

