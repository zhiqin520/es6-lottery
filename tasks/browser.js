import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();
  gulp.watch('app/**/*.js',['scripts']); //监听目录, 执行任务
  gulp.watch('app/**/*.ejs',['pages']);  //监听到'app/**/*.ejs'目录文件发生变化, 自动执行['pages']任务
  gulp.watch('app/**/*.css',['css']);
});
