import { Router } from "express";
import * as views from "../views/publicViews.js"

const router = Router()


router.get("/", views.home)
router.get("/about", views.about)
router.get("/contact", views.contact)


export default router