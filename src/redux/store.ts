import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import { userApi } from './services/userApi';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    counterReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>; // { counter: { counter: number; }; }

export type AppDispatch = typeof store.dispatch; // (action: { type: string; payload?: any; }) => any
