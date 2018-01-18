import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'; //Run a series of gulp tasks in order.

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
