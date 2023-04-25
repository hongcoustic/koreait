import mysql from "mysql2/promise"
import dotenv from "dotenv";

// dotenv 라이브러리 설정 함수
// 객체로 설정해주며, 인자를 비워두면 기본 설정 적용됨
// 만약 환경 변수 설정을 .env.local 에다 저장했다면, config({path: '.env.local'}); 로 설정해준다.
dotenv.config();

// console.log("DB_HOST 변수에 들어있는 값?: ", process.env);


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    port: process.env.DB_PORT
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