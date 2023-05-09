const express = require('express');
const UserModel = require('../../models/UserModel');

const router = express.Router();

module.exports = () => {
  router.get('/registration', (req, res) => res.render('users/registration', { success: req.query.success }));

  router.post('/registration', async(req, res, next) => {
    const { username, email, password } = req.body;
    try {
      const user = new UserModel({
        username,
        email,
        password
      })
      const savedUser = await user.save();
      if (savedUser) return res.redirect('/user/registration?success=true')
    } catch (error) {
      
    }
  })

  router.get('/account', (req, res) => res.render('users/account', { user: req.user }));

  return router;
};
