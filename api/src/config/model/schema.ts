import { integer, pgTable, varchar, date, boolean} from "drizzle-orm/pg-core";

const basicInfo = {
    id:integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    birthday: date().notNull(),
    address: integer().references(() => address.id),
}

export const users = pgTable("users", {
    ...basicInfo,
    email: varchar({ length: 255}).notNull().unique(),
    cpf: varchar({ length: 255}).notNull().unique(),
    cellphone: varchar({ length: 255}).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    privileges: varchar({ length: 255 }).notNull(),
    active: boolean().notNull(),
});

export const drivers = pgTable("drivers", {
    ...basicInfo,
    email: varchar({ length: 255}).notNull().unique(),
    cpf: varchar({ length: 255}).notNull().unique(),
    cellphone: varchar({ length: 255}).notNull().unique(),
    cnh_number: varchar({ length: 255 }).notNull().unique(),
    cnh_category: varchar({ length: 255 }).notNull(),
    cnh_date: date().notNull(),
});

export const headFamily = pgTable("head_family", {
    ...basicInfo,
    email: varchar({ length: 255}).notNull().unique(),
    cpf: varchar({ length: 255}).notNull().unique(),
    cellphone: varchar({ length: 255}).notNull().unique(),
});

export const familyMember = pgTable("family_member", {
    ...basicInfo,
    email: varchar({ length: 255}).notNull().unique(),
    cpf: varchar({ length: 255}).notNull().unique(),
    cellphone: varchar({ length: 255}).notNull().unique(),
    head_id: integer().references(() => headFamily.id).notNull(),
});

export const trucks = pgTable("trucks", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    plate: varchar({ length: 255 }).notNull().unique(),
    model: varchar({ length: 255 }).notNull(),
    year: date().notNull()
});

export const address = pgTable("address", {
    //talvez usar cep como PK
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    cep: varchar({ length: 255 }).notNull(),
    number: integer().notNull(),
    street: varchar({ length: 255 }).notNull(),
    neighborhood: varchar({ length: 255 }).notNull(),
    city: varchar({ length: 255 }).notNull(),
    state: varchar({ length: 255 }).notNull(),
});