const mongoose = require('mongoose'); // ייבוא ספריית mongoose לניהול מסדי נתונים של MongoDB

// הגדרת הסכימה של המשתמש (User)
const userSchema = mongoose.Schema(
  {
    // שם 
    name: {
      type: String, // סוג השדה הוא מחרוזת
      required: true,  // השדה חובה
      trim: true,
    },

    // כתובת הדוא"ל של המשתמש
    email: {
      type: String,
      required: true,  // השדה חובה
      unique: true, // הכתובת חייבת להיות ייחודית
      trim: true, 
      lowercase: true, // המרה לאותיות קטנות
  
    },
    // סיסמת המשתמש
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 1, // אורך מינימלי של הסיסמה
   
      private: true, // used by the toJSON plugin
    },

    // תפקיד המשתמש
    role: {
      type: String,
      enum: ['HomeOwner','Tenant'], // הערכים המותרים לשדה הם 'HomeOwner' או 'Tenant'
      default: 'Tenant', // ערך ברירת המחדל הוא 'Tenant'
    },
  
  },
  {
    timestamps: true, // יצירת שדות תאריך יצירה ועדכון אוטומטיים
  }
);

/**
 * @typedef User
 */

// יצירת מודל יוזר מתוך הסכימה userSchema
const User = mongoose.model('User', userSchema);

// ייצוא המודל יוזר לשימוש במודולים אחרים
module.exports = User;