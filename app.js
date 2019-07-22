
// requireds

const {crearArchivo, listarTabla}   = require('./multiplicar/multiplicar.js')
const argv = require('./config/yargs').argv;

// const fs = require('fs'); // proyeecto propio de node
// const ex = require('express'); //libreria que no es nativo de node (modulos)
// const asd = require('./asd'); // nuestro archivos del proyecto, y empiezan con ./

// let base ='1';

// let argv = process.argv;
// let parametro = argv[2];
// console.log(parametro);

// let base = parametro.split('=');
// base = base[1];
// console.log(base);
console.log(argv);
let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.b, argv.l);
    break;

    case 'crear':
            
        crearArchivo(argv.base, argv.limite)
        .then(archivo => {
            console.log('Archivo creado: '+archivo)
        })
        .catch(err => console.log('Error: ',err));
    break;
    default:
        console.log('Comando no reconocido');
}


// console.log(argv.base);
// console.log(argv.l);
