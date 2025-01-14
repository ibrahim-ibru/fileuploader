import { Router } from "express";
import * as cntrl from "./controller/controller.js"
import Auth from "./middleware/authentication.js"

const router=Router()

router.route("/addfile").post(cntrl.addFile)
router.route("/:_id").get(Auth,cntrl.getFile)


export default router