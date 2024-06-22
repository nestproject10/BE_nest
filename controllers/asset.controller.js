const httpStatus = require('http-status');// ייבוא המודול 'http-status' לניהול קודי סטטוס HTTP
const catchAsync = require('../utils/helpers'); // ייבוא הפונקציה מהקובץ הלפרס לטיפול בשגיאות אסינכרוניות
const assetService = require('../services/asset.service'); // ייבוא השירות 'assetService' לניהול נכסים

// פונקציה ליצירת נכס חדש
const createAsset = catchAsync(async (req, res) => {
    const asset = await assetService.createAsset(req.body); // קריאה לשירות 'createAsset' עם הגוף של הבקשה
    res.status(httpStatus.CREATED).send(asset); // החזרת הנכס שנוצר
  });


// פונקציה לקבלת נכס לפי מזהה בעלים 
const getAssetsByOwner = catchAsync(async (req, res) => {
const asset = await assetService.getAssetByOwnerId(req.params.ownerId); // קריאה לשירות 'getAssetByOwnerId' עם מזהה הבעלים מהנתיב
if (!asset) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Asset not found'); // אם הנכס לא נמצא, מושלך שגיאה עם סטטוס 404
}
res.send(asset);
});

// פונקציה לקבלת נכס לפי דייר
const getAssetsByTenant = catchAsync(async (req, res) => {
    console.log(req.params.tenantEmail) // הדפסת דוא"ל הדייר מהבקשה לצורך בדיקה
    const asset = await assetService.getAssetByTenantEmail(req.params.tenantEmail);// קריאה לשירות 'getAssetByTenantEmail' עם דוא"ל הדייר מהנתיב
    console.log(asset) // הדפסת הנכס שנמצא לצורכי בדיקה
    if (!asset) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Asset not found'); // אם הנכס לא נמצא- שגיאה   
    }
    res.send(asset); // החזרת הנכס אם נמצא
    });


// ייצוא כאובייקט את הפונקציות המוגדרות לשימוש במודולים אחרים
module.exports = {
    createAsset,
    getAssetsByOwner,
    getAssetsByTenant
  };