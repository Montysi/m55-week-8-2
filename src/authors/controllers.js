const Author = require("./model");

const addAuthor = async (req, res) => {
    try {
        
        const author = await Author.create({
            authorName: req.body.AuthorName,
        });

        res.status(201).json({ message: "success", author: author });

    } catch (error) {

        res.status(501).json({ message: error.message, error: error });
        
    }
}

module.exports = {
    addAuthor: addAuthor,
}