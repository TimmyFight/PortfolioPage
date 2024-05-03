'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';

import { setActiveLink } from '@/lib/services/activeLinkSlice';
import { useGetProjectsQuery } from '@/lib/services/projects';

import HighlightedBox from '../../Molecules/HighlightedBox/HighlightedBox';

const ProjectsSection = () => {
  const { data, isLoading } = useGetProjectsQuery();

  const dispatch = useDispatch();
  const [projectRef, inView, entry] = useInView({
    threshold: 0.2,
    rootMargin: '10%',
  });

  useEffect(() => {
    if (inView && entry) {
      dispatch(setActiveLink(`#${entry.target.id}`));
    }
  }, [inView]);

  if (isLoading) {
    return '';
  }

  return (
    <section
      ref={projectRef}
      id="projects"
      className="w-full flex flex-col gap-2 pt-10 lg:pt-28"
    >
      {data &&
        data?.map((element) => {
          if (element.urlLink) {
            return (
              <Link
                href={element.urlLink}
                target="_blank"
                key={element.title}
              >
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
