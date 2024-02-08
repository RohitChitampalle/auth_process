const express=require('express');

const { handleGetAllBookList } = require('../controllers/books');

const router =express.Router();


router.get("/book_list", handleGetAllBookList)

module.exports=router