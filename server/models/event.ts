import mongoose, { Document } from 'mongoose';

interface EventDocument extends Document {
  title: string;
  content: string;
  num: number;
  dataString: string;
}

//defining scheme for events
const eventSchema = new mongoose.Schema<EventDocument>({
  title: String,
  content: String,
  num: Number,
  dataString: String,
});

export default mongoose.model('event', eventSchema, 'articles');
