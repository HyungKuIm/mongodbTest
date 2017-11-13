const model = require('./models/sakemodel')
const Sake = model.Sake
const SakeType = model.SakeType
const Temperature = model.Temperature

Sake.update(
    { brand: '카모시비토쿠헤이지' },
    { $set: { brand: '닷사이' } },
    function(err) {
      if (err) throw err;
    }
  );
  