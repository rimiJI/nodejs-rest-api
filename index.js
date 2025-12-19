import dotenv from "dotenv";
dotenv.config(); //nodejs가 자동으로  env읽게 하는 라이브러리

import express from "express"; //express 라이브러리 임포트
import routes from "./src/routes.js";
import mongoose from "mongoose";

const app = express(); //express앱의 인스턴스 생성. calls,requests 신호 받을수있게
const port = 3000;

//mongoose는 DB 연결하는데 도움
mongoose;
mongoose.connect(process.env.MONGO_URI); //Atlas로 변경 //로컬경로임 -> 예제와 다르게 입력해야함. 그래야 최신버전에서는 에러안남

//REST API 통해 DB로 전송
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//index.js에서 routes 연결
routes(app);

//The first endpoint / route
//최소 하나의 엔드포인트 필요 => 이 포트에서 실행중입니다.
app.get("/", (req, res) => {
  res.send(`Node & Express server is running on port ${port}`);
});

//서버를 켜는 스위치. 지정 포트에서 요청을 듣기 시작. 이 줄이 없으면 서버코드만 있고 아무도 못들어옴
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
