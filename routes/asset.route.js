const express = require('express'); //ייבוא אקספרס
const assetController = require('../controllers/asset.controller') // ייבוא של קונטרולר נכסים   
const router = express.Router(); // יצירת אובייקט של רוטר עם אקספרס

router.post('/asset', assetController.createAsset); // בקשת פוסט ליצירת נכס חדש
router.get('/asset/:ownerId', assetController.getAssetsByOwner); // בקשת גט לקבלת נכסים לפי בעלים לפי מזהה  בעל הנכס
router.get('/asset-tenant/:tenantEmail', assetController.getAssetsByTenant); // בקשת גט לקבלת נכסים לפי מייל  דייר

module.exports = router;// ייצוא הרוטר עבור שימוש במודולים אחרים
