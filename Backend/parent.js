const database = require("./database");
const express = require("express")

router = express.Router();
router.get("/parent", (request, response) => {
    database.connection.query("select * from parent left join wallet on parent.id = wallet.id left join child on parent.id = child.id join currency on wallet.currency_id=currency.id order by user_name", (errors, results) => {
        if (errors) {
            consolce.log(errors);
            response.status(500).send("Internal server error");
        } else {
            response.status(200).send(results);
        }
    });
});

router.get("/parent/by_id", (request, response) => {
    database.connection.query(`select * from parent where id = '${request.query.id}'`, (errors, results) => {
        if (errors) {
            consolce.log(errors);
            response.status(500).send("Internal server error");
        } else {
            response.status(200).send(results);
        }
    });
});

router.put("/parent/update", (request, response) => {
    database.connection.query(`update parent set user_name = '${request.body.user_name}', email = '${request.body.email}', mobile = '${request.body.mobile}', fb_id = '${request.body.fb_id}' where id=${request.body.id}`,
    (errors, results)=>{
        if (errors) {
            console.log(errors);
            response.status(500).send("Internal server error");
        } else {
            response.status(200).send("Updated successfully");
        }
    });
});

module.exports = {router};