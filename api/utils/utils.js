
import db from '../config/db.js';

const cargaDeCliente=(cliente,res)=>{
     db.query("INSERT INTO clientes (apellido,nombre,telefono,email) VALUES(?,?,?,?)",[cliente.apellido,cliente.nombre, cliente.telefono, cliente.email],(err,data)=>{
     err?            res.status(500).json({mensaje:"Error interno, no se logro cargar la informacion"})
:    res.status(201).json({message:"cliente registrado", info: data})

    })
}


const buscarClienteApellido = (cliente, res) => {
    const sql = "SELECT * FROM CLIENTES WHERE APELLIDO = ?";
    db.query(sql, [cliente], (err, data) => {
        if (err) {
            res.status(500).json({ mensaje: "Error interno, no se logró encontrar al cliente" });
        } else {
            res.status(200).json({ mensaje: "Cliente encontrado", info: data });
            console.log(data);
        }
    });
};


const borradoDeCliente=(cliente,res)=>{
    
    const sql = "DELETE FROM CLIENTES WHERE APELLIDO = ?";
    db.query(sql, [cliente], (err, data) => {
        if (err) {
            res.status(500).json({ mensaje: "Error interno, no se logró borrar al cliente" });
        } else {
            res.status(200).json({ mensaje: "Cliente Borrado", info: data });
            console.log(data);
        }
    });
};

/*
const cargaDeAlumno2=async()=>{
    const[data,_info]= await db.query("INSERT INTO alumnos (nombre,dni) VALUES(?,?)",[alumno.nombre,alumno.dni])

    return data  
}

const cargaDeAlumnoPass=(alumno,res)=>{
    db.query("INSERT INTO alumnos (nombre,dni) VALUES(?,?)",[alumno[1],alumno[2]],(err,data)=>{
        err?            res.status(500).json({mensaje:"Error interno, no se logro ubicar la informacion"})
:     res.status(201).json({message:"alumno registrado"})

    })
}
export {buscarATodos,buscarATodos2,cargaDeAlumno,cargaDeAlumno2,cargaDeAlumnoPass}

*/
export {cargaDeCliente,buscarClienteApellido, borradoDeCliente}