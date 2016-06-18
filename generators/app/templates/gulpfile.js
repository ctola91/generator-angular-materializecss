/**
 * Created by chris on 12/4/2016.
 */
var gulp = require("gulp"),
    connect = require("gulp-connect"),
    historyApiFallback = require("connect-history-api-fallback"),
    sass = require("gulp-sass"),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps')
    cleanCSS = require('gulp-clean-css')
    uglify = require('gulp-uglify')
    htmlmin = require('gulp-htmlmin')
    lib = require('bower-files')();

// 1. Servidor web de desarrollo
gulp.task('server', function() {
    connect.server({
        root: './app',
        hostname: '0.0.0.0',
        port: 8085,
        livereload: true,
        middleware: function(connect, opt) {
            return [ historyApiFallback() ];
        }
    });
});
/*recargar sass*/
gulp.task('sass', function () {
    return gulp.src('./app/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/css'))
        .pipe(connect.reload());
});

/*recargar css*/
gulp.task('css', function() {
    gulp.src('./app/css/**/*.css')
        .pipe(connect.reload());
});
/*recargar js*/
gulp.task('js', function() {
    gulp.src('./app/js/**/*.js')
        .pipe(connect.reload());
});
/*recargar html*/
gulp.task('html', function() {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload());
});
/*copy Roboto fonts*/
gulp.task('copyfonts', function() {
  gulp.src('./bower_components/materialize/fonts/**/*.{ttf,woff,woff2,eot,eof,svg}').pipe(gulp.dest('./app/lib/fonts'));
});

/*minificar html*/
gulp.task('minify-html', function() {
    return gulp.src('./app/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'))
});

/* minificar y encriptar js */
gulp.task('minify-js', function() {
    return gulp.src('./app/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'));
});
/* Minificar css */
gulp.task('minify-css', function() {
    return gulp.src('./app/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});
/*mover librerias de bower al proyecto*/
gulp.task('bower-js', function() {
    gulp.src(lib.ext('js').files)
    .pipe(gulp.dest('./app/lib/js'));
});
/*Mover Librerias de bower al proyecto*/
gulp.task('bower-css', function() {
    gulp.src(lib.ext('css').files)
    .pipe(gulp.dest('./app/lib/css'));
});
/*move bower components to build js*/
gulp.task('bower-min-js', function() {
    gulp.src(lib.ext('js').files)
    .pipe(uglify())
    .pipe(gulp.dest('./dist/lib/js'));
});
/*move bower components to build css*/
gulp.task('bower-min-css', function() {
    gulp.src(lib.ext('css').files)
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/lib/css'));
});

/*inspector que escucha los cambios en los css y html*/
gulp.task('watch', function() {
    gulp.watch(['./app/**/*.html'], ['html']);
    gulp.watch(['./app/js/**/*.js'], ['js']);
    gulp.watch('./app/sass/**/*.scss', ['sass']);
    gulp.watch(['./app/css/**/*.css'], ['css']);
});
/* Compilar y minificar archivos para colocar en produccion */
gulp.task('build',
          ['minify-html', 'minify-css', 'minify-js', 'bower-min-js', 'bower-min-css']
         );

/*tareas por defecto*/
gulp.task('default',
    ['bower-css', 'bower-js', 'copyfonts', 'server', 'watch']
);
