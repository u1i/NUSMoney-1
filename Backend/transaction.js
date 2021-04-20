const database = require("./database");
const express = require("express")

router = express.Router();
router.get("/transaction/by_wallet", (request, response) => {
database.connection.query(`select * from transaction where wallet_id = '${request.query.wallet_id}'`, (errors, results) => {
if (errors) {
            console.log(errors);
            response.status(500).send("Internal server error");
        } else {
            response.status(200).send(results);
        }
    });
});

//var mydatetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
// var mydatetime = '2021-04-12 12:00:00.000'; 
router.post("/transaction/addnew", (request, response) => {
database.connection.query(`insert into transaction (datetime_, wallet_id, transaction_id, transaction_type, category, amount, description_) values ('${request.body.datetime_}','${request.body.wallet_id}','${request.body.transaction_id}','${request.body.transaction_type}','${request.body.category}','${request.body.amount}','${request.body.description_}')`, (errors, results) => {
if (errors) {
            console.log(errors);
            response.status(500).send("Internal server error");
        } else {
            response.status(200).send(results);
        }
    });
});

module.exports = {router};