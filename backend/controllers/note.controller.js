import { NewNote } from "../models/note.models.js";

const createNote = async (req, res) => {
  try {
    //extract title from request body by destructuring data
    const { title, description, UserID } = req.body;

    //create a new toDo object and insert in DB
    const response = await NewNote.create({ title, description, UserID });

    //send a jason response with success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Successfull....",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internel server error",
      message: err.message,
    });
  }
};

export const fetchNotes = async (req, res) => {
  try {
    const notes = await NewNote.find({ UserID: req.body.UserID }).populate("UserID","username ");

    //send a jason response with success flag
    res.status(200).json({
      success: true,
      data: notes,
      message: "Entry Successfull....",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internel server error",
      message: err.message,
    });
  }
}

export default createNote;
