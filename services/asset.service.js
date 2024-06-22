const Asset = require('../models/asset.model'); // ייבוא המודל של הנכסים


/**
 * Create a user
 * @param {Object} assetrBody - גוף הנכס שמתקבל ליצירתו
 * @returns {Promise<User>}  - מחזיר פרומיס שמתאים לאובייקט הנכס שנוצר
 */
const createAsset = async (assetBody) => {
    console.log(assetBody)
    return Asset.create(assetBody); // יצירת הנכס באמצעות מודל Asset
  };

const getAssetByOwnerId = async (id) => {
return Asset.find({ownerId:id}); // מחפש נכסים לפי זיהוי בעל הנכס
};

const getAssetByTenantEmail = async (tenantEmail) => {
    return Asset.find({tenantEmail:tenantEmail}); // מחפש נכסים לפי כתובת מייל של הדייר
    };

    
// ייצוא הפונקציות המוגדרות לשימוש במודולים אחרים
module.exports = {
createAsset,
getAssetByOwnerId,
getAssetByTenantEmail
};