const model = require('./models/sakemodel')
const Sake = model.Sake
const SakeType = model.SakeType
const Temperature = model.Temperature

Sake.update(
    { brand: '죠우키겐' },
    { $push: { impressions: { temperature: 1, impression: '뜨거워 얼얼하다' } } },
    function(err) {
      if (err) throw err;
    }
  );
  