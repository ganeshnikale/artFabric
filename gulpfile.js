const { src, dest,watch, series } = require ('gulp');

const sass = require('gulp-sass');

const postcss = require ('gulp-postcss');

const cssnano = require ('cssnano');

const autoprefixer = require('autoprefixer');

const terser = require('gulp-terser');

const browsersync = require('browser-sync').create();


// sass Task

function sassTask(){
    return src('./app/sass/**/*.scss', { sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('./dist/css', {sourcemaps: '.'}));
}


// javascript Task
function javascriptTask(){
    return src('app/js/**/*.js', {sourcemaps:true})
    .pipe(terser())
    .pipe(dest('dist/js', {sourcemaps:'.'}))
}

// browserSync task
function browserSyncServe(cb){
    return browsersync.init({
        server: {
            basDir: './',
        }
    });
    cb();
}


// browser sync reload

function browserSyncReload(cb){
    return browsersync.reload();
    cb();
}

// watch task

function watchTask() {
    watch('*.html', browserSyncReload);
    watch(['app/sass/**/*.scss', 'app/js/**/*.js'], series(sassTask,javascriptTask ));
}

// default gulp task

exports.default = series(
    sassTask, 
    javascriptTask,
    watchTask,
    browserSyncServe,
    browserSyncReload
)