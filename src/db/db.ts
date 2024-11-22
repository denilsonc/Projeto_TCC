import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import { users, drivers, headFamily, familyMember, trucks, address } from "./model/schema";


const db = drizzle(process.env.DATABASE_URL);