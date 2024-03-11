// npm run start:dev  bu hardoim codeni ishga tushirish uchun!!!!
import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

router.post("/login", memberController.login);
router.post("/signup", memberController.signup);

export default router; // SPA: React
