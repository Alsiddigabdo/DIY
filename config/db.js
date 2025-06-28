const mysql = require('mysql2');
const util = require('util');

const db = mysql.createConnection({
  host: process.env.DB_HOST || '89.163.214.37',
  user: process.env.DB_USER || 'amlhabra_brak',
  password: process.env.DB_PASSWORD || 'hSgMaUAGjPdGa7ZfRM6T',
  database: process.env.DB_NAME || 'amlhabra_brak',
  port: process.env.DB_PORT || 3306,
  connectTimeout: 30000,
  charset: 'utf8mb4'
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
    console.log('تم فقدان الاتصال بقاعدة البيانات. محاولة إعادة الاتصال...');
  } else {
    throw err;
  }
});

db.query = util.promisify(db.query);
module.exports = db;
