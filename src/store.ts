import { configureStore } from "@reduxjs/toolkit";
import { metMuseumApi } from "./services/metMuseumApi";

export const store = configureStore({
  reducer: {
    [metMuseumApi.reducerPath]: metMuseumApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(metMuseumApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
