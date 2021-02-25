import { Router } from "express";

// Controller
import * as enquiryController from "../../controllers/enquiry/enquiry.controller";

class EnquiryRoutes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this._init();
  }

  _init() {
    this.routes.get("/all", enquiryController.getEnquiries);
    this.routes.post("", enquiryController.addEnquiry);
  }
}

export const enquiryRoutes = new EnquiryRoutes().routes;
