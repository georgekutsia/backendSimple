const User = require("../models/user.model");

const bcrypt = require("bcrypt");
const { validateEmail, validatePassword, usedEmail, validateName,} = require("../../utils/validator");
const {generateSign, verifySign} = require("../../utils/jwt")
const { sendRegistrationEmail } = require("../../utils/mailer.config");

const register = async (req, res) => {
  try {
    const newUser = new User(req.body);
    console.log(newUser);

    if (!validateName(newUser.name)) {
      return res.status(400).json({ message: "invalid name. letters from 3 to 30 characters" });
    }
    if (!validateEmail(newUser.email)) {
      return res.status(400).json({ message: "invalid email address" });
    }
    if (!validatePassword(newUser.password)) {
      return res.status(400).json({ message: "invalid password. Upper, lower, min 6 max 16, Spec Char" });
    }
    if (await usedEmail(newUser.email)) {
      return res.status(400).json({ message: "the email already exists" });
    }
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    const createdUser = await newUser.save();
    sendRegistrationEmail(newUser);

    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const userInfo = await User.findOne({ email: req.body.email});
    if (tokenRevoked) {
      return res.status(401).json({ message: 'Token has been revoked' });
    }
    if (!userInfo) {
      return res.status(404).json({ message: "incorrect email address" });
    }
    if (!bcrypt.compareSync(req.body.password, userInfo.password)) {
      return res.status(404).json({ message: "incorrect password" });
    }
    const token = generateSign(userInfo._id, userInfo.email);

    return res.status(200).json({ user: userInfo, token: token });
  } catch (error) {
    return res.status(500).json(error);
  }
};
const logout = async (req, res) => {

  try {
    const token = req.headers.authorization.split(' ')[1];
    
    if (!token) {
      return res.status(400).json({ message: 'Token missing' });
    }

    const revokedToken = new RevokedToken({ token: token, expiresAt: Date.now() + tokenExpiryTime });
    await revokedToken.save();

    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error logging out', error });
  }
};

module.exports = {register, login, logout}