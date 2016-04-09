// gulpfile.js

//
// AUTHOR
//
// Developed by Christian MacMillan for VASAVA in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
// http://christian-macmillan.com
//

//
// REQUIRES
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
    concat = require('gulp-concat');

//
// AUX TASKS
//
 
// All SASS' and CSS's files to one main minify css
//
gulp.task('styles', function () {

    return sass(['css/dev/**/*.css','css/dev/**/*.scss'], { style: 'compressed' })
        .pipe(concat('style.css'))
        .on('error', sass.logError)
        .pipe(gulp.dest('css'))
        .pipe(reload({ stream:true }));

});

// All JS's files to one main dev file
//
gulp.task('browserify', function() {
    
    var bundleStream = browserify('./js/dev/main.js')
        .transform(stringify, {
            appliesTo: { includeExtensions: ['.html','.php'] },
            minify: true
        })
        .bundle();

    bundleStream
        .pipe(source('main.js'))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./js'))
        .pipe(reload({ stream:true }));
    
})

// Php files live reload
//
gulp.task('phps', function () {

    gulp.src('**/*.php')
        .pipe(reload({ stream:true }));
        
});

// Create the server connection and add the watches 
//
gulp.task('connect-sync', function() {
    
    connect.server({}, function (){
        browserSync({
            proxy: '127.0.0.1:8000',
            port: 3000
        });
    });

    gulp.watch('**/*.php', ['browserify']);
    gulp.watch('js/dev/**/*.js', ['browserify']);
    gulp.watch('css/dev/**/*.scss', ['styles']);

});

//  Clean all Production directory
//
gulp.task('cleanProd', function () { 

    return del([
        './prod/**/*',
        '!./prod/fonts',
        '!./prod/img',
        '!./prod/css',
        '!./prod/js'
    ]);
    
});

//  Build the Production directory
//
gulp.task('buildProd', function () {
   
    gulp.src('./css/style.css')
        .pipe(hash())
        .pipe(gulp.dest('./prod/css'))
        .pipe(hash.manifest('assets.json'))
        .pipe(gulp.dest('./prod'));
    
    gulp.src('./js/bundle.js')
        .pipe(hash())
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./prod/js'))
        .pipe(hash.manifest('assets.json', true))
        .pipe(gulp.dest('./prod'));
    
    gulp.src('./*.php')                                     
        .pipe(gulp.dest('./prod'));
    
    gulp.src('./img/**/*.{png,jpg,jpeg,gif,json,xml,svg}')    
        .pipe(gulp.dest('./prod/img'));
    
    gulp.src('./fonts/*.{ttf,woff2,woff,eof,eot,svg}')
        .pipe(gulp.dest('./prod/fonts'));
    
});

//
//  END - AUX TASKS
//

//
// GENERAL EXE TASKS
//

// Build Task
//
gulp.task('build', [ 'cleanProd' , 'buildProd' ]);

// Default Task
//
gulp.task('default', [ 'browserify' , 'connect-sync' ]);

//
// END - GENERAL EXE TASKS
//

//
// END - gulpfile.js 