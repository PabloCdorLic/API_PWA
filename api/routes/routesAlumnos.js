import express from "express";

import {
    buscarClientesTodos,
    buscarCliente,
    cargarCliente,
    borrarCliente,
    
    
} from "../controlers/alumnosControlers.js";//armarmos en un archivo externo para mas comodidad

const router= express.Router();

router.get("/cargar/clientes",buscarClientesTodos);

router.get('/buscar/cliente/:apellido', buscarCliente);

router.delete("/borrar/cliente/:apellido",borrarCliente);

router.post("/agregar/cliente",cargarCliente);



/*
router.post("/cargarPassword",cargarAlumnoPass);
*/

export {router}

