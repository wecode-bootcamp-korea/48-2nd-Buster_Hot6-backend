const  userService  = require('../services/userServices');
const { catchAsync } = require('../utils/error');

const signUp = catchAsync(async (req, res) => {
const { nickname, email, password } = req.body;

  if (!nickname || !email || !password ) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;

    throw error;
  }

  const creteUser = await userService.signUp(
    nickname,
    email,
    password
  );

  res.status(201).json({ message: 'user is created' });
});

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const accessToken = await userService.signIn(email, password);

    res.status(200).json({ accessToken});
    
  } catch (error) {
    console.log("컨트롤",error)
    res.status(401).json({ message: error.message });
  }
};

module.exports = { signUp,  signIn };
