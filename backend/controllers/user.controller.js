import { User } from "../models/user.models.js";

const createUser = async (req, res) => {
  try {
    //extract title from request body by destructuring data
    const { username, email, password } = req.body;

    //create a new toDo object and insert in DB
    const response = await User.create({ username, email, password });

    //send a jason response with success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Successfull....",
      // userid: response.id
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

export const Login = async (req, res) => {
  try {
    //extract title from request body by destructuring data
    const {email, password } = req.body;

    //create a new toDo object and insert in DB
      const response = await User.find({ email, password }).exec();
      if (response) {
          //send a jason response with success flag
          res.status(200).json({
            success: true,
            data: response,
            message: "Entry Successfull....",
            // userid: response.id
          });
      }

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internel server error",
      message: err.message,
    });
  }
};

export default createUser;
