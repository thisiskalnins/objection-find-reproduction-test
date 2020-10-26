import { Model } from 'objection';
import path from 'path';

export default class Person extends Model {
  public static tableName = 'animals';

  public static relationMappings = () => ({
    owner: {
      modelClass: path.join(__dirname, 'person'),
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'animals.ownerId',
        to: 'persons.id'
      }
    }
  })

  public id!: number;
  public ownerId!: number;
  public name!: string;
}
