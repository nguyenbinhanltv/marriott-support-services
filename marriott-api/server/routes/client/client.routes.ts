import { Router } from "express";

// Controller
import * as clientController from "../../controllers/client/client.controller";

class ClientRoutes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this._init();
  }

  _init() {
    this.routes.get("/all", clientController.getAllClient);
    this.routes.post("", clientController.addClient);
    this.routes.post("/delete", clientController.deleteClient);
  }
}

export const clientRoutes = new ClientRoutes().routes;
