import mysql from 'mysql2/promise';

let mysqlConnection = async () => await mysql.createConnection({
    host: 'db',
    user: 'app',
    password: 'Master.007,01',
    database: 'node_db'
})

let healthCheck = async () => (await mysqlConnection()).query('SELECT 1 FROM People;')

const database = {
    mysqlConnection,
    healthCheck
}

export default database;