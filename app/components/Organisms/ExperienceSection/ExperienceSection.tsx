"use client";

import { useGetExperiencesQuery } from "@/lib/services/experiences";
import HighlightedBox from "../../Molecules/HighlightedBox/HighlightedBox";
import Link from "next/link";

const ExperienceSection = () => {
  const { data, isLoading } = useGetExperiencesQuery();

  if (isLoading) {
    return "";
  }

  return (
    <section id="experience" className="w-full flex flex-col gap-2 pt-28">
      {data &&
        data?.map((element) => {
          if (element.urlLink) {
            return (
              <Link href={element.urlLink} target="_blank" key={element.title}>
                <HighlightedBox
                  title={element.title}
                  title2={element.title2}
                  title3={element.title3}
                  description={element.description}
                  asideText={element.asideText}
                  technologies={element.technologies}
                  urlLink={element.urlLink}
                />
              </Link>
            );
          }
          return (
            <HighlightedBox
              key={element.title}
              title={element.title}
              title2={element.title2}
              title3={element.title3}
              description={element.description}
              asideText={element.asideText}
              technologies={element.technologies}
              urlLink={element.urlLink}
            />
          );
        })}
    </section>
  );
};

export default ExperienceSection;
