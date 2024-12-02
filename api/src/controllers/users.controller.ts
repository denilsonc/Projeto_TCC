/**
 * Arquivo: src/routes/check-router.ts
 * Descrição: Arquivo responsável pela chamada da API na aplicação.
 * Data: 01/12/2024
 * Autor: Jeferson Braga
 */
import { Request, Response } from "express"
import db from "../config/db";
import { users } from "../config/model/schema";

interface NewUser{
    name: string;
    birthday: any;
    address: any;
    email: string;
    cpf: string;
    cellphone: string;
    password: string;
    privileges: string;
    active: boolean;
}
const createUser = async (req: Request, res: Response): Promise<void> => {
    const { name, birthday, address, email, cpf, cellphone, password, privileges, active }: NewUser  = req.body;
    try {
        const { rows } = await db(
            "INSERT INTO users (name, birthday, email, cpf,cellphone, password, privileges, active, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
            [name,birthday, email, cpf, cellphone, password, privileges, active, null]
        );
        res.status(201).send({
            message: 'User added successfully!',
            body: {
                user: {name, birthday, address, email, cpf, cellphone, password, privileges, active}
            }
        })

    } catch (error) {
        console.error('users-view: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            err: error
        })
    }
}

const viewUsers = async (req: Request, res: Response) => {
    try {
        const rows = await db("SELECT * FROM users");
        res.status(200).send(rows)
    } catch (error) {
        console.error('users-view: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.'
        })
    }
}

export default { viewUsers, createUser }