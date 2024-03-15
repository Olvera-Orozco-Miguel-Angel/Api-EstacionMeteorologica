
import mysql from "promise-mysql";
import config from "../config.js";
/* creación de un objeto de conexion el cual se nombra como 'connection' el cual permite interactuar con la base de datos
el metodo mysql.createConnection crea la conexión con mysql y la base de datos, para lograrlo necesita como parametros el host, el usuario, la contraseña y la base de datos
*/
const connection = mysql.createConnection({
    host:config.host,
    user:config.user,
    password:config.password,
    database: config.database,
    port :config.port
},{multipleStatement:true});
/* 
Se define una función llamada getConnection que devuelve la conexión con la base de datos. Esta función va se de gran utilidad
ya que nos va a permitir realiza la conexión desde otros modulos.
 */
const getConnection = () =>{
    return connection;
}
module.exports = {
    getConnection
}