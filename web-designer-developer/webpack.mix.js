let mix = require('laravel-mix');

mix.sass('app.scss', 'dist')
   .js('app.js', 'dist')
   .setPublicPath('dist')
   .browserSync({
   	server: true,
   	proxy: false,
   });