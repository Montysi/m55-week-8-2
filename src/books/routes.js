const { Router } = require("express");
const bookRouter = Router();

const {addBook, getAllBooks, getBookByAuthor} = require("./controllers")
;
// http://localhost:5001/books/test
bookRouter.get("/test", async (req, res) => {
    res.status(200).json({ message: "test a ok!"});
});

bookRouter.post("/addBook", addBook);

bookRouter.get("/getAllBooks", getAllBooks);

bookRouter.get("/getBookByAuthor", getBookByAuthor)

module.exports = bookRouter;