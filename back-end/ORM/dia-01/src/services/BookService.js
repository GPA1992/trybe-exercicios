const { Book } = require('../models');

const getAll = async () => {
    const books = await Book.findAll();
    return books;
};

const getBookById = async (bookId) => {
    const books = await Book.findByPk(bookId);
    return books;
};

const createNewBook = async (newBook) => {
    const newBookAdded = Book.create(newBook);
    return newBookAdded;
};

module.exports = {
    getAll,
    getBookById,
    createNewBook,
};