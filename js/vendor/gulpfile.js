//This Javascript file minifies all vendor packages

// include plug-ins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); //minification plugin
var del = require('del');

var config = {
    //Include all js files but exclude any min.js files
    src: ['*.js', '!*.min.js', '!tabletop.js', '!gulpfile.js']
}

//delete the output file(s)
gulp.task('clean', function () {
    //del is an async function and not a gulp plugin (just standard nodejs)
    //It returns a promise, so make sure you return that from this task function
    //  so gulp knows when the delete is complete
    return del(['all.min.js']);
});

// Combine and minify all files from the app folder
// This tasks depends on the clean task which means gulp will ensure that the 
// Clean task is completed before running the scripts task.
gulp.task('scripts', ['clean'], function () {

    return gulp.src(config.src)
      .pipe(uglify())
      .pipe(concat('all.min.js'))
      .pipe(gulp.dest('')); // destination of the all.min.js file
});

//Set a default tasks
gulp.task('default', ['scripts'], function () { });