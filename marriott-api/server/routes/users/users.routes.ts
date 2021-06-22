import { Router } from "express";

// Controller
import * as adminController from "../../controllers/admin/admin.controller";

class UsersRoutes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this._init();
  }

  _init() {
    /**
     * @description
     * Must has token to use this API
     */

    // For admin
    this.routes.get("/admin/all", adminController.getAllStaff);
    this.routes.post("/admin/signup", adminController.signUp);
    this.routes.post("/admin", adminController.createAdmin);
    this.routes.post("/admin/login", adminController.login);
    this.routes.post(
      "/admin/logedin",
      adminController.verifyToken,
      adminController.logedIn
    );
  }
}

export const usersRoutes = new UsersRoutes().routes;
