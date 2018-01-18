import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
  return gulp.src('app/**/*.ejs') //app目录下所有的.ejs文件, 而不仅限于app当前目录下的.ejs文件
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch,livereload()))
})
