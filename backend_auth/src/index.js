const express = require("express")
const cors = require('cors');
const dotenv = require('dotenv')

const port = 8000;

//db connection 

dotenv.config();
const connection = require("./models/index");

//routes
const UserRouter = require("./routes/user_routes")
const bookRouter=require("./routes/book")

const app = express()

//Middleware - Plugin
app.use(cors());




//Routes
app.use("/api/user/", UserRouter)
app.use("/api/book/", bookRouter)
 

app.listen(port, () => {
    console.log(`server is running on ${port}`)
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connection created with Mysql successfully");
    });
})