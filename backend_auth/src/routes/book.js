const express=require('express');

const {
    handleGetAllBookList,
    handleSetBooks,
    handleGetBooksById,
    handleDeleteBookById
} = require('../controllers/books');
const upload = require('../middlewares/upload_mutler');
const verifyToken = require('../middlewares/jwt');

const router =express.Router();


router.delete("/delete", upload.any(), handleDeleteBookById).get("/book_list", upload.any(), verifyToken, handleGetAllBookList).get("/user/bookList/:id", upload.any(), verifyToken, handleGetBooksById).post('/set/user/books', upload.any(), verifyToken, handleSetBooks)

module.exports=router