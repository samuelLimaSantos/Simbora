const express = require("express");
const routes = express.Router();
const DataController = require("./controllers/DataController");

routes.get("/test", DataController.showAll);

module.exports = routes;
