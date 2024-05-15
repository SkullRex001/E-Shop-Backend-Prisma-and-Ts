import { Router } from "express";
import { login, signup } from "../controllers/auth";
import { errorHandler } from "../error-handler";

const authRouter:Router = Router()

authRouter.route('/login').post(errorHandler(login))
authRouter.route('/signup').post(errorHandler(signup))

export default authRouter;