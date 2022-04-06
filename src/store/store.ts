import {configureStore} from '@reduxjs/toolkit';

import {allReducer} from './allReducers';

const devMode = __DEV__;

const storeConfig = () => {
  const store = configureStore({
    reducer: allReducer,
    devTools: devMode,
  });
  return store;
};
export const store = storeConfig();
