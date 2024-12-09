import express from 'express';
import { faker } from '@faker-js/faker'
import database from './src/database/database.mjs';
import people from './src/database/people.mjs' 
const app = express()
const port = 3000

await people.createInfrastructure();

app.get('/', async (request, response) => {
    await people.insertPeople(`${faker.person.firstName()} ${faker.person.lastName()}`)
    let peopleArray = await people.selectAllPeople()
    response.send(`<body>
                        <h1>Full Cycle Rocks!</h1>
                        ${createTable(peopleArray)}
                   </body>`)
})

app.get('/healthcheck', async (request, response) => {
    try {
        await database.healthCheck();
        response.status(200)
        response.send('Healthy')
    } catch (error) {
        response.status(503)
        response.send('Unhealthy')
    }
});

app.listen(port, () => {
    console.log('Running on port: ' + port)
})

let createTable = (peopleArray) => `<table>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome</th>
                                        </tr>
                                    ${peopleArray.map(people => `<tr>
                                                                        <td>${people.Id}</td>
                                                                        <td>${people.Name}</td>
                                                                 </tr>`).join('')}
                                    </table>`