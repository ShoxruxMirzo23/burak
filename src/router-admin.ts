// npm run start:dev  bu hardoim codeni ishga tushirish uchun!!!!
import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);
routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Product */
routerAdmin.get("/product/all", productController.getAllProducts);
routerAdmin.post("/product/create", productController.createNewProducts);
routerAdmin.post("/product/:id", productController.updateChosenProducts);
/** User */

export default routerAdmin;
