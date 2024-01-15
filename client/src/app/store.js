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

export const supportedLanguages = [
  "Spanish",
  "German",
  "French",
  "Italian",
  "Polish",
  "Icelandic",
  "Hebrew",
  "Syriac",
  "Koine Greek",
  "Mandarin",
  "Japanese",
  "Korean",
  "Arabic",
  "Russian",
  "Hindi",
];
