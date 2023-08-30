const  userService  = require("../services/userServices");
const { catchAsync } = require("../utils/error");

const signUp = catchAsync(async (req, res) => {
const { nickname, email, password } = req.body;

  if (!nickname || !email || !password ) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;

    throw error;
  }

  const creteUser = await userService.signUp(
    nickname,
    email,
    password
  );

  res.status(201).json({ message: "user is created" });
});

const signIn = catchAsync(async (req, res) => {
    const { email, password } = req.body;

    const accessToken = await userService.signIn(email, password);

    res.status(200).json({ accessToken}); 
})

module.exports = { signUp,  signIn };
