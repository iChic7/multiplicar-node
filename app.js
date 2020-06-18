const argv = require('./config/yargs').argv;
var colors = require("colors");

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data.green))
            .catch(e => console.log(e).red);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`).green)
            .catch(e => console.log(e).red);
        break;
    default:
        console.log('comando desconocido');
        break;
}

//let argv2 = process.argv;
//let parametro = argv[2];

//let base = parametro.split('=')[1];

//console.log(argv.base);
//console.log(argv.limite);