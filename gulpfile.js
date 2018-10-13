let gulp = require('gulp');
let useref = require('gulp-userref');

gulp.task('useref', function(){
    return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(gulp.dest('dist'))
  });