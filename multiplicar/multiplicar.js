const fs = require('fs'); 

let listarTabla =(base, limite) =>{

    return new Promise ((resolve,reject) =>{
        if(!Number(base)){
            reject('La base no es un dato numérico');
            return; // ponemos un return por que el reject no corta la funcion, se sigue ejecutando
        }
        if(!Number(limite)){
            reject('El límite no es un dato numérico');
            return; 
        }
        if(limite <1){
            reject('El limite debe ser mayor o igual a 1');
            return; 
        }
        let contenido ='';
        for(let i=1 ; i <=limite; i++){
            let result= base*i;
            console.log(base+'*'+i+'='+result);
        }
    })
}


let crearArchivo =  (base, limite) =>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject('La base no es un dato numérico');
            return; // ponemos un return por que el reject no corta la funcion, se sigue ejecutando
        }
        if(!Number(limite)){
            reject('El límite no es un dato numérico');
            return; 
        }
        if(limite <1){
            reject('El limite debe ser mayor o igual a 1');
            return; 
        }
        let contenido ='';

        for(let i=1 ; i <=limite; i++ ){
            let result= base*i;
            contenido += base+'*'+i+'='+result+'\n';
        }

        fs.writeFile('./tablas/tabla-'+base+'-limite-'+limite+'.txt', contenido, (err) => {
            if (err) 
                reject(err);
            else
                resolve('tabla-'+base+'.txt');
        });

    })
}



module.exports = {
    crearArchivo,
    listarTabla
}
