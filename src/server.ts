// npm run start:dev = terminal ishlatish uchun
// Architectural pattern: NVC, DI, MVP

// Design pattern: Midleware, Decotar
import dotenv from "dotenv";
dotenv.config();

console.log("PORT:", process.env.PORT);

console.log("MONGO_URL:", process.env.MONGO_URL);

// CLESTER => DATABASE => COLLECTION => DOCUMENT
