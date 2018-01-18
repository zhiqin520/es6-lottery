import gulp from 'gulp';
import del from 'del'; //删除
import args from './util/args';

gulp.task('clean',()=>{ //清空指定目录文件, 所有的.js .css .ejs
  return del(['server/public','server/views'])
})
