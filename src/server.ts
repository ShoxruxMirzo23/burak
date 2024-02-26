// npm run start:dev = terminal ishlatish uchun
// Architectural pattern: NVC, DI, MVP

// Design pattern: Midleware, Decotar

// CLESTER => DATABASE => COLLECTION => DOCUMENT

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
  })
  .catch((err) => console.log("ERROR on connection MongoDB", err));
