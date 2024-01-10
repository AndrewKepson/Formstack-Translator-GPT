import { configureStore } from "@reduxjs/toolkit";

import { formstackApi } from "./services/formstack";
import { openAiApi } from "./services/openAi";
import userReducer from "./features/auth";

export default configureStore({
  reducer: {
    counter: () => 1,
    [formstackApi.reducerPath]: formstackApi.reducer,
    [openAiApi.reducerPath]: openAiApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(formstackApi.middleware)
      .concat(openAiApi.middleware),
});
