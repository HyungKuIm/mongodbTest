const model = require('./models/sakemodel')
const Sake = model.Sake
const SakeType = model.SakeType
const Temperature = model.Temperature

Sake.findOne({ type: 9 }, function(err, result) {
    if (err) throw err;
    console.log(result.brand);  // 등록순으로 '카모시비토쿠헤이지'가 출력됨
    console.log(result.type);   // '9'가 출력됨
  });
  