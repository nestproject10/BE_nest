const mongoose = require('mongoose'); // ייבוא ספריית mongoose לניהול מסדי נתונים של MongoDB

// הגדרת הסכימה של הנכסים (Asset)
const assetSchema = mongoose.Schema(
  {
    // כתובת הנכס
    address: {  
      type: String, // סוג השדה הוא מחרוזת
      required: true, // השדה חובה
      trim: true, // הסרת רווחים מיותרים בתחילת ובסוף המחרוזת
    },
    // תאריך רישום הנכס
    listingDate: { 
      type: String, // סוג השדה הוא מחרוזת
      trim: true, // הסרת רווחים
    },
    // האם הנכס מאוכלס
    isFull: {
      type: Boolean,  // סוג השדה הוא בוליאני (אמת/שקר)
      default: false,  // ערך ברירת המחדל הוא לא מאוכלס)
    },
    // מזהה הבעלים של הנכס
    ownerId: {
      type: String, // סוג השדה הוא מחרוזת
    },
    // כתובת הדוא"ל-שםמשתמש של השוכר
    tenantEmail: {
        type: String, // סוג השדה הוא מחרוזת
      },
    // שם השוכר
    tenantName: {
    type: String, // סוג השדה הוא מחרוזת
    },
    // מחיר הנכס
    price: {
    type: String, // סוג השדה הוא מחרוזת
    },
  },
  {
    timestamps: true, // יצירת שדות תאריך יצירה ועדכון אוטומטיים
  }
);

/**
 * @typedef Asset
 */

// יצירת מודל אססט מתוך הסכימה 
const Asset = mongoose.model('Asset', assetSchema);

// ייצוא המודל לשימוש במודולים אחרים
module.exports = Asset;