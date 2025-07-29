import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    host: "localhost",
    port: 5432,
    database: "mydb",
    user: "postgres",
    password: "PrinceKumar@123",
    ssl: false
  },
});
// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//     dialect: "postgresql",
//     schema: "./db/schema.ts",
//     out: "./drizzle",
//     dbCredentials: {
//         host: "localhost",
//         port: 5432,
//         database: "mydb",
//         user: "postgres",
//         password: "PrinceKumar@123",
//         ssl: false // 👈 important for local Postgres without SSL
//     }
// });
