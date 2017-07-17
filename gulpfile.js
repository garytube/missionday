var gulp = require('gulp');
var purify = require('gulp-purifycss');

gulp.task('cleanup', function() {
  return gulp.src('assets/css/*.css')
    .pipe(purify(['assets/**/*.js', '*.php']))
    .pipe(gulp.dest('assets/css/app'));
});

