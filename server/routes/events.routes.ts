import express from 'express';
import {
  listEvents,
  getEvent,
  editEvent,
  addEvent,
  deleteEvent,
} from '../controllers/events.controllers.ts';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Event id
 *         name:
 *           type: string
 *           description: Event name
 *         date:
 *           type: string
 *           format: date
 *           description: Event creation date (in ISO 8601 format)
 *         type:
 *           type: string
 *           description: Event type
 *       example:
 *         id: 1
 *         title: Summer camp 2024
 *         createdAt: "2024-07-06"
 *         content: Summer camp of 2024
 *         type: camp
 */

/**
 * @swagger
 * /events:
 *  get:
 *    summary: Get all Events
 *    description: Get all Events
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.get('/', listEvents);

/**
 * @swagger
 * /events/{id}:
 *  get:
 *    summary: Get Event detail
 *    description: Get Event detail
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Event id
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.get('/:id', getEvent);

/**
 * @swagger
 * /events/{id}:
 *  put:
 *    summary: Edit Event
 *    description: Edit Event
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Event id
 *    requestBody:
 *      description: A JSON object containing Event information
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Event'
 *          example:
 *            title: Summer camp 2025
 *            createdDate: 2025-07-06
 *            content: Summer camp of 2025
 *            type: camp
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.put('/:id', editEvent);

/**
 * @swagger
 * /events:
 *  post:
 *    summary: Add Event
 *    description: Add Event
 *    requestBody:
 *      description: A JSON object containing Event information
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Event'
 *          example:
 *            title: three-day spring 2024
 *            content: Three-day sleepover in spring 2024
 *            type: three-day
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.post('/', addEvent);

/**
 * @swagger
 * /events/{id}:
 *  delete:
 *    summary: Delete Event
 *    description: Delete Event
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Event id
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.delete('/:id', deleteEvent);

export default router;
