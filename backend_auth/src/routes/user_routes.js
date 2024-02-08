const express = require("express")
const router = express.Router()
const {
    handleGetAllUsers,
    handleGetUserById,
    setUsers,
    handleUserDeleteById,
    handleGetAllBookList
} = require("../controllers/user")

router.get("/", handleGetAllUsers).get("/:id", handleGetUserById).delete("/:id", handleUserDeleteById)
router.post("/set", setUsers).get("/book_list",handleGetAllBookList)
module.exports = router;