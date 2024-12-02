// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseApi = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_BASE_API_URL,
//   }),
//   tagTypes: ["users"],
//   endpoints: () => ({}),
// });

// export default baseApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL, // Adjust to match your backend URL
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["users"],
  endpoints: () => ({}),
});

export const { useLoginMutation, useRegisterMutation, useFetchProfileQuery } =
  baseApi;
export default baseApi;
