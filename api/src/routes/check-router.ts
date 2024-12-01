/**
 * Arquivo: src/routes/check-router.ts
 * Descrição: Arquivo responsável pela chamada da API na aplicação.
 * Data: 01/12/2024
 * Autor: Jeferson Braga
 */

import { Request, Response} from "express";

export class Test {
    public api(req: Request, res: Response) {
        return res.status(200).send({
            success: true,
            message: 'Api acessada com sucesso.',
            version: '1.0.0'
        })
    }
}



