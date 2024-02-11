const express=require('express');

const {
    handleGetAllBookList,
    handleSetBooks,
    handleGetBooksById
} = require('../controllers/books');
const upload = require('../middlewares/upload_mutler');
const verifyToken = require('../middlewares/jwt');

const router =express.Router();


router.get("/book_list", upload.any(), verifyToken, handleGetAllBookList).get("/user/bookList/:id", upload.any(), verifyToken, handleGetBooksById).post('/set/user/books', upload.any(), verifyToken, handleSetBooks)

module.exports=router