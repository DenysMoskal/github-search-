import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRepo, IUser, ServerRepsonse } from "../../modules";

export const githubApi = createApi({
  reducerPath: "gitnub/api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.github.com/" }),
  endpoints: (build) => ({
    serchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: "search/users",
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerRepsonse<IUser>) => response.items,
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
});

export const { useSerchUsersQuery, useLazyGetUserReposQuery } = githubApi;
