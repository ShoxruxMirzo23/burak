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
    console.log("Mongodb connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err: any) => {
    console.log("ERROR on connection mongodb", err);
  });
