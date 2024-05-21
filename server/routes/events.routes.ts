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
 *  schemas:
 *     Event:
 *      type: object
 *      properties:
 *          id:
 *              type: integer
 *              description: Event id
 *          name:
 *              type: string
 *              description: Event name
 *          date:
 *              type: integer
 *              description: Event creation date
 *          type:
 *              type: string
 *              description: Event type
 *     example:
 *          id: 1
 *          name: Summer camp 2024
 *          date: 6.7.2024
 *          type: camp
 */

/**
 * @swagger
 * /Events:
 *  get:
 *     summary: Get all Events
 *     description: Get all Events
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
router.get('/', listEvents);

/**
 * @swagger
 * /Events/{id}:
 *  get:
 *     summary: Get Event detail
 *     description: Get Event detail
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event id
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
router.get('/:id', getEvent);

/**
 * @swagger
 * /Events/{id}:
 *  put:
 *     summary: Edit Event
 *     description: Edit Event
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event id
 *     requestBody:
 *       description: A JSON object containing Event information
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Event'
 *           example:
 *              name: Rexaurus
 *              age: 12
 *              breed: labrador
 *              type: dog
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 *
 */
router.put('/:id', editEvent);

/**
 * @swagger
 * /Events:
 *  post:
 *      summary: Add Event
 *      description: Add Event
 *      requestBody:
 *          description: A JSON object containing Event information
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/Event'
 *                 example:
 *                    name: Rexaurus
 *                    age: 12
 *                    breed: labrador
 *                    type: dog
 *      responses:
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 */
router.post('/', addEvent);

/**
 * @swagger
 * /Events/{id}:
 *  delete:
 *     summary: Delete Event
 *     description: Delete Event
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event id
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 */
router.delete('/:id', deleteEvent);

export default router;
