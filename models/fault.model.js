const mongoose = require('mongoose'); // ייבוא ספריית mongoose לניהול מסדי נתונים של MongoDB

// הגדרת הסכימה של התקלה (Fault)
const faultSchema = mongoose.Schema(
  {
    // סוג התקלה
    Type: {
      type: String, // סוג השדה הוא מחרוזת
      trim: true, // הסרת רווחים
    },
    // תאריך הדיווח על התקלה
    Date: {
      type: String,
      trim: true,
    },

    // סטטוס התקלה
    status: {
      type: String,
      trim: true,
    },

    // מזהה הדייר שהגיש את התקלה
    tenantId: {
      type: String, 
    },
  },
  {
    timestamps: true, // יצירת שדות תאריך יצירה ועדכון אוטומטיים
  }
);

/**
 * @typedef Fault
 */
// יצירת מודל פולט מתוך הסכימה faultSchema
const Fault = mongoose.model('Fault', faultSchema);

// ייצוא המודל פולטס לשימוש במודולים אחרים
module.exports = Fault;