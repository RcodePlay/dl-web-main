import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//defining scheme for events
const eventSchema = new Schema({
  title: String,
  content: String,
  num: Number,
  dataString: String,
});

module.exports = mongoose.model('event', eventSchema, 'articles');
