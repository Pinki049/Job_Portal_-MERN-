import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAppliedJobs, applyJob, getApplicants, updateStatus} from "../controllers/application.controller.js";




const router  = express.Router()

//router.get("/test", (req, res) => res.send("Application route works"));

router.route("/apply/:id").get(isAuthenticated,applyJob);
router.route("/get").get(isAuthenticated,getAppliedJobs);
router.route(":id/applicants").get(isAuthenticated,getApplicants);
router.route("/status/:id/update").post(isAuthenticated,updateStatus);

export default router;