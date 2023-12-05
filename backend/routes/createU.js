import express from "express";
const router = express.Router();
//import controller

import createUser, { Login } from "../controllers/user.controller.js";
import createNote, {fetchNotes} from "../controllers/note.controller.js";





//define API routes
router.post("/createUser", createUser);
router.post("/Login", Login);
router.post("/createNote", createNote);
router.post("/fetchNotes", fetchNotes)

export default router;
