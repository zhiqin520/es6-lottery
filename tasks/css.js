import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{
  return gulp.src('app/**/*.css') //app目录下所有的.css文件, 而不仅限于app当前目录下的.css文件
    .pipe(gulp.dest('server/public'))
    .pipe(gulpif(args.watch,livereload()))
})
