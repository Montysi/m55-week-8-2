const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Book = sequelize.define(
    "Book",
    {
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },

        author: {
            type: DataTypes.STRING,
            dafaultValue: "Written by some author",
        },
        
        genre: {
            type: DataTypes.STRING,
            defaultValue: "Some Genre",
        },
    },
    { timestamps: false }
);

module.exports = Book;