export interface AppContainer {
  services?: Map<string, unknown>;
  repositories?: Map<string, unknown>;
  controllers?: Map<string, unknown>;
  adapters?: Map<string, unknown>;
}

type AppContainerKeys = keyof AppContainer;

export const resolveContainerItem = <R, K extends AppContainerKeys>(
  appContainer: AppContainer,
  key: K,
  className: string
): R => {
  const container = appContainer[key];
  if (!container) {
    throw new Error(`Container for '${key}' not found.`);
  }

  const instance = container.get(className);
  if (!instance) {
    throw new Error(`'${className}' not initialized in '${key}' container.`);
  }

  return instance as R;
};
