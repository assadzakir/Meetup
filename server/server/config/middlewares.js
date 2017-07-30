import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import passport from 'passport';
import cors from 'cors';

export default app => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(passport.initialize());
  app.use(express.static(path.join(__dirname, '../public')));
};
