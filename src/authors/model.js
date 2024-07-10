const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Author = sequelize.define(
  "Author",
  {
    author: {
      type: DataTypes.STRING,
      dafaultValue: "Written by some author",
    },

  },
  { timestamps: false }
);

module.exports = Author;
