import mysql from "mysql2/promise"
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "./env.js";

const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    waitForConnections: true,
    port: DB_PORT
});

const getConnection = async () => {
    return await pool.getConnection((err, conn)=> {
        if(err){
            throw Error;
        }
        return conn;
    });
}

export default pool;
export {getConnection};