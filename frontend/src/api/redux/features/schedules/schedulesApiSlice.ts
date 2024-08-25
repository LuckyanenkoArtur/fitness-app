import { apiSlice } from "../../../apiSlice";
import Schedules from "../../../../data/schedules";

export const schedulesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSchedules: builder.query<Schedules[], void>({
      query: (state) => `/schedules?state=${state}`,
      providesTags: ["Schedules"],
    }),
    createSchedule: builder.mutation({
      query: (data) => ({
        url: "/schedules",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Schedules"],
    }),
    cancelSchedule: builder.mutation({
      query: (data) => ({
        url: `/schedules/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Schedules"],
    }),
  }),
});

export const {
  useGetSchedulesQuery,
  useCreateScheduleMutation,
  useCancelScheduleMutation,
} = schedulesApiSlice;
