"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveLink } from "@/lib/services/activeLinkSlice";
import { useInView } from "react-intersection-observer";
import { useGetProjectsQuery } from "@/lib/services/projects";
import HighlightedBox from "../../Molecules/HighlightedBox/HighlightedBox";
import Link from "next/link";

const ProjectsSection = () => {
  const { data, isLoading } = useGetProjectsQuery();

  const dispatch = useDispatch();
  const [projectRef, inView, entry] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && entry) {
      dispatch(setActiveLink(`./#${entry.target.id}`));
    }
  }, [inView]);

  if (isLoading) {
    return "";
  }

  return (
    <section
      ref={projectRef}
      data-observe="true"
      id="projects"
      className="w-full flex flex-col gap-2 pt-28">
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
