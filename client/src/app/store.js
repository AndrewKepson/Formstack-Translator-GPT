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
  { name: "Spanish", code: "es" },
  { name: "German", code: "de" },
  { name: "French", code: "fr" },
  { name: "Italian", code: "it" },
  { name: "Polish", code: "pl" },
  { name: "Icelandic", code: "is" },
  { name: "Hebrew", code: "he" },
  { name: "Koine Greek", code: "grc" },
  { name: "Latin", code: "la" },
  { name: "Mandarin", code: "zh" },
  { name: "Japanese", code: "ja" },
  { name: "Korean", code: "ko" },
  { name: "Arabic", code: "ar" },
  { name: "Russian", code: "ru" },
  { name: "Hindi", code: "hi" },
];
