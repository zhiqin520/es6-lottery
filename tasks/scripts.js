import gulp from 'gulp';
import gulpif from 'gulp-if';  //gulp语句中做if判断
import concat from 'gulp-concat';  //gulp处理文件拼接
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';  //基于文件流
import named from 'vinyl-named'; //对文件重命名
import livereload from 'gulp-livereload';  //文件修改以后,浏览器自动刷新功能, 热更新
import plumber from 'gulp-plumber';//Prevent pipe breaking caused by errors from gulp plugins
import rename from 'gulp-rename';//Rename files
import uglify from 'gulp-uglify';//Minify files with UglifyJS.
import {log,colors} from 'gulp-util';//命令行工具输入工具包
import args from './util/args';   //解析命令行参数

gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({//处理常规错误逻辑
      errorHandle:function(){

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))
})
