'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveLink } from '@/lib/services/activeLinkSlice';
import { useInView } from 'react-intersection-observer';
import { useGetArticlesQuery } from '@/lib/services/articles';
import HighlightedBox from '../../Molecules/HighlightedBox/HighlightedBox';
import Link from 'next/link';

const ArticlesSection = () => {
  const { data, isLoading } = useGetArticlesQuery();

  const dispatch = useDispatch();
  const [articleRef, inView, entry] = useInView({
    threshold: 0.4,
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
      ref={articleRef}
      id="articles"
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
              urlLink={element.urlLink}
            />
          );
        })}
    </section>
  );
};

export default ArticlesSection;
