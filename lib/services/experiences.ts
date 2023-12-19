import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/clientApp";

export const experiencesApi = createApi({
  reducerPath: "experiencesApi",
  baseQuery: fakeBaseQuery(),

  endpoints: (builder) => ({
    getExperiences: builder.query<Experiences[] | null, void>({
      queryFn: async (): Promise<{ data: Experiences[] | null }> => {
        try {
          const ref = collection(db, "experiences");
          const getDocument = await getDocs(ref);
          let data = getDocument.docs.map((doc) => doc.data());
          if (data) {
            data = data.sort((a, b) => b.orderId - a.orderId);
            // @ts-ignore
            return { data };
          } else {
            return { data: [] };
          }
        } catch (error) {
          console.error("Error fetching experiences:", error);
          return { data: [] };
        }
      },
    }),
  }),
});

export const { useGetExperiencesQuery } = experiencesApi;
