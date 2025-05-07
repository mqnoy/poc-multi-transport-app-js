export abstract class BaseRepository<T> {
  init = (_dataSources: T): void => {};
}
