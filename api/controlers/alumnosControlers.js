//import {buscarATodos,buscarATodos2,cargaDeAlumno,cargaDeAlumnoPass} from "../utils/utils.js"

import {cargaDeCliente, buscarClienteApellido, borradoDeCliente} from "../utils/utils.js"

import {hash} from 'bcrypt';

import db from '../config/db.js'

const buscarClientesTodos=(req,res)=>{
       
    db.query("SELECT * FROM clientes",(err,data)=>{
         if(err){
             console.log(err)
             res.status(500).json({mensaje:"Error interno, no se logro ubicar la informacion"})
         }else{
             console.log(data)
               res.status(200).json({mensaje:"alumno encontrado",info:data})
         }
    })
};

const buscarCliente = (req, res) => {
    const apellido = req.params.apellido; 
    buscarClienteApellido(apellido, res);
    console.log(req.params);

    
};

const borrarCliente=(req,res)=>{
    const apellido = req.params.apellido;
    borradoDeCliente(apellido,res)
    console.log(req.params)
}

const cargarCliente=(req,res)=>{

    cargaDeCliente(req.body,res)
    console.log(req.body)
}



/*
const cargarAlumnoPass=(req,res)=>{
    //primero encriptamos
    let{password,nombre,id}=req.body
    let passwordEncriptada=hash(password,10)
    
    //despues cargamos 
    cargaDeAlumnoPass([passwordEncriptada,nombre,id],res)

}
*/
export {buscarClientesTodos, buscarCliente, cargarCliente, borrarCliente}



