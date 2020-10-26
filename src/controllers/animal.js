import Animal from 'models/animal';
import findQuery from 'objection-find';

export const animal = app => {
  app.get('/api/animals/:id?', async(req, res) => {
    const { params, query } = req;
    const { page, ...filters } = query;

    try {
      if (params.id) {
        res.send(
          await findQuery(Animal)
            .build({ ...params, ...filters })
            .first()
        );
      } else if (page) {
        res.send(
          await findQuery(Animal)
            .build(
              filters,
              // This works in JS
              Animal
                .query()
                .page(page, 2)
            )
        );
      } else {
        res.send(
          await findQuery(Animal)
            .build(query)
        );
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });
};
