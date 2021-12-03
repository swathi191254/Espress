const express = require("express");

const usersController = require("./controllers/users.controller");
const authorController = require("./controllers/authors.controller");
const sectionsController = require("./controllers/sections.controller");
const booksController = require("./controllers/books.controller");

const app = express();

app.use(express.json());

app.use("/sections", sectionsController);
app.use("/users",usersController);
app.use("/books",booksController);
app.use("/authors",authorController);