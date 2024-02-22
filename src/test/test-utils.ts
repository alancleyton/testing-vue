import { createApp, App } from 'vue';

// simulate a Vue component's setup function to test composables
export const withAppSetup = <T>(composable: () => T): [T | null, App] => {
  let result: T | null = null;

  const app = createApp({
    setup() {
      result = composable();
      return () => {};
    },
  });

  app.mount(document.createElement('div'));
  return [result, app];
};
