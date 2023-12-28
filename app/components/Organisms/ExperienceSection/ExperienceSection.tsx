"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveLink } from "@/lib/services/activeLinkSlice";
import { useInView } from "react-intersection-observer";
import { useGetExperiencesQuery } from "@/lib/services/experiences";
import HighlightedBox from "../../Molecules/HighlightedBox/HighlightedBox";
import Link from "next/link";
import Typography from "../../Atoms/Typography/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const ExperienceSection = () => {
  const { data, isLoading } = useGetExperiencesQuery();

  const dispatch = useDispatch();
  const [experienceRef, inView, entry] = useInView({
    threshold: 0.4,
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
      className="w-full flex flex-col gap-2 pt-10 lg:pt-28">
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
      <Link
        data-testid="menuItem"
        href="/pdf/adrian_ciolkiewicz-cv.pdf"
        target="_blank"
        locale={false}
        className="flex flex-row items-center max-lg:justify-center mt-14 cursor-pointer underline-offset-4 text-emerald-700 gap-0 hover:gap-2 hover:underline hover:text-emerald-500 transition-all duration-500 ease-in">
        <Typography customClass="text-sm font-bold uppercase">
          <>View my complete resume</>
        </Typography>
        <ArrowRightIcon />
      </Link>
    </section>
  );
};

export default ExperienceSection;
