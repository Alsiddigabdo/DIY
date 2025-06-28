# اعملها براك - منصة المبدعين العرب

## 🎨 وصف المشروع

منصة اعملها براك هي مجتمع إبداعي عربي متكامل للمصممين والمبدعين، تهدف إلى ربط المواهب العربية وتوفير مساحة للتعاون وتبادل الخبرات في مجال التصميم والإبداع.

## ✨ الميزات الرئيسية

### 🏠 المنتدى الرئيسي
- **مناقشات تفاعلية:** مشاركة الأفكار والخبرات في مجال التصميم
- **نظام التعليقات والإعجابات:** تفاعل مباشر مع المحتوى
- **تصنيفات ووسوم:** تنظيم المحتوى حسب التخصصات
- **نظام الإبلاغ:** حماية المجتمع من المحتوى غير اللائق

### 👤 الملفات الشخصية
- **معرض أعمال:** رفع وعرض التصاميم مع العناوين والوصف
- **معلومات شاملة:** العمر، الجنس، البلد، المهنة، المهارات
- **اقتباس شخصي:** إضافة اقتباس يعبر عن فلسفة التصميم
- **إحصائيات تفاعلية:** عدد الإعجابات، المستوى، المشاركات

### 🤝 نظام الصداقة
- **إرسال طلبات صداقة:** بناء شبكة علاقات مهنية
- **إدارة العلاقات:** قبول، رفض، إلغاء طلبات الصداقة
- **حالة العلاقة:** عرض واضح لحالة الصداقة

### ❤️ نظام الإعجابات
- **إعجاب بالمستخدمين:** دعم وتشجيع المواهب
- **تأثير على المستوى:** زيادة المستوى بناءً على الإعجابات
- **إحصائيات مباشرة:** عرض عدد الإعجابات في الوقت الفعلي

### 🔔 نظام الإشعارات
- **تنبيهات فورية:** عند استقبال طلب صداقة، إعجاب، تعليق، أو رسالة جديدة
- **إدارة الإشعارات:** عرض جميع الإشعارات مع إمكانية تمييزها كمقروءة
- **تنبيهات صوتية:** عند استقبال رسائل جديدة

### 💼 نظام المشاريع والوظائف
- **إنشاء مشاريع:** نشر فرص العمل والمشاريع
- **التقديم على المشاريع:** إرسال طلبات المشاركة
- **إدارة الطلبات:** مراجعة وقبول المتقدمين
- **لوحة تحكم المشاريع:** متابعة حالة المشاريع

### 🛍️ نظام المتاجر
- **طلب إنشاء متجر:** إمكانية إنشاء متجر شخصي
- **إدارة المنتجات:** رفع وإدارة منتجات التصميم
- **لوحة تحكم المتجر:** إحصائيات وإدارة الطلبات
- **مراجعة الطلبات:** إدارة طلبات إنشاء المتاجر

### 👨‍💼 لوحة الإدارة
- **إدارة شاملة للموقع:** إدارة المستخدمين، الإشعارات، المشاركات، الإحصائيات، إعدادات المنتدى، الصلاحيات والأدوار
- **مراجعة طلبات المتاجر:** قبول أو رفض طلبات إنشاء المتاجر

### 💬 نظام المحادثات الفورية
- **محادثات بين المستخدمين:** إرسال واستقبال الرسائل الفورية، دعم الصور والملفات
- **تنبيهات صوتية وفورية عند استقبال رسالة جديدة**

## 🛠️ التقنيات المستخدمة

### Backend
- **Node.js** - بيئة تشغيل JavaScript
- **Express.js** - إطار عمل الويب
- **MySQL** - قاعدة البيانات الرئيسية
- **JWT + Sessions** - نظام المصادقة والتحقق
- **Cloudinary** - رفع الملفات والصور (سحابي)
- **Socket.io** - المحادثات الفورية
- **Winston** - تسجيل الأخطاء والسجلات
- **Cron Jobs** - المهام المجدولة

### Frontend
- **EJS Templates** - صفحات ديناميكية
- **CSS3** - تصميم متجاوب وجذاب
- **JavaScript (ES6+)** - تفاعلات المستخدم، AJAX
- **Font Awesome** - الأيقونات

### Real-time Features
- **Socket.io** - تنبيهات ومحادثات فورية
- **WebSockets** - اتصال ثنائي الاتجاه

### Security
- **Helmet** - حماية التطبيق
- **CORS** - إدارة الطلبات المتقاطعة
- **Rate Limiting** - حماية من الهجمات
- **Input Validation** - التحقق من المدخلات

## 📦 التثبيت والتشغيل

### المتطلبات
- Node.js (v18 أو أحدث)
- MySQL (v8.0 أو أحدث)
- npm أو yarn
- حساب Cloudinary (لرفع الصور)

### خطوات التثبيت

1. **استنساخ المشروع**
```bash
git clone https://github.com/Alsiddigabdo/DIY.git
cd DIY
```

2. **تثبيت التبعيات**
```bash
npm install
```

3. **إعداد متغيرات البيئة**
```bash
# انسخ ملف .env.example إلى .env
cp .env.example .env

# عدل المتغيرات في ملف .env
DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name

CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

SESSION_SECRET=your-super-secret-session-key
```

4. **إعداد قاعدة البيانات**
```bash
# إنشاء قاعدة البيانات
mysql -u root -p
CREATE DATABASE your_database_name;
USE your_database_name;

# استيراد هيكل قاعدة البيانات
mysql -u root -p your_database_name < Schema.sql
```

5. **تشغيل التطبيق**
```bash
# للتطوير
npm run dev

# للإنتاج
npm start
```

6. **الوصول للتطبيق**
```
http://localhost:3000
```

## 🚀 النشر على Vercel

### إعداد Vercel

1. **إنشاء حساب على Vercel**
```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login
```

2. **إعداد متغيرات البيئة في Vercel**
```bash
# إضافة متغيرات البيئة
vercel env add DB_HOST
vercel env add DB_USER
vercel env add DB_PASSWORD
vercel env add DB_NAME
vercel env add CLOUDINARY_CLOUD_NAME
vercel env add CLOUDINARY_API_KEY
vercel env add CLOUDINARY_API_SECRET
vercel env add SESSION_SECRET
```

3. **النشر**
```bash
# النشر الأولي
vercel

# النشر للإنتاج
vercel --prod
```

### إعدادات Vercel المطلوبة

**متغيرات البيئة:**
```env
DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
DB_PORT=3306

CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

SESSION_SECRET=your-super-secret-session-key
NODE_ENV=production
```

**ملاحظات مهمة:**
- تأكد من أن قاعدة البيانات متاحة من الإنترنت
- استخدم Cloudinary لرفع الصور (لا يمكن استخدام التخزين المحلي في Vercel)
- تأكد من إعداد جميع متغيرات البيئة المطلوبة

## 🗂️ هيكل المشروع

```
DIY/
├── auth/                 # ملفات المصادقة
├── config/              # إعدادات التطبيق
│   ├── db.js           # إعدادات قاعدة البيانات
│   ├── cloudinary.js   # إعدادات Cloudinary
│   └── logger.js       # إعدادات التسجيل
├── controllers/         # منطق التحكم
├── middleware/          # البرامج الوسيطة
│   ├── cacheMiddleware.js # التخزين المؤقت
│   └── errorHandler.js    # معالجة الأخطاء
├── models/             # نماذج قاعدة البيانات
├── public/             # الملفات الثابتة
│   ├── css/           # ملفات التصميم
│   ├── js/            # ملفات JavaScript
│   └── images/        # الصور
├── router/             # مسارات التطبيق
├── views/              # قوالب الصفحات
│   ├── admin/         # صفحات الإدارة
│   └── partials/      # الأجزاء المشتركة
├── app.js             # ملف التوافق مع Vercel
├── index.js           # نقطة البداية
├── package.json       # تبعيات المشروع
├── vercel.json        # إعدادات Vercel
└── README.md          # هذا الملف
```

## 🔧 الإعدادات

### متغيرات البيئة
```env
# إعدادات قاعدة البيانات
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=3306

# إعدادات Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# إعدادات الجلسة
SESSION_SECRET=your-super-secret-session-key

# إعدادات البيئة
NODE_ENV=production
PORT=3000
```

### إعدادات قاعدة البيانات
- **Host:** 89.163.214.37 (أو عنوان قاعدة البيانات الخاصة بك)
- **Database:** amlhabra_brak (أو اسم قاعدة البيانات الخاصة بك)
- **Port:** 3306
- **Charset:** utf8mb4

## 🚀 النشر على منصات أخرى

### على Heroku
```bash
# إنشاء تطبيق Heroku
heroku create your-app-name

# إضافة متغيرات البيئة
heroku config:set NODE_ENV=production
heroku config:set DB_HOST=your-database-host
heroku config:set DB_USER=your-database-user
heroku config:set DB_PASSWORD=your-database-password
heroku config:set DB_NAME=your-database-name
heroku config:set CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
heroku config:set CLOUDINARY_API_KEY=your-cloudinary-api-key
heroku config:set CLOUDINARY_API_SECRET=your-cloudinary-api-secret
heroku config:set SESSION_SECRET=your-session-secret

# النشر
git push heroku main
```

### على Railway
```bash
# تثبيت Railway CLI
npm i -g @railway/cli

# تسجيل الدخول
railway login

# إنشاء مشروع جديد
railway init

# إضافة متغيرات البيئة
railway variables set NODE_ENV=production
railway variables set DB_HOST=your-database-host
railway variables set DB_USER=your-database-user
railway variables set DB_PASSWORD=your-database-password
railway variables set DB_NAME=your-database-name
railway variables set CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
railway variables set CLOUDINARY_API_KEY=your-cloudinary-api-key
railway variables set CLOUDINARY_API_SECRET=your-cloudinary-api-secret
railway variables set SESSION_SECRET=your-session-secret

# النشر
railway up
```

## 🤝 المساهمة

نرحب بمساهماتكم! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. إنشاء فرع جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## 📄 الرخصة

هذا المشروع مرخص تحت رخصة ISC.

## 📞 الدعم

- **البريد الإلكتروني:** support@aemelhabarak.com
- **الموقع الإلكتروني:** https://aemelhabarak.com
- **GitHub Issues:** للإبلاغ عن الأخطاء والاقتراحات

## 🙏 الشكر

شكر خاص لجميع المساهمين والمطورين الذين ساعدوا في تطوير هذه المنصة.

---

**اعملها براك** - مجتمع المبدعين العرب للتصنيع الذاتي والإبداع 🎨✨