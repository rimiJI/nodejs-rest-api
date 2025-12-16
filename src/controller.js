//컨트롤러(로직) 만들기: 유저 추가 (controller.js)
import mongoose from "mongoose";
import { userSchema } from "./model.js";

const User = mongoose.model("User", userSchema); //기존사용자

export const addNewUser = async (req, res) => {
  //async 비동기 함수!
  try {
    let newUser = new User(req, body); //postmand의 body에서 가져온다.
    let savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};
