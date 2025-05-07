import { Sequelize } from 'sequelize';
import { DataSources } from '../datasources/index.js';
import { AbstractUserRepository } from '../domain/user.js';
import { BaseRepository } from './base.repository.js';

export default class SequelizeUserRepository
  extends BaseRepository<DataSources>
  implements AbstractUserRepository
{
  private dbConn: Sequelize;
  init = (dataSources: DataSources): void => {
    this.dbConn = dataSources.sequelize;
  };
}
