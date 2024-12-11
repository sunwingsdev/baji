import baseApi from "../../baseApi";

const withdrawsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add a withdraw
    addWithdraw: builder.mutation({
      query: (data) => ({
        url: "/withdraws",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["withdraws"],
    }),

    // get all withdraws
    getWithdraws: builder.query({
      query: () => "/withdraws",
      providesTags: ["withdraws"],
    }),

    // update status
    updateWithdrawStatus: builder.mutation({
      query: (id) => ({
        url: `/withdraws/status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["withdraws"],
    }),
  }),
});

export const {
  useAddWithdrawMutation,
  useGetWithdrawsQuery,
  useUpdateWithdrawStatusMutation,
} = withdrawsApi;
