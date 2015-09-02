'use strict';

var gulp = require('gulp'),
    fs = require('fs'),
    path = require('path'),
    source = require('vinyl-source-stream'),
    $ = require('gulp-load-plugins')({ pattern: ['*'] });

var isProduction = false;

// Prepare this outside of paths to avoid to much duplicate code.
var appSrcRoot = path.join(__dirname, 'src', 'app', 'src');
var appWwwRoot = path.join(__dirname, 'src', 'app', 'www');

var paths = {

    node: path.join(__dirname, 'node_modules'),

    source: {
        root: appSrcRoot,
        module: path.join(appSrcRoot, 'app.module.js'),
        lib: {
            script: path.join(appSrcRoot, 'lib.js'),
            style: path.join(appSrcRoot, 'lib.scss')
        }
    },

    target: {
        root: path.join(appWwwRoot),
        libs: path.join(appWwwRoot, 'libs'),
        fonts: path.join(appWwwRoot, 'fonts'),
        modules: path.join(appWwwRoot, 'modules'),
        strings: path.join(appWwwRoot, 'strings'),
    }
};

gulp.task('build', ['build:lib', 'build:app']);

gulp.task('build:lib', ['build:lib:js', 'build:lib:css']);
gulp.task('build:app', ['build:app:js', 'build:app:css']);

gulp.task('build:lib:js', function () {

    var b = $.browserify();

    b.require('angular');
    b.require('angular-ui-router');

    b.on('error', function (err) { console.error(err); })

    return b.bundle()
        .pipe(source('lib.js'))
        .pipe(gulp.dest(paths.target.libs))
        .pipe($.vinylBuffer())
        .pipe($.uglify({
            outSourceMap: false
        }))
        .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.target.libs));

});

gulp.task('build:app:js', function () {

    var b = $.browserify(paths.source.module, {
        debug: false // Don't provide source maps for libs, doing so adds big size to unminified output.
    });

    var transforms = [
        'bulkify' 
      ]; 
    
    transforms.forEach(function(transform) { 
        b.transform(transform);
    }); 

    b.external('angular') // Make sure angular is not embedded into app.js
    b.external('angular-ui-router') // Make sure angular is not embedded into app.js

    b.on('error', function (err) { console.error(err); })

    return b.bundle()  
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.target.libs))
        .pipe($.vinylBuffer())
        .pipe($.ngAnnotate())
        .pipe($.uglify({
            outSourceMap: false
        }))
        .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.target.libs));

});


// scripts task
gulp.task('scripts', ['lint'], function () {
    var b = $.browserify({
        entries: paths.scriptEntryFiles,
        debug: !isProduction,
    });

    b.bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(paths.scriptDstDir))
});

gulp.task('build:js', function () {

    var b = $.browserify(paths.source.lib.script, {
        debug: false // Don't provide source maps for libs, doing so adds big size to unminified output.
    });

    return b.bundle()
        .pipe(source('lib.js'))
        .pipe(gulp.dest(paths.target.libs))
        .pipe($.vinylBuffer())
        .pipe($.uglify({
            outSourceMap: false
        }))
        .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.target.libs));

});