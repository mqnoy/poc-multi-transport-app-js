import { AppContainer, resolveContainerItem } from '../app-container.js';
import { AbstractUserService, AbstractUserRepository } from '../domain/user.js';
import { BaseService } from './base.service.js';

export default class UserService extends BaseService<AppContainer> implements AbstractUserService {
  userRepo!: AbstractUserRepository;
  init = (appContainer: AppContainer) => {
    this.userRepo = resolveContainerItem(
      appContainer,
      'repositories',
      'SequelizeUserRepository'
    ) as AbstractUserRepository;
  };

  dummyFunction = () => {
    console.log('dummyFunction');
  };
}
