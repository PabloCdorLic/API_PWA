import {cargaDeCliente, buscarClienteApellido, borradoDeCliente} from "../utils/utils.js"

import {hash} from 'bcrypt';

import db from '../config/db.js'

const buscarClientesTodos=(req,res)=>{
       
    db.query("SELECT * FROM clientes",(err,data)=>{
         if(err){
             console.log(err)
             res.status(500).json({mensaje:"Error interno, no se logro ubicar la informacion"})
         }
        else{
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

export {buscarClientesTodos, buscarCliente, cargarCliente, borrarCliente}



