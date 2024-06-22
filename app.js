const express = require('express'); // ייבוא של ספריית אקספרס שמאפשרת יצירת שרת
const mongoose = require('mongoose') // ייבוא של ספריית Mongoose לניהול מסד נתונים MongoDB
const userRoutes = require('./routes/user.route') // 
const authRoutes = require('./routes/auth.route') //
const assetRoutes = require('./routes/asset.route') //
const faultRoutes = require('./routes/fault.route') // 
var bodyParser = require('body-parser')  // ייבוא של ספריית body-parser לניהול גוף הבקשות בפורמט JSON
require('dotenv').config();

const app = express(); // יצירת אובייקט של האפליקציה באמצעות אקספרס
var jsonParser = bodyParser.json()
const mongoConnect=async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI) // חיבור למסד נתונים MongoDB  
        console.log('mongo is connected successfully') // הדפסת הודעה בהצלחת החיבור למסד הנתונים
    }catch(error){
        console.log(error) // הדפסת שגיאה במידה והחיבור למסד הנתונים נכשל
    }
}

mongoConnect(); // קריאה לפונקציה המבצעת את החיבור למסד הנתונים

// קביעת תגובות CORS להגבלת גישה ממקורות שונים והתמיכה בשיטות HTTP שונות
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(jsonParser); // השתמשות ב-jsonParser עבור כל בקשה
app.use(userRoutes);
app.use(authRoutes);
app.use(assetRoutes);
app.use(faultRoutes);

// Start the server
const PORT = process.env.PORT || 3000; // הפעלת השרת והאזנה ליצירת בקשות בפורט שמוגדר בקובץ הגדרות הסביבה או בפורט 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});