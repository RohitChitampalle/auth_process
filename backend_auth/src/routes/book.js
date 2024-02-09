const express=require('express');

const {
    handleGetAllBookList,
    handleSetBooks,
    handleGetBooksById
} = require('../controllers/books');
const upload = require('../middlewares/upload_mutler');

const router =express.Router();


router.get("/book_list", upload.any(), handleGetAllBookList).get("/user/bookList/:id", upload.any(), handleGetBooksById).post('/set/user/books', upload.any(), handleSetBooks)

module.exports=router