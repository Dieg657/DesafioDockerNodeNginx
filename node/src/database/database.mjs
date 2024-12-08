import mysql from 'mysql2/promise';

let mysqlConnection = async () => await mysql.createConnection({
    host: 'db',
    user: 'app',
    password: 'Master.007,01',
    database: 'node_db'
})

const database = {
    mysqlConnection
}

export default database;