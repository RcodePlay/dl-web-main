import {
  getItem,
  listItems,
  editItem,
  addItem,
  deleteItem,
} from '../data-models/events.models';

export const getEvent = (req, res) => {
  try {
    const resp = getItem(parseInt(req.params.id));
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const listEvents = (req, res) => {
  try {
    const resp = listItems();
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const editEvent = (req, res) => {
  try {
    const resp = editItem(parseInt(req.params.id), req.body);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const addEvent = (req, res) => {
  try {
    const resp = addItem(req.body);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteEvent = (req, res) => {
  try {
    const resp = deleteItem(parseInt(req.params.id));
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};
