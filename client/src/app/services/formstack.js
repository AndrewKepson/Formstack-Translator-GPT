import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const formstackApi = createApi({
  reducerPath: "formstackApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3001/forms`,
  }),
  endpoints: (build) => ({
    getForms: build.query({
      query: (token) => `/${token}`,
    }),
    getForm: build.query({
      query: ({ id, token }) => `/${id}/${token}`,
    }),
    getFormSubmissions: build.query({
      query: ({ id, token }) => `/${id}/submissions/${token}`,
    }),
    createForm: build.mutation({
      query: ({ token, formName, formFields }) => ({
        url: `/create/${token}`,
        method: "POST",
        body: { formName, formFields },
      }),
    }),
  }),
});

export const {
  useGetFormsQuery,
  useGetFormQuery,
  useGetFormSubmissionsQuery,
  useCreateFormMutation,
} = formstackApi;
