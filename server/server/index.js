/* eslint-disable no-console */
import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { MeetupRoutes, GroupRoutes, UserRoutes } from './modules';
import swaggerSpec from './config/swaggerConfig';

const app = express();

// database
dbConfig();

// middlewares

middlewaresConfig(app);
app.get('/', (req, res) => {
  res.send('Meetups API is Running');
});

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api', [MeetupRoutes, GroupRoutes, UserRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
