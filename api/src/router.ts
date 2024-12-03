import { Request, Response, Router } from 'express'
import { FirstController } from './controllers/teste';
import { Test } from './routes/check-router';
import Users from './routes/users.routes'


const router = Router()
const usersRoutes = Users

const firstController = new FirstController()
const test = new Test()
//Rota api para teste
router.get('/api', (req: Request,res:Response)=>{
    test.api(req,res)
})
router.get('/tables', (req: Request,res:Response)=>{
    test.showTables(req,res)
})
//Routes
router.get("/", (req: Request, res: Response) => {
    firstController.home(req,res)
});

//Rotas de usuários 
router.use('/users/', usersRoutes)

export default router;
