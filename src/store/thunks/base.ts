import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tagTypes: string[] = ["Questions"];

const baseApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://the-trivia-api.com/api" }),
  endpoints: () => ({}),
  tagTypes,
});

export default baseApi;
