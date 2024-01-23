const dotenv = require("dotenv");
const connectDB = require("./db");
const app = require("./app");

dotenv.config();
const PORT = process.env.PORT;

connectDB()
.then(() => {
  app.on("error: ", (error) => {
    console.log("error: ", error);
    process.exit(1);
  });
  app.listen(PORT || 4000, ()=> {
    console.log(`app is listing on port ${PORT}`)
  })
})
.catch((error)=> {
    console.log("error while connection with database: ", error)
    process.exit(1)
})

