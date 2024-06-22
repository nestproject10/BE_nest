const httpStatus = require('http-status');
const catchAsync = require('../utils/helpers'); // ייבוא הפונקציה מהקובץ הלפרס לטיפול בשגיאות אסינכרוניות
const faultService = require('../services/fault.service'); // ייבוא השירות תקלות לניהול תקלות

// פונקציה ליצירת תקלה חדשה
const createFault = catchAsync(async (req, res) => {
    const fault = await faultService.createFault(req.body); // קריאה לשירות 'createFault' עם הגוף של הבקשה
    res.status(httpStatus.CREATED).send(fault); // החזרת תשובה עם סטטוס יצירה מוצלחת (201) והתקלה שנוצרה
  });

// פונקציה לקבלת תקלות לפי מזהה דייר  
const getFaults = catchAsync(async (req, res) => {
const fault = await faultService.getFaultBytenantId(req.params.tenantId); // קריאה לשירות 'getFaultBytenantId' עם מזהה הדייר מהנתיב
if (!fault) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Fault not found'); // אם התקלה לא נמצאה, מושלך שגיאה עם סטטוס 404 (Not Found)
}
res.send(fault); // החזרת התקלה אם נמצאה
});


// ייצוא הפונקציות המוגדרות לשימוש במודולים אחרים
module.exports = {
    createFault,
    getFaults,
  };