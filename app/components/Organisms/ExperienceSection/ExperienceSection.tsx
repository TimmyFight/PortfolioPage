"use client";

import { useGetExperiencesQuery } from "@/lib/services/experiences";

const ExperienceSection = () => {
  const { data } = useGetExperiencesQuery(null);

  return (
    <section id="#experience">
      {data?.map((element) => {
        return <p>{element.title}</p>;
      })}
    </section>
  );
};

export default ExperienceSection;
