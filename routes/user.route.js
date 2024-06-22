const express = require('express');//ייבוא אקספרס
 
const userController = require('../controllers/user.controller') // ייבוא של קונטרולר משתמש 
const router = express.Router(); // יצירת אובייקט של רוטר עם אקספרס

router
  .route('/user')
  .post(userController.createUser) // בקשת פוסט ליצירת משתמש חדש


router
  .route('/user/:userId')
  .get(userController.getUser) // בקשת גט לקבלת משתמש לפי מזהה משתמש


module.exports = router; // ייצוא הרוטר על מנת שיהיה ניתן להשתמש בו במודולים אחרים