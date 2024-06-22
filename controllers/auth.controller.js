const httpStatus = require('http-status');
const catchAsync = require('../utils/helpers'); // ייבוא הפונקציה מהקובץ הלפרס לטיפול בשגיאות אסינכרוניות
const User = require('../models/user.model'); // ייבוא המודל יוזר לניהול משתמשים ממסד הנתונים

// פונקציה לטיפול בתהליך ההתחברות של משתמש
const login = catchAsync(async (req, res) => {
    const email = req.body.email; // שליפת האימייל-(שם משתמש) מגוף הבקשה
    const user = await User.findOne({email}) // חיפוש המשתמש במסד הנתונים לפי האימייל
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');  // אם המשתמש לא נמצא, זריקת שגיאה עם סטטוס 404 (לא נמצא)

      }
    res.status(httpStatus.OK).send(user); // אם המשתמש נמצא, החזרת המשתמש עם סטטוס 200 (OK)

  });

// ייצוא הפונקציה לוגין לשימוש במודולים אחרים  
module.exports = {
    login
  };