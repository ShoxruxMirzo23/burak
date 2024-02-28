// npm run start:dev  bu hardoim codeni ishga tushirish uchun!!!!
import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

router.get("/", memberController.goHome);

router.get("/login", memberController.getLogin);

router.get("/signup", memberController.getSignup);

export default router;
