var gulp = require("gulp"),
	rename = require("gulp-rename"),
	cssnano = require("gulp-cssnano"),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify");

gulp.task("test",function() {
	console.log("hello");
})

gulp.task("sass",function() {
	return gulp.src("src/sass/*.scss").pipe(sass()).pipe(rename({"suffix" : ".min"})).pipe(cssnano()).pipe((gulp.dest("css")));
})

gulp.task("script",function() {
	return gulp.src("src/js/*.js").pipe(rename({"suffix" : ".min"})).pipe(uglify()).pipe(gulp.dest("js"));
})

gulp.task("watch",function() {
	gulp.watch(["src/sass/*.scss","src/js/*.js"],["sass","script"]);
})
