import { AppContainer, resolveContainerItem } from '../app-container.js';
import { AbstractUserService } from '../domain/user.js';
import { BaseController } from './base.controller.js';

export default class UserController extends BaseController<AppContainer> {
  userService!: AbstractUserService;
  init = (appContainer: AppContainer) => {
    this.userService = resolveContainerItem(
      appContainer,
      'services',
      'UserService'
    ) as AbstractUserService;

    console.debug(`UserController init: `, this.userService);
  };
}
