# gulp-require-rjs

**extend code form [gulp-rjs](https://github.com/nkostelnik/gulp-rjs)**

> r.js optimizer plugin for [gulp](https://github.com/wearefractal/gulp)

## Describe


## How to use
0. install node
1. install `gulp-require-rjs` 

        npm install --save-dev gulp-require-rjs

2. use it in your gulp config file 
    
        var rjs = require("gulp-require-rjs");
        gulp.src('src/js/*.js')
            .pipe(gulp.dest('run/js'))
            .pipe(
                rjs({
                    baseUrl: 'src/js',
                    outPath: 'run/js'
                })
            )
