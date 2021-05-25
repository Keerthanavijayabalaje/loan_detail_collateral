const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 9000

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.post('/loan_detail_collateral', db.insertloan_detail_collateral)


app.listen(9000, () => {
  console.log(`Server is running.`);
});
