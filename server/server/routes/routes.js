import { Router } from 'express';
import * as MeetupController from '../modules/meetups/controller';

const routes = new Router();

/**
 * @swagger
 * definition:
 *   meetups:
 *     properties:
 *       title:
 *         type: string
 *       description:
 *         type: string
 *
 */

/**
 * @swagger
 * /api/meetups:
 *   get:
 *     tags:
 *       - meetups
 *     description: Returns all meetups
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of meetups
 *         schema:
 *           $ref: '#/definitions/meetups'
 */

routes.get('/api/meetups', MeetupController.getAllMeetups);

/**
 * @swagger
 * /api/meetups:
 *   post:
 *     tags:
 *       - meetups
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: meetups title
 *         in: body
 *         required: true
  *       - name: description
 *         description: meetups description
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/meetups'
 *     responses:
 *       200:
 *         description: Successfully created
 */
routes.post('/api/meetups', MeetupController.createMeetup);
export default routes;
