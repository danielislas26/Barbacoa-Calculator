const {src, dest, watch, parallel} = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');
//const sourcemaps = require('gulp-sourcemaps')//

// Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
//const avif = require('gulp-avif');

function css(done) {
    src("src/scss/**/*.scss") // identificar el archivo SASS
    //.pipe(sourcemaps.init()) // se inicializa despues de compilar la hoja de estilos css y gurda las referencias
    .pipe(plumber()) // evita que el watch se detenga por un error 
    .pipe(sass()) // Compilarlo
    //.pipe( postcss([autoprefixer(), cssnano() ]) )
    //.pipe(sourcemaps.write('.'))// esta es la ubicacion donde se va a guardar y el punto es para que sea la misma ubicacion de "build/css"
    .pipe(dest("build/css")) // Almacenarla en el disco duro

    done(); // Callback que avisa a gulp cuando llegamos al final
}
function imagenes(done){
    const opciones = {
        optimizationLevel: 3 // optimizamos las imagenes a un nivel de 3
    }
    src('src/img/**/*.{png,jpg}')
    .pipe( cache( imagemin(opciones) ) ) // ejecuta la constante opciones
    .pipe( dest('build/img') ) // las almacena en la carpeta img de build

    done();
}

function versionWebp( done ){

    const opciones = {
        quality: 50 // esto baja la calidad de las imagenes al 50%
    };

    src('src/img/**/*.{png,jpg}') // esto entra en todas las carpetas e identifica los doc con los formatos jpg y png.
    .pipe( webp(opciones) ) // esto ejecuta la constante opciones
    .pipe( dest('build/img')) // esto crea una carpeta "img" en build donde va almacenar las imagenes convertidas a webp con 50%
    done();
}

function javascript( done ) {
    src('src/js/**/*.js')
        //.pipe(sourcemaps.init())// inicia el sourcemaps con las referencias a esos archivos y codigos js
        //.pipe( terser() )
        //.pipe(sourcemaps.write('.')) // escribe el codigo en la misma ubicacion del archivo ja "build/js"
        .pipe(dest('build/js'));

    done();
}


function dev(done){

    watch("src/scss/**/*.scss", css);
    watch('src/js/**/*.js',javascript);
    done();
}


exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp; // esto hace disponible la funcion "versionWebp"
//exports.versionAvif = versionAvif; 
exports.dev =  parallel( imagenes, versionWebp, javascript, dev);