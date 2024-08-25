import { apiSlice } from "../../../apiSlice";

interface User {
  id: number;
  firstname: string;
}

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => `/user`,
    }),
    registUser: builder.mutation({
      query: (data) => ({
        url: `/user`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetUserQuery, useRegistUserMutation } = userApiSlice;
