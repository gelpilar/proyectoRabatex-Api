import mysql, {Connection} from 'mysql';

const db: Connection = mysql.createConnection(
    {
        host: "127.0.0.1",
        port:3308,
        user: "root",
        password:"1234",
        database: "rabatex"
    }
)

db.connect((err) => {
    if (err) {
      console.error('Error de conexión a la base de datos: ' + err.message);
    } else {
      console.log('Conexión a la base de datos exitosa');
    }
  });
  
  export default db;
