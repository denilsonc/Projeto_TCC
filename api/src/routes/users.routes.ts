import { Router, Request, Response } from "express";
import UserController from "../controllers/users.controller";

const router = Router()
const usersController = UserController

router.get('/view', usersController.viewUsers)

router.post('/createUser', usersController.createUser)


export default router;