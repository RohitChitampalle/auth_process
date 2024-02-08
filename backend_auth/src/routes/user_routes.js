const express = require("express")
const router = express.Router()
const {
    handleGetAllUsers,
    handleGetUserById,
    setUsers,
    handleUserDeleteById,
    handleGetAllBookList
} = require("../controllers/user")

router.get("/", handleGetAllUsers).get("/book_list", handleGetAllBookList).get("/:id", handleGetUserById).delete("/:id", handleUserDeleteById)
router.post("/set", setUsers)

module.exports = router;