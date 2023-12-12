"use client";

import { useGetExperiencesQuery } from "@/lib/services/experiences";
import HighlightedBox from "../../Molecules/HighlightedBox/HighlightedBox";

const ExperienceSection = () => {
  const { data } = useGetExperiencesQuery();

  return (
    <section id="#experience" className="w-full flex gap-2">
      {data?.map((element) => {
        return (
          <HighlightedBox
            key={element.title}
            title={element.title}
            title2={element.title2}
            title3={element.title3}
            description={element.description}
            asideText={element.asideText}
            asideImage={element.asideImage}
            usedTechnologies={element.usedTechnologies}
          />
        );
      })}
    </section>
  );
};

export default ExperienceSection;
