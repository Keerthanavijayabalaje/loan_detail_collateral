const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const insertloan_detail_collateral = (request, response) => {
const {id, valueinpennies, loan_detail_id, address_id, created, updated, type} = request.body
  pool.query( "INSERT INTO cbanc2.loan_detail_collateral (id, valueinpennies, loan_detail_id, address_id, created, updated, type) VALUES ($1,$2,$3,$4,$5,$6,$7)",[id, valueinpennies, loan_detail_id, address_id, created, updated, type], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in loan_detail_collateral')
  })
}



module.exports = {
insertloan_detail_collateral
}
