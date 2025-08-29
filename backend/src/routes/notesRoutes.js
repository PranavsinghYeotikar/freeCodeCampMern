import express from "express";
import {getNotes, postNotes, putNotes, deleteNotes} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getNotes);

router.post("/", postNotes)

router.put("/:id", putNotes)

router.delete("/:id", deleteNotes)

export default router;