import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "@/firebase/clientApp";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fakeBaseQuery(),

  endpoints: (builder) => ({
    getArticles: builder.query<Articles[] | null, void>({
      queryFn: async (): Promise<{ data: Articles[] | null }> => {
        try {
          const ref = collection(db, "articles");
          const getDocument = await getDocs(ref);
          const data = getDocument.docs.map((doc) => doc.data());
          if (data) {
            // @ts-ignore
            return { data };
          } else {
            return { data: [] };
          }
        } catch (error) {
          console.error("Error fetching articles:", error);
          return { data: [] };
        }
      },
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
