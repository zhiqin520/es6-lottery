import gulp from 'gulp';


//如果只运行 gulp 命令，则会执行所注册的名为 default 的 task，如果没有这个 task，那么 gulp 会报错。
gulp.task('default',['build']);
