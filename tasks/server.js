import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; //easy light weight server with livereload
import args from './util/args';

gulp.task('serve',(cb)=>{
  if(!args.watch) return cb();

  var server = liveserver.new(['--harmony','server/bin/www']); //创建服务器
  server.start();//启动服务器

  gulp.watch(['server/public/**/*.js','server/public/**/*.css','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]); //监听前端资源文件改变, server热更新
  })

  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)() //监听后端接口和后端入口变化, server需重启
  });
})
