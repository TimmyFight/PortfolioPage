import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

interface GetQueryParameters {
  projectId: string;
}

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
    getExperiences: builder.query<Experiences[], GetQueryParameters>({
      query: async ({ projectId }: GetQueryParameters) => {
        const ref = doc(db, "experiences", projectId);
        const getDocument = await getDoc(ref);
        return { data: getDocument.data() };
      },
    }),
  }),
});

export const { useGetExperiencesQuery } = experiencesApi;
