const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.get("/ideas", UserController.showAll);
routes.get("/ideas/id/:id", UserController.showIdeaPerID);
routes.get("/ideas/category/:category", UserController.showIdeaPerCategory);
routes.post(
  "/ideas",
  UserController.checkOptionalLinkIsEmpty,
  UserController.createIdea
);
routes.delete("/ideas/:id", UserController.deleteIdea);

module.exports = routes;
