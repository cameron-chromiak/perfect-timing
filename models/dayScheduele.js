const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose

const DaySchema = new Schema({
  date: {type: Date},
  row: [],
  rawHTML: {type: String}
})

mongoose.model('day', DaySchema)
