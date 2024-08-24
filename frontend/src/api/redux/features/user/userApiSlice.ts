import { apiSlice } from "../../../apiSlice";

interface User {
  id: number;
  firstname: string;
}

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => ({
        url: `/user`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserQuery } = userApiSlice;
