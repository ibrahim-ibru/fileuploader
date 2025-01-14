import { Router } from "express";
import * as cntrl from "./controller/controller.js"

const router=Router()

router.route("/addfile").post(cntrl.addFile)
router.route("/:_id").post(cntrl.getFile)


export default router