import { Request, Response, Router } from 'express'
import { FirstController } from './controllers/teste';
import { Test } from './routes/check-router';


const router = Router()

const firstController = new FirstController()
const test = new Test()
//Rota api para teste
router.get('/api', (req: Request,res:Response)=>{
    test.api(req,res)
})
//Routes
router.get("/", (req: Request, res: Response) => {
    firstController.home(req,res)
});

export { router }
