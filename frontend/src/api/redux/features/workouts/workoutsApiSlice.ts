import { apiSlice } from "../../../apiSlice";
import Workout from "../../../../data/workouts";

export const workoutsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWorkouts: builder.query<Workout[], void>({
      query: () => ({
        url: `/workouts`,
        method: "GET",
      }),
    }),
    getWorkoutById: builder.query<Workout, string>({
      query: (id) => ({
        url: `/workouts/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetWorkoutsQuery, useGetWorkoutByIdQuery } = workoutsApiSlice;
