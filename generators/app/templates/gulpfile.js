/**
 * Created by chris on 12/4/2016.
 */
var gulp = require("gulp"),
    connect = require("gulp-connect"),
    historyApiFallback = require("connect-history-api-fallback"),
    sass = require("gulp-sass");

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
        .pipe(sass().on('error', sass.logError))
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
/*inspector que escucha los cambios en los css y html*/
gulp.task('watch', function() {
    gulp.watch(['./app/**/*.html'], ['html']);
    gulp.watch(['./app/js/**/*.js'], ['js']);
    gulp.watch('./app/sass/**/*.scss', ['sass']);
    gulp.watch(['./app/css/**/*.css'], ['css']);
});
/*tareas por defecto*/
gulp.task('default',
    ['server', 'watch']
);