import { Question } from "../../types/question";
import baseApi from "./base";

const triviaQuestionsAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<Question[], void>({
      query: () => ({
        url: `questions`,
      }),
      providesTags: ["Questions"],
    }),
  }),
});

export const { useGetQuestionsQuery } = triviaQuestionsAPi;
