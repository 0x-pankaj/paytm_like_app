import { registerUser } from "../controllers/user.controller";

const {Router} = require("express");


const router = Router();

router.route("/register", registerUser)


export default router;