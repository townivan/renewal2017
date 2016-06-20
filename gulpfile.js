var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


// now the browserSync targeting
gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
	})
})

// now the compiling task for sass:
gulp.task('sass', function(){
	return gulp.src('dev/*.scss')
		.pipe(sass()) // Using gulp-sass
		.pipe(gulp.dest('./'))
		.pipe(browserSync.reload({ // insert browsersync when css changes
			stream: true
		}))
});

// now the combo task
gulp.task('watch', ['browserSync'], function (){
  gulp.watch('./*.html', browserSync.reload); 
  gulp.watch('dev/*.scss', ['sass']); // the sass task itself calls browserSync
});

