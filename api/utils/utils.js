import db from '../config/db.js';

const cargaDeCliente=(cliente,res)=>{
    
    
    
    db.query("INSERT INTO clientes (apellido,nombre,telefono,email) VALUES(?,?,?,?)",[cliente.apellido,cliente.nombre, cliente.telefono, cliente.email],(err,data)=>{
     if(err){res.status(500).json({mensaje:"Error interno, no se logro cargar la informacion"})
    }
    

    else{res.status(201).json({message:"cliente registrado", info: data})
        }
    })
}


const buscarClienteApellido = (cliente, res) => {
    const sql = "SELECT * FROM CLIENTES WHERE APELLIDO = ?";
    db.query(sql, [cliente], (err, data) => {
        if (err) {
            res.status(500).json({ mensaje: "Error interno, no se logró encontrar al cliente" });
        }
        if(data.length===0){
            console.log(data.length)
              res.status(404).json({mensaje:"No se encuentra el cliente",info:data})
        }
        else{
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
        }
        if(data.affectedRows===0){
            console.log(data)
              res.status(404).json({mensaje:"No se encuentra el cliente",info:data})
        }
        else{
            res.status(200).json({ mensaje: "Cliente Borrado", info: data });
            console.log(data);
            
        }
    });
};


export {cargaDeCliente,buscarClienteApellido, borradoDeCliente}