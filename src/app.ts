import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Application } from 'express';

import 'providers/database';

import { animal } from 'controllers/animal';
import { person } from 'controllers/person';

dotenv.config();

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Person controller, where query builder doesn't work (TS)
person(app);

// Animal controller, where query builder works (JS)
animal(app);

app.listen(process.env.PORT, () => {
  console.log(`Environment: ${process.env.NODE_ENV} | Port: ${process.env.PORT}`);
});
