const express = require('express'); //ייבוא אקספרס

const authController = require('../controllers/auth.controller') // ייבוא של קונטרולר אותנטיקציה 
const router = express.Router(); // יצירת אובייקט של רוטר עם אקספרס

router.post('/login', authController.login); // בקשת פוסט של לוגין
module.exports = router; // ייצוא הרוטר על מנת שיהיה ניתן להשתמש בו במודולים אחרים