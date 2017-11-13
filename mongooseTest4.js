const model = require('./models/sakemodel')
const Sake = model.Sake
const SakeType = model.SakeType
const Temperature = model.Temperature

Sake.find({ brand: '카모시비토쿠헤이지' }, function(err, result) {
    if (err) throw err;
    console.log(result[0].brand);  // '카모시비토쿠헤이지'가 출력됨
    console.log(result[0].type);  //9
  });
  