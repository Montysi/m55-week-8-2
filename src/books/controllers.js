const Book = require("./model");


const addBook = async (req, res) => {
  console.log("req: ", req.body);
  try {
   
    const book = await Book.create(req.body);

    res.status(201).json({ message: "success", book: book });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
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


// returns empty array
const getBookByAuthor = async (req, res) => {
    try {

        console.log("req.params: ", req.params);

        const books = await Book.findAll({where: { title: req.params.author } });

        res.status(200).json({ message: "success", books: books})

    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
}

const getBookByTitle = async (req, res) => {
    try {
        console.log("req.params: ", req.params)

        const books = await Book.findOne({ where: { title: req.params.title } });

        res.status(200).json({ message: "success", books: books });
        
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

const deleteAll = async (req, res) => {
    try {

        const books = await Book.destroy({ where: {} });

        res.status(200).json({ message: `All books successfully deleted!`, books: books });

        
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
}


module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    getBookByAuthor: getBookByAuthor,
    deleteBookByTitle: deleteBookByTitle,
    deleteAll: deleteAll,
    getBookByTitle: getBookByTitle,
}