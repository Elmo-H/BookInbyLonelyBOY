const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const livereload = require('gulp-livereload');


//compile scss into css
function style() {
    //Passes sass file to css file
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))

    .pipe(livereload());
}

function watch() {
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = style;