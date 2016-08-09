// gulpfile.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect-php'),
    hash = require('gulp-hash'),
    del = require('del'),
    rev = require('gulp-rev-hash'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    source = require('vinyl-source-stream'),
    streamify = require('gulp-streamify'),
    browserify = require('browserify'),
    rename = require('gulp-rename'),
    stringify = require('stringify'),
    vueify = require('vueify'),
    concat = require('gulp-concat');

// All SASS' and CSS's files to one main minify css
//
gulp.task('styles', function () {

    return sass(['css/*.scss'], { style: 'compressed' })
        .pipe(concat('style.css'))
        .on('error', sass.logError)
        .pipe(gulp.dest('build'))
        .pipe(reload({ stream:true }))

})

// All JS's files to one main dev file
//
gulp.task('browserify', function() {

    var bundleStream = browserify('./src/main.js')
        .transform(vueify)
        .transform(stringify, {
            appliesTo: { includeExtensions: ['.html','.php'] },
            minify: true
        })
        .bundle().on('error', function (err) {
            console.log(err.toString())
            this.emit("end")
        });

    bundleStream
        .pipe(source('main.js'))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./build'))
        .pipe(reload({ stream:true }))

})

// Create the server connection and add the watches
//
gulp.task('connect-sync', function() {

    connect.server({}, function (){
        browserSync({
            proxy: '127.0.0.1:8000',
            port: 3000
        })
    })

    gulp.watch(['**/*.php','**/*.html','src/**/*.js','src/**/*.vue'], ['browserify'])
    gulp.watch(['css/**/*.scss','src/**/*.scss'], ['styles'])

})

gulp.task('default', [ 'browserify' , 'connect-sync' ])
