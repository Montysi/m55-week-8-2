const Book = require("./model");

const addBook = async (req, res) => {
    console.log("req.body:", req.body);
    try {

        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        });

        res.status(201).json({ message: "success", book: book}) ;

    } catch (error) {
        res.status(501).json({ message: error.message, error: error});
    }
};


const getAllBooks = async (req, res) => {
    try {

        const books = await Book.findAll()

        res.status(200).json({ message: "success", books: books})

    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
}

const getBookByAuthor = async (req, res) => {
    try {
        
        const authorName = req.body.author;

        const books = await Book.findAll({ where: { author: authorName }});

        res.status(200).json({ message: "success", books: books})

    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
}


const updateBookByTitle = async (req, res) => {
    try {
        


        res.status(200).json({ message: "success", books: books });
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
}

const deleteBookByTitle = async (req, res) => {
    try {

        const title = req.body.title;
        
        const books = await Book.destroy({ where: { title: title } });

        res.status(200).json({ message: `${title} successfully deleted!`, books: books});

    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
}


module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    getBookByAuthor: getBookByAuthor,
    deleteBookByTitle: deleteBookByTitle,
}