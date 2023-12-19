"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveLink } from "@/lib/services/activeLinkSlice";
import { useInView } from "react-intersection-observer";
import { useGetExperiencesQuery } from "@/lib/services/experiences";
import HighlightedBox from "../../Molecules/HighlightedBox/HighlightedBox";
import Link from "next/link";

const ExperienceSection = () => {
  const { data, isLoading } = useGetExperiencesQuery();

  const dispatch = useDispatch();
  const [experienceRef, inView, entry] = useInView({
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
      ref={experienceRef}
      data-observe="true"
      id="experience"
      className="w-full flex flex-col gap-2 pt-28">
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
