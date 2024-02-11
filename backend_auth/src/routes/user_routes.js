const express = require("express")
const router = express.Router()
const {
    handleGetAllUsers,
    handleGetUserById,
    setUsers,
    handleUserDeleteById,
    userLogin,
} = require("../controllers/user")
const upload = require("../middlewares/upload_mutler")
const verifyToken = require("../middlewares/jwt")

router.get("/", handleGetAllUsers)
router.get("/login",upload.any(), userLogin)
router.get("/:id", handleGetUserById)
router.delete("/:id", handleUserDeleteById)
router.post("/set", upload.any(),setUsers)

module.exports = router;