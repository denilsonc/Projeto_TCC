import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import { users, drivers, headFamily, familyMember, trucks, address } from "./model/schema";
import dotenv from 'dotenv';

dotenv.config();
const url: any = process.env.DATABASE_URL

// export const db = drizzle(url);

import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { Pool, QueryResult } from "pg";

const pool = new Pool({
    connectionString: url,
});

pool.on('error', (err, client) => {
    console.log('Unexpected error on idle client', err)
    process.exit(-1);
})

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!')
});
const query = async (text: string, params?: any[]): Promise<QueryResult<any>> => {
    return pool.query(text, params);
  };

export default query