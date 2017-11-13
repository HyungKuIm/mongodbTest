const model = require('./models/sakemodel')
const Sake = model.Sake
const SakeType = model.SakeType
const Temperature = model.Temperature

//도큐먼트 저장
var jokigen = new Sake({
    brand: '죠우키겐',
    type: 9,
    impressions: [
      { temperature: 7, impression: '과일맛이 남' },
      { temperature: 9, impression: '신선한 맛이 남' }
    ]
  });
  
  jokigen.save(function(err) {
    if (err) throw err;
  });

  