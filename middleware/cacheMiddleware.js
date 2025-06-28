// middleware للتخزين المؤقت
const cacheMiddleware = (duration = 300) => {
  return (req, res, next) => {
    // تجاهل التخزين المؤقت في بيئة التطوير
    if (process.env.NODE_ENV === 'development') {
      return next();
    }

    // إضافة headers للتخزين المؤقت
    res.set('Cache-Control', `public, max-age=${duration}`);
    next();
  };
};

// middleware للتخزين المؤقت للملفات الثابتة
const staticCacheMiddleware = (req, res, next) => {
  // تجاهل التخزين المؤقت في بيئة التطوير
  if (process.env.NODE_ENV === 'development') {
    return next();
  }

  // تطبيق التخزين المؤقت على الملفات الثابتة
  if (req.path.match(/\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
    res.set('Cache-Control', 'public, max-age=31536000'); // سنة واحدة
  } else {
    res.set('Cache-Control', 'public, max-age=3600'); // ساعة واحدة
  }
  
  next();
};

module.exports = {
  cacheMiddleware,
  staticCacheMiddleware
}; 