import { Request, Response, Router } from 'express'
import { FirstController } from './controllers/teste';


const router = Router()

const firstController = new FirstController()
//Routes
router.get("/", (req: Request, res: Response) => {
    firstController.home(req,res)
});

export { router }
