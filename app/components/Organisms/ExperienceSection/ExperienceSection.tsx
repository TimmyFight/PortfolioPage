"use client";

import { useGetExperiencesQuery } from "@/lib/services/experiences";
import { useEffect, useState } from "react";

const ExperienceSection = () => {
  const { data, isLoading } = useGetExperiencesQuery();

  const [experiences, setExperiences] = useState([
    { title: "", description: "" },
  ]);

  useEffect(() => {
    if (data) {
      setExperiences(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="#experience">
      {experiences?.map((element) => {
        return <p key={element.title}>{element.title}</p>;
      })}
    </section>
  );
};

export default ExperienceSection;
