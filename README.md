## objection-find error reproduction

To start: `npm run dev`

### Cases

1. `src/controllers/person.ts` has a case with query builder that doesn't work
2. `src/controllers/animal.js` has the same case with query builder that does work

### Routes

- GET: `/api/persons`
- GET: `/api/persons?eager=pets`
- GET: `/api/persons/1`
- GET: `/api/persons/1?eager=pets`


- GET: `/api/animals`
- GET: `/api/animals?eager=owner`
- GET: `/api/animals/1`
- GET: `/api/animals/1?eager=owner&page=0`
