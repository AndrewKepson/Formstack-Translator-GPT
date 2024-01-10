import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const openAiApi = createApi({
  reducerPath: "openAiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3001`,
  }),
  endpoints: (build) => ({
    getTranslation: build.mutation({
      query: ({ translationText, language }) => ({
        url: `/translate`,
        method: "POST",
        body: { translationText, language },
      }),
    }),
  }),
});

export const { useGetTranslationMutation } = openAiApi;
