"use client";

import { useGetArticlesQuery } from "@/lib/services/articles";
import HighlightedBox from "../../Molecules/HighlightedBox/HighlightedBox";
import Link from "next/link";

const ArticlesSection = () => {
  const { data, isLoading } = useGetArticlesQuery();

  if (isLoading) {
    return "";
  }

  return (
    <section id="articles" className="w-full flex flex-col gap-2 pt-28">
      {data &&
        data?.map((element) => {
          if (element.urlLink) {
            return (
              <Link href={element.urlLink} target="_blank" key={element.title}>
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
