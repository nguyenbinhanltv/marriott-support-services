import { Router } from "express";

// Controller
import * as activityController from "../../controllers/activity/activity.controller";

class ActivityRoutes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this._init();
  }

  _init() {
    this.routes.get("/all", activityController.getActivities);
    this.routes.post("", activityController.addActivity);
    this.routes.post("/delete", activityController.deleteActivity);
    this.routes.post("/update", activityController.updateActivity);
  }
}

export const activityRoutes = new ActivityRoutes().routes;
