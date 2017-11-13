const model = require('./models/sakemodel')
const Sake = model.Sake
const SakeType = model.SakeType
const Temperature = model.Temperature

Sake.find({ brand: '카모시비토쿠헤이지' })
.populate('type impressions.temperature')
.exec(function(err, result) {
  if (err) throw err;
  console.log(result[0].type.type);  // '쥰마이대깅죠우주'가 출렫됨
  console.log(result[0].impressions[0].temperature.temperature);  // '상온'이 출력됨
});
  