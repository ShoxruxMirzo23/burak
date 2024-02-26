// npm run start:dev = terminal ishlatish uchun
// Architectural pattern: NVC, DI, MVP

// Design pattern: Midleware, Decotar

// CLESTER => DATABASE => COLLECTION => DOCUMENT

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("mongoDb connection succed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`the server is running successfully on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("Error on connection Mongodb", err));
