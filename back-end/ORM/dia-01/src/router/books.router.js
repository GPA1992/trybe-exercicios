const express = require('express');

const booksControler = require('../controllers/BooksController');

const router = express.Router();

router.get('/', booksControler.getAll);
router.get('/:id', booksControler.getBookById);
router.post('/', booksControler.createNewBook);

module.exports = router;
