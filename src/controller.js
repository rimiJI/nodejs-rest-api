//컨트롤러(로직) 만들기: 유저 추가 (controller.js)
import mongoose from "mongoose";
import { userSchema } from "./model.js";

const User = mongoose.model("User", userSchema); //기존사용자

export const addNewUser = async (req, res) => {
  //async 비동기 함수!
  try {
    let newUser = new User(req.body); //postmand의 body에서 가져온다. 💥Express에서 POST 데이터는 항상 req.body
    let savedUser = await newUser.save(); //계정저장
    res.json(savedUser); //서버에서 JSON 응답 전송 → 프론트엔드는 이 JSON을 받아서 화면에 사용 가능 //(서버에서 “프런트를 채우는” 건 아님, 재료만 보내는 것)
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//전체 유저 가져오기
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}); //모든 유저 찾기 User.find({}), MongoDB에 "user 컬렉션좀줘" 요청
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//특정 유저 가져오기
export const getUserWithId = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId); //참고로 findById는 mongoDB메서드
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//유저정보 변경하기
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId }, //이것을바꿀것
      req.body, //업데이트하려는내용
      { new: true } //응답보낼때마다 업데잍 된 사용자정보 함께 보낸다.
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//삭제! 마지막 엔드포인트!
export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.userId }); //그냥 삭제했기때문에 이번엔 변수저장❌
    res.json({ message: "Successfully delete the user" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
