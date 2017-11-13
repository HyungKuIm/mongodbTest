var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

// 스키마
var SakeType = new Schema({
  _id: Number,
  type: String
});

var Temperature = new Schema({
  _id: Number,
  temperature: String
});

var Sake = new Schema({
  brand: String,
  type: { type: Number, ref: 'SakeType' },
  impressions: [{
    temperature: { type: Number, ref: 'Temperature' },
    impression: String
  }]
});

// MongoDB로 접속
mongoose.connect('mongodb://localhost:27017/sake');

// 스키마로부터 모델을 컴파일해서, 모델을 엑스포트
exports.Temperature = mongoose.model('Temperature', Temperature);
exports.SakeType = mongoose.model('SakeType', SakeType);
exports.Sake = mongoose.model('Sake', Sake);