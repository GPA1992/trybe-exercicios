const { bookService } = require('../services');

const getAll = async (_req, res) => {
    try {
        const books = await bookService.getAll();
        return res.status(200).json(books);
    } catch (error) {
       /*  console.log(error.message); */
        res.status(500).json({ message: 'ocorreu um erro' });
    }
};

const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await bookService.getBookById(id);
        return res.status(200).json(book);
    } catch (error) {
        /*  console.log(error.message); */
        res.status(500).json({ message: 'ocorreu um erro' });
    }
};

const createNewBook = async (req, res) => {
    try {
        const { body } = req;
        const book = await bookService.createNewBook(body);
        return res.status(200).json(book);
    } catch (error) {
        /*  console.log(error.message); */
        res.status(500).json({ message: 'ocorreu um erro' });
    }
};
module.exports = {
    getAll,
    getBookById,
    createNewBook,
};