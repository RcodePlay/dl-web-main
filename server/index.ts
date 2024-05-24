import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import eventsRoute from './routes/events.routes.ts';

dotenv.config();

const app = express();
const PORT = 3000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Events API',
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Dev server',
      },
    ],
  },
  apis: ['./server/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Global middlewares
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(cors());
app.use(express.json());

// defining api routes
app.use('/events', eventsRoute);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () =>
    console.log('⚡[server]: Server is running at http://localhost:' + PORT)
  );
}

export default app;
