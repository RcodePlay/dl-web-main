import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Event from '../models/event';

dotenv.config();

const db = process.env.DB as string;
mongoose.set('strictQuery', false);
mongoose.connect(db);

export const getItem = async (id) => {
  try {
    const event = await Event.findById(id);
    return event;
  } catch (err) {
    console.log(err);
  }
};

export const listItems = () => {
  try {
    const events = Event.find()
      .sort({ num: -1 })
      .exec((err, events) => {
        if (err) {
          console.log(err);
        } else {
          return events;
        }
      });
  } catch (err) {
    console.log(err);
  }
};

export const editItem = async (id, data) => {
  try {
    const { title, content, num } = data;
    const updatedArticle = await Event.findByIdAndUpdate(id, {
      title,
      content,
      num,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addItem = async (data) => {
  try {
    const { title, content } = data;
    if (!title || !content) {
      console.log('Title and contet are required fields!');
    }

    Event.findOne()
      .sort({ num: -1 })
      .exec(async (err, latestEvent) => {
        if (err) {
          console.log(err);
        } else {
          let latestNum = latestEvent.num;
          console.log(latestEvent.num);
          let newNum = latestNum + 1;
          console.log(newNum);

          const event = new Event({
            title: data.title,
            content: data.content,
            num: newNum,
          });
          const newEvent = await event.save();
          console.log(newEvent);
          return newEvent;
        }
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = async (id) => {
  try {
    if (!id) {
      console.log('Event ID not recieved');
    }

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      console.log('Event not deleted');
    }

    return 'event removed successfully';
  } catch (error) {
    console.log(error);
  }
};
