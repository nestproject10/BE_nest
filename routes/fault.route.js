const express = require('express');//ייבוא אקספרס

const faultController = require('../controllers/fault.controller') // ייבוא של קונטרולר תקלות 
const router = express.Router(); // יצירת אובייקט של רוטר עם אקספרס

router.post('/fault', faultController.createFault); // בקשת פוסט ליצירת תקלה 
router.get('/fault/:tenantId', faultController.getFaults);  // בקשת גט לקבלת תקלות עבור דייר לפי מזהה דייר
module.exports = router; // ייצוא הראוטר על מנת שיהיה ניתן להשתמש בו במודולים אחרים