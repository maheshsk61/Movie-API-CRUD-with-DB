import express from 'express'
import { movieCreate, movieRead, movieUpdate, movieDelete } from "../controllers/movies.controller.js"
const router = express.Router()
//create
router.post("/", movieCreate)
//read
router.get("/", movieRead)
//update 
router.put("/:id", movieUpdate)
//delete
router.delete("/:id", movieDelete)
export default router