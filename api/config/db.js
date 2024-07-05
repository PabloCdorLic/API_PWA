import mysql2 from 'mysql2';

const configInfoDB={
    host:"localhost",
    user:'root',
    database:'agenda_estudio',
    port:3306,
       
}

const db= mysql2.createConnection(configInfoDB)//conectar la API con la DB

//agregado si queremos algun mensaje para saber si se logro conectar con la DB o no
db.connect((err)=>{
     err? console.log(`Error al conectarse con DB: ${err}`): console.log("Coneccion a DB SQL exitosa") 
})//

export default db;
