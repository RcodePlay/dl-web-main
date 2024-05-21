import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = process.env.DB;
mongoose.set('strictQuery', false);
mongoose.connect(db);

export const getItem = (id) => {
  try {
  } catch (err) {}
};

export const listItems = () => {
  try {
  } catch (err) {
    console.log(err);
  }
};

export const editItem = (id, data) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

export const addItem = (data) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = (id) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
