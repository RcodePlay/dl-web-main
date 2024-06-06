import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Event from '../models/event.ts';
import EventDocument from '../models/event.ts';

dotenv.config();

const db = process.env.DB as string;
mongoose.set('strictQuery', false);

if (!db) {
  throw new Error('Database connection string is not defined in env variables');
}

mongoose
  .connect(db, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log('[server/log]: Connected to the database');
  })
  .catch((err) => {
    console.error('[server/log]: Database connection error:', err);
  });

export const getItem = async (id: any) => {
  try {
    const event = await Event.findById(id);
    return event;
  } catch (err) {
    console.log('[server/error]:' + err);
  }
};

export const listItems = async (): Promise<any> => {
  try {
    const events = await Event.find().sort({ createdAt: -1 }).exec();
    return events;
  } catch (err) {
    console.log('[server/error]:' + err);
    throw err;
  }
};

export const editItem = async (
  id: any,
  data: { title: any; content: any; type: any }
) => {
  try {
    const { title, content, type } = data;
    const updatedEvent = await Event.findByIdAndUpdate(id, {
      title,
      content,
      type,
    });
    await console.log('[server/log]: Updated an event.');
    return updatedEvent;
  } catch (err) {
    console.log('[server/error]:' + err);
    throw err;
  }
};

export const addItem = async (newEvent: {
  title: string;
  content: string;
  type: string;
}) => {
  try {
    const event = new Event({
      ...newEvent,
      createdAt: new Date(),
    });

    await event.save();

    await console.log('[server/log]: Added new event');
    return event;
  } catch (error) {
    console.log('[server/error]:' + error);
    throw error;
  }
};

export const deleteItem = async (id: any) => {
  try {
    if (!id) {
      console.log('Event ID not recieved');
    }

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      console.log('Event not deleted');
    }
    await console.log('[server/log]: Deleted an event');
    return deletedEvent;
  } catch (error) {
    console.log('[server/error]:' + error);
    throw error;
  }
};
