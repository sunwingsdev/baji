import baseApi from "../../baseApi";

const depositsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add a deposit
    addDeposit: builder.mutation({
      query: (data) => ({
        url: "/deposits",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["deposits"],
    }),

    // get all deposits
    getDeposits: builder.query({
      query: () => "/deposits",
      providesTags: ["deposits"],
    }),

    // update status
    updateDepositStatus: builder.mutation({
      query: (id) => ({
        url: `/deposits/status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["deposits"],
    }),
  }),
});

export const {
  useAddDepositMutation,
  useGetDepositsQuery,
  useUpdateDepositStatusMutation,
} = depositsApi;
