const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.get("/ideas", UserController.showAll);
routes.get("/ideas/:id", UserController.showOnlyOneIdea);
routes.post(
  "/ideas",
  UserController.checkOptionalLinkIsEmpty,
  UserController.createIdea
);
routes.delete("/ideas/:id", UserController.deleteIdea);
routes.put(
  "/ideas/:id",
  UserController.checkOptionalLinkIsEmpty,
  UserController.updateIdea
);

module.exports = routes;
