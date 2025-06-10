const gulp = require ('gulp');
const sass = require ('gulp-sass')(require ('sass'));
const imagemin = require ('gulp-imagemin');

function styles (){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass ({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/.css'));
}

function images (){
    return gulp.src('./src/imagens/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imagens'));
}


exports.default = gulp.parallel(styles, images);