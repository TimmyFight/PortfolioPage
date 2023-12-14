import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/clientApp";

export interface Projects {
  title: string;
  description: string;
  asideImage?: string;
  technologies?: string[];
  urlLink?: string;
}

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fakeBaseQuery(),

  endpoints: (builder) => ({
    getProjects: builder.query<Projects[] | null, void>({
      queryFn: async (): Promise<{ data: Projects[] | null }> => {
        try {
          const ref = collection(db, "projects");
          const getDocument = await getDocs(ref);
          const data = getDocument.docs.map((doc) => doc.data());
          if (data) {
            // @ts-ignore
            return { data };
          } else {
            return { data: [] };
          }
        } catch (error) {
          console.error("Error fetching projects:", error);
          return { data: [] };
        }
      },
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApi;
