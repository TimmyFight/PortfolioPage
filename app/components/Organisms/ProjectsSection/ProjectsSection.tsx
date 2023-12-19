"use client";

import { useGetProjectsQuery } from "@/lib/services/projects";
import HighlightedBox from "../../Molecules/HighlightedBox/HighlightedBox";
import Link from "next/link";

const ProjectsSection = () => {
  const { data, isLoading } = useGetProjectsQuery();

  if (isLoading) {
    return "";
  }

  return (
    <section id="projects" className="w-full flex flex-col gap-2 pt-28">
      {data &&
        data?.map((element) => {
          if (element.urlLink) {
            return (
              <Link href={element.urlLink} target="_blank" key={element.title}>
                <HighlightedBox
                  title={element.title}
                  description={element.description}
                  asideImage={element.asideImage}
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
              description={element.description}
              asideImage={element.asideImage}
              technologies={element.technologies}
              urlLink={element.urlLink}
            />
          );
        })}
    </section>
  );
};

export default ProjectsSection;
