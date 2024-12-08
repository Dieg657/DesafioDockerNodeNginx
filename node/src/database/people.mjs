import database from './database.mjs'
const tableExistsStatement = `SHOW TABLES FROM node_db LIKE 'People'`
const tableCreateStatement = 'CREATE TABLE People (Id int AUTO_INCREMENT, Name varchar(255) NOT NULL, PRIMARY KEY (ID))'
const selectPeopleStatement = `SELECT * FROM People`
const insertPeopleStatement = 'INSERT INTO `People` (Name) VALUES (?)'


async function existsTable() {
    try {
        let connection = await database.mysqlConnection();
        const [rows] = await connection.query(tableExistsStatement);
        await connection.end();
        let result = rows[0] !== undefined
        return result;
    } catch (error) {
        throw error;
    }
}

async function createInfrastructure() {
    try{
        let exists = await existsTable();
        if(!exists) {
            let connection = await database.mysqlConnection();
            await connection.execute(tableCreateStatement);
            await connection.end();
        }
    }catch (error) {
        throw error;
    }
}

async function selectAllPeople() {
    try {
        let connection = await database.mysqlConnection();
        const [rows] = await connection.query(selectPeopleStatement);
        await connection.end();
        return rows;
    } catch (error) {
        throw error;
    }
}

async function insertPeople(personName) {
    try {
        let connection = await database.mysqlConnection();
        await connection.execute(insertPeopleStatement, [personName]);
        await connection.end();
    } catch (error) {
        throw error;
    }
}

const people = {
    createInfrastructure,
    selectAllPeople,
    insertPeople
}

export default people;