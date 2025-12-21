import {
  addNewUser,
  deleteUser,
  getUsers,
  getUserWithId,
  updateUser,
} from "./controller.js";
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
    .route("/user/:userId") //:userId는 동적경로. 또는 Parameter라고해서.. controller.js에서 .params 적은것
    .get(getUserWithId)
    .put(updateUser) //.put((req, res) => res.send("PUT Request"))//임시 //이건 postman에서 확인
    .delete(deleteUser); //.delete((req, res) => res.send("DELET Request")); //임시///이건 postman에서 확인
}
