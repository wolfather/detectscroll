'use strict';

const gulp = require('gulp');
const gulpBabel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');


//gulp.task("default", () => {});

gulp.task("babel", ()=> {
	return gulp.src("dev/js/**/*.js")
		.pipe(sourcemaps.init())
		.pipe(gulpBabel({
			presets: ['es2015']
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest("build/js"));
});