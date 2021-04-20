const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const parent = require("./parent");
const transaction = require("./transaction");

service = express();
service.use(cors());
service.use(body_parser.json()); 
service.use(parent.router);
service.use(transaction.router);

service.listen(4000);
