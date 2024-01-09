import { configureStore } from "@reduxjs/toolkit";

import { formstackApi } from "./services/formstack";
import userReducer from "./features/auth";

export default configureStore({
  reducer: {
    counter: () => 1,
    [formstackApi.reducerPath]: formstackApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formstackApi.middleware),
});
