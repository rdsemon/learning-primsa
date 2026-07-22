import dotenv from "dotenv";
dotenv.config();
import { PrismaClient } from "../generate/prisma/client.js";

// Import the driver adapter for your specific database (example uses PostgreSQL)
import { PrismaPg } from "@prisma/adapter-pg";

console.log(process.env.DATABASE_URL);

// Initialize the adapter according to your driver's requirements
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// Pass the adapter instance to PrismaClient
const prisma = new PrismaClient({ adapter });

export default prisma;
