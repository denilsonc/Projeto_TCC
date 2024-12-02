/**
 * Arquivo: src/routes/check-router.ts
 * Descrição: Arquivo responsável pela chamada da API na aplicação.
 * Data: 01/12/2024
 * Autor: Jeferson Braga
 */
import { Request, Response } from "express"
import db from "../config/db";
import { users } from "../config/model/schema";

class Usernew {
    name: string;
    birthday: Date;
    email: string;
    cpf: string;
    cellphone: string;
    password: string;
    privileges: string;
    active: boolean
    constructor(nameuser: string, birthday: Date, email: string, cpf: string, cellphone: string, password: string, privileges: string, active?: boolean, address?: number) {
        this.name = nameuser;
        this.birthday = birthday;
        this.email = email;
        this.cpf = cpf;
        this.cellphone = cellphone;
        this.password = password;
        this.privileges = privileges;
        this.active = active ? active : true;
    }
}

const createUser = async (req: Request, res: Response) => {
    const { nameuser, birthday, address, email, cpf, cellphone, password, privileges, active } = req.body;
    type NewUser = typeof users.$inferInsert;
    const insertUser = async (user: NewUser) => {
        return db.insert(users).values(user);
    }
    const newUser: NewUser = {
        name: 'nameuser',
        birthday: '2000-10-19',
        email: 'address3',
        cpf: 'email3',
        cellphone: 'cellphone3',
        password: 'password3',
        privileges: 'privileges3',
        active: true
    }
    await insertUser(newUser);
    try {
        type NewUser = typeof users.$inferInsert;
        const insertUser = async (user: NewUser) => {
            return db.insert(users).values(user);
        }
        await insertUser(newUser);
        // const rows = await db.insert(users).values(newUsers);
        // const rows = await db.query("INSERT INTO users (name, birthday, email, cpf,cellphone,password,privileges,active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
        //     [name,birthday, address, email, cpf, cellphone, password, privileges, active])
        res.status(201).send({
            message: 'User added successfully!',
            body: {
                user: {
                    newUser
                }
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
        const rows = await db.select().from(users);
        res.status(200).send(rows)
    } catch (error) {
        console.error('users-view: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.'
        })
    }
}

export default { viewUsers, createUser }