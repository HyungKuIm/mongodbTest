const model = require('./models/sakemodel')
const Sake = model.Sake
const SakeType = model.SakeType
const Temperature = model.Temperature

Sake.remove({ brand: '닷사이' }, function(err) {
    if (err) throw err;
  });
  