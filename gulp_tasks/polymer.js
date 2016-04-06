var gulp = require('gulp');

gulp.task('polymer', function() {
	gulp.src(['./app/components/**'])
    	.pipe(gulp.dest('./public/components'));
});