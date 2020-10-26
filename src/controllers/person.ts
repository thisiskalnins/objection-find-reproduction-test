import { Application, Request, Response } from 'express';
import Person from 'models/person';
import findQuery from 'objection-find';

export const person = (app: Application): void => {
  app.get('/api/persons/:id?', async(req: Request, res: Response) => {
    const { params, query } = req;
    const { page, ...filters } = query;

    try {
      if (params.id) {
        res.send(
          await findQuery(Person)
            .build({ ...params, ...filters })
            .first()
        );
      } else if (page) {
        res.send(
          await findQuery(Person)
            .build(
              filters,
              // This throws error in TS
              // Person
              //   .query()
              //   .page(page, 2)
            )
        );
      } else {
        res.send(
          await findQuery(Person)
            .build(query)
        );
      }
    } catch (err: unknown) {
      res.status(500).send(err);
    }
  });
};
