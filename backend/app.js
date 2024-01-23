const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json());


//import routes
const userRouter = require("./routes/user.routes");
const { default: router } = require("./routes/user.routes");

//execute routes
router.use("/api/v1/users", userRouter)



module.exports = app