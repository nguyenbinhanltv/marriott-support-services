import { Router } from "express";

//Routes
import { usersRoutes } from "./users/users.routes";
import { enquiryRoutes } from "./enquiry/enquiry.routes";

class AppRoutes {
  public routes: Router;
  constructor() {
    this.routes = Router();
    this._init();
  }

  private _init() {
    this.routes.use("/v1/users", usersRoutes);
    this.routes.use("/v1/enquiries", enquiryRoutes)
    this.routes.get("/", (req, res) => {
      res.send({
        message: "This API for Marriott version 1.0 ^^"
      })
    });
  }
}

export const appRoutes = new AppRoutes().routes;
