const express = require("express");
const userController = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/login", userController.userLogin);

module.exports = userRouter;