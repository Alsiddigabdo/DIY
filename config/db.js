const mysql = require('mysql2');
const util = require('util');

const db = mysql.createConnection({
  host: '89.163.214.37',
  user: 'amlhabra_brak',
  password: 'hSgMaUAGjPdGa7ZfRM6T',
  database: 'amlhabra_brak',
  port: 3306,
  connectTimeout: 30000, // مدعوم ✅
  charset: 'utf8mb4'      // مدعوم ✅
  // ❌ تم حذف:
  // acquireTimeout
  // timeout
  // reconnect
});

db.connect((err) => {
  if (err) {
    console.error("❌ لم يتم الاتصال بقاعدة البيانات:", err.message);
    console.error("تفاصيل الخطأ:", err);
    return;
  }
  console.log("✅ تم الاتصال بقاعدة البيانات بنجاح");
});

db.on('error', (err) => {
  console.error('خطأ في قاعدة البيانات:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.log('📡 فقد الاتصال بقاعدة البيانات. حاول إعادة التشغيل.');
  } else {
    throw err;
  }
});

db.query = util.promisify(db.query);
module.exports = db;
