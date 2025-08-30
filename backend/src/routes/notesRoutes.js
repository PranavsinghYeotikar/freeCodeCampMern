import express from "express";
import {getNotes, getNoteID, postNotes, putNotes, deleteNotes} from "../controllers/notesController.js";

const router = express.Router();




router.get("/", getNotes);

router.get("/:id", getNoteID);

router.post("/", postNotes)

router.put("/:id", putNotes)

router.delete("/:id", deleteNotes)




export default router;