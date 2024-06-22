const httpStatus = require('http-status');
const catchAsync = require('../utils/helpers'); // ייבוא הפונקציה מהקובץ הלפרס לטיפול בשגיאות אסינכרוניות
const userService = require('../services/user.service'); // ייבוא השירות 'userService' לניהול משתמשים

// פונקציה ליצירת משתמש חדש
const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body); // קריאה לשירות 'createUser' עם הנתונים מגוף הבקשה
  res.status(httpStatus.CREATED).send(user); // החזרת תשובה עם סטטוס יצירה מוצלחת (201) והמשתמש שנוצר
});


// פונקציה לקבלת משתמש לפי מזהה משתמש
const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId); // קריאה לשירות 'getUserById' עם מזהה המשתמש מהנתיב
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found'); // אם המשתמש לא נמצא, מושלך שגיאה עם סטטוס 404 (Not Found)
  }
  res.send(user); // החזרת המשתמש אם נמצא
});


// ייצוא הפונקציות המוגדרות לשימוש במודולים אחרים
module.exports = {
    createUser,
    getUser
  };
