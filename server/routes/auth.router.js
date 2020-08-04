const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const dcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = Router();

// Registration
router.post(
  "/signup",
  [
    check("name", "Вы ввели неправильное имя").isLength({
      min: 6,
      max: 20,
    }),
    check("phone", "Неправильный формат телефона").isLength({
      min: 10,
      max: 20,
    }),
    check("password", "Неправильный пароль").isLength({
      min: 6,
      max: 15,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      console.log(req.body);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message:
            "Одно или несколько полей при регистрации заполенны неправильно, попробуйте еще раз",
        });
      }
      const { name, phone, password } = req.body;

      const pretendent = await User.findOne({ name });
      if (pretendent) {
        return res.status(400).json({
          message: "Пользователь с таким именем уже существует",
        });
      }
      const cachedPassword = await dcrypt.hash(password, 12);
      const user = new User({
        name: name,
        phone: phone,
        password: cachedPassword,
      });

      await user.save();

      return res.status(200).json({
        message: "Пользователь успешно зарегистрирован",
      });
    } catch (e) {
      return res.status(500).json({
        message: "Что-то пошло не так, попробуйте еще раз",
      });
    }
  }
);

// Login
router.post(
  "/signin",
  [
    check("name", "Неправильно введено имя").isLength({ min: 6, max: 20 }),
    check("password", "Неправильно введен пароль").isLength({
      min: 6,
      max: 15,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      console.log(req.body);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message:
            "Одно или несколько полей при регистрации заполенны неправильно, попробуйте еще раз",
        });
      }
      const { name, password } = req.body;
      const pretendent = await User.findOne({ name });
      if (!pretendent) {
        return res.status(400).json({
          message: "Пользователь с данным именем не найдет, попробуйте еще раз",
        });
      }
      const comparedPass = dcrypt.compare(pretendent.password, password);
      if (!comparedPass) {
        return res.status(400).json({
          message: "Неправильно введен пароль, попробуйте еще раз",
        });
      }
      const token = jwt.sign(
        {
          userId: pretendent._id,
        },
        process.env.tokenCode
      );
      return res.status(200).json({
        message: "Вы успешно вошли",
        token: token,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Что-то пошло не так, попробуйте еще раз",
      });
    }
  }
);

module.exports = router;
