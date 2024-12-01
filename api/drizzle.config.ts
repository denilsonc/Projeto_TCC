import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: './sql',
    schema: './src/db/model/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.DATABASE_URL!,
    },
})