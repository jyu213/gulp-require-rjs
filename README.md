# gulp-require-rjs

**extend code form [gulp-rjs](https://github.com/nkostelnik/gulp-rjs)**

> r.js optimizer plugin for [gulp](https://github.com/wearefractal/gulp)

## Description
A gulp interface to r.js.  
* you can package multiple files simultaneously with r.js optimizer.
* it can be pass params directly into r.js.
* add a param named `outPath`, so it can change the package way; the default value is `baseUrl`.


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
