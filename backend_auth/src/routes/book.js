const express=require('express');

const { handleGetAllBookList } = require('../controllers/books');
const upload = require('../middlewares/upload_mutler');

const router =express.Router();


router.get("/book_list",upload.any(), handleGetAllBookList)

module.exports=router