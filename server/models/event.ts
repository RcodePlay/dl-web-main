import mongoose, { Document } from 'mongoose';

interface EventDocument extends Document {
  title: string;
  content: string;
  createdAt: Date;
  type: string;
}

//defining scheme for events
const eventSchema = new mongoose.Schema<EventDocument>({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  type: String,
});

const Event = mongoose.model('Event', eventSchema, 'events');
export default Event;
