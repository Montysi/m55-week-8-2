const { Router } = require("express");
const genreRouter = Router();

const { addGenre } = require("./controllers");

genreRouter.post("/addGenre", addGenre)


module.exports = genreRouter;