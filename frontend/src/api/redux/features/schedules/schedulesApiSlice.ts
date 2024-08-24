import { apiSlice } from "../../../apiSlice";
import Schedules from "../../../../data/schedules";

export const schedulesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSchedules: builder.query<Schedules[], void>({
      query: () => ({
        url: `/schedules`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSchedulesQuery } = schedulesApiSlice;
