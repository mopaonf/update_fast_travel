import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log(process.env.REACT_APP_BACKEND_API_URL);
export const AuthenticationApi = createApi({
  reducerPath: "AuthenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_API_URL,
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ data }) => {
        return {
          url: "login/",
          body: data,
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    resetPassword: builder.mutation({
      query: ({ uid, token, data }) => {
        return {
          url: `reset_password_confirm/${uid}/${token}/`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useResetPasswordMutation } = AuthenticationApi;
