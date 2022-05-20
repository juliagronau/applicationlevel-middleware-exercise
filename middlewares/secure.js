export const secure = (req, res, next) => {
  //   console.log(
  //     "Hier wollen wir testen, ob die request url einen query param "token" hat und ob dieser einen Wert besitzt"
  //   );
  //   console.log(req.query);
  const token = req.query.token;
  console.log(token);
  if (token) {
    next();
  } else {
    res.status(403).send("You are unauthorized");
  }
};
