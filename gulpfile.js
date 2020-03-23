const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('html', () => {
    return gulp
      .src('./src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./public/'));
  });

  gulp.task('uglify', function () {
    return gulp
        .src('./src/js/alert.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('.public/js')) 
    
  });


