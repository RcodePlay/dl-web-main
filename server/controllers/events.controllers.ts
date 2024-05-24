import {
  getItem,
  listItems,
  editItem,
  addItem,
  deleteItem,
} from '../data-models/events.models.ts';

export const getEvent = async (req: any, res: any) => {
  try {
    const resp = getItem(req.params.id);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const listEvents = async (req: any, res: any) => {
  try {
    const resp = await listItems();
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const editEvent = async (req: any, res: any) => {
  try {
    const resp = editItem(req.params.id, req.body);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const addEvent = async (req: any, res: any) => {
  try {
    const resp = addItem(req.body);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteEvent = async (req: any, res: any) => {
  try {
    const resp = deleteItem(req.params.id);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};
