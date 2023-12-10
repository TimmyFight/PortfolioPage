import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/clientApp";

interface Experiences {
  title: string;
  title2?: string;
  title3?: string;
  description: string;
  asideText?: string;
  asideImage?: string;
  usedTechnologies?: string[];
}

export const experiencesApi = createApi({
  reducerPath: "experiencesApi",
  baseQuery: fakeBaseQuery(),

  endpoints: (builder) => ({
    getExperiences: builder.query<Experiences[], null>({
      query: async () => {
        const ref = collection(db, "experiences");
        const getDocument = await getDocs(ref);
        const data = getDocument.docs.map((doc) => doc.data());
        if (data) {
          return { data };
        } else {
          return { data: null };
        }
      },
    }),
  }),
});

export const { useGetExperiencesQuery } = experiencesApi;
