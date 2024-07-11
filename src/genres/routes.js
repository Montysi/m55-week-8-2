const { Router } = require("express");
const genreRouter = Router();

const { addGenre, GetGenreAndBooks } = require("./controllers");

genreRouter.post("/addGenre", addGenre)

genreRouter.get("/getGenreAndBooks/:genreName", GetGenreAndBooks)

module.exports = genreRouter;