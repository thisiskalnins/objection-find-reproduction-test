import knex from 'knex';
import { Model } from 'objection';

export const database = knex({
  client: 'sqlite3',
  connection: './db.sqlite',
  useNullAsDefault: true
});

Model.knex(database);
