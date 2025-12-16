export default function routes(app) {
  app
    .route("/user")
    .get(
      (req, res, next) => {
        console.log("Request to:", req.originalurl); //이건 아래 log에서
        console.log("Request type:", req.method); //이건 아래 log에서
        next();
      },
      (req, res, next) => res.send("GET request Successful") //이건 postman에서 확인
    )
    .post((req, res) => res.send("POST request")); //이건 postman에서 확인

  app
    .route("/user/:userId")
    .put((req, res) => res.send("PUT Request")) //이건 postman에서 확인
    .delete((req, res) => res.send("DELET Request")); //이건 postman에서 확인
}
