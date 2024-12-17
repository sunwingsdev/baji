import baseApi from "../../baseApi";

const homeControlApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addHomeControl: builder.mutation({
      query: (data) => ({
        url: "/home-controls",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["homeControls"],
    }),

    getHomeControls: builder.query({
      query: () => "/home-controls",
      providesTags: ["homeControls"],
    }),

    updateSelection: builder.mutation({
      query: (id) => ({
        url: `/home-controls/${id}`,
        method: "PATCH",
      }),
    }),
  }),
});
export const {
  useAddHomeControlMutation,
  useGetHomeControlsQuery,
  useUpdateSelectionMutation,
} = homeControlApi;
