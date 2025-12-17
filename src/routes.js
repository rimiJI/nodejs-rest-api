import { addNewUser, getUsers } from "./controller.js";
export default function routes(app) {
  app
    .route("/user")
    .get(
      (req, res, next) => {
        console.log("Request to:", req.originalurl); //이건 아래 log에서
        console.log("Request type:", req.method); //이건 아래 log에서
        next();
      },
      getUsers //이건 postman에서 확인
    )
    .post(addNewUser); //이건 postman에서 확인

  app
    .route("/user/:userId")
    .put((req, res) => res.send("PUT Request")) //이건 postman에서 확인
    .delete((req, res) => res.send("DELET Request")); //이건 postman에서 확인
}
