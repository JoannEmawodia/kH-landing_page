const gulp = require ('gulp');
const sass = require ('gulp-sass')(require ('sass'));
const imagemin = require ('gulp-imagemin');
const watch = require ('gulp-watch');
const uglify = require ('gulp-uglify');

function styles (){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass ({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/styles'));
}

function images (){
    return gulp.src('./src/imagens/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imagens'));
}

function scripts (){
    return gulp.src('./src/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/script'));
}

function html (){
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
}

exports.default = gulp.parallel(styles, images, scripts, html);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}