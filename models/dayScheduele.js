const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose

const DaySchema = new Schema({
  date: {type: Date},
  name: Array,
  userId: {type:Schema.Types.ObjectId, ref:"User"}
})

const Day = mongoose.model('Day', DaySchema)

module.exports = Day;
