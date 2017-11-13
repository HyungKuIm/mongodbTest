const model = require('./models/sakemodel')
const Sake = model.Sake
const SakeType = model.SakeType
const Temperature = model.Temperature


// 도큐먼트 작성
var kuheiji = new Sake({
    brand: '카모시비토쿠헤이지',
    type: 9,
    impressions: [
      { temperature: 7, impression: '정말 맛있음' },
      { temperature: 10, impression: '최고로 맛있음' }
    ]
  });
  
  // 도큐먼트 저장
  kuheiji.save(function(err) {
    if (err) throw err;
  });

  