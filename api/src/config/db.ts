import { drizzle } from "drizzle-orm/postgres-js";
import { eq, gte, lt, ne, or } from "drizzle-orm";
import { users, drivers, headFamily, familyMember, trucks, address } from "./model/schema";
import dotenv from 'dotenv';

dotenv.config();
const url: any = process.env.DATABASE_URL

const db = drizzle(url);

export { db, eq, lt, gte, ne, or} 