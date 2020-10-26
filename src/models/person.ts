import { Model } from 'objection';
import path from 'path';

export default class Person extends Model {
  public static tableName = 'persons';

  public static relationMappings = () => ({
    pets: {
      modelClass: path.join(__dirname, 'animal'),
      relation: Model.HasManyRelation,
      join: {
        from: 'persons.id',
        to: 'animals.ownerId'
      }
    }
  })

  public id!: number;
  public fullname!: string;
}
