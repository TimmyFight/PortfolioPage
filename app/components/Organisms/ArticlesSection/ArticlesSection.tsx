"use client";

import { useGetArticlesQuery } from "@/lib/services/articles";
import HighlightedBox from "../../Molecules/HighlightedBox/HighlightedBox";

const ArticlesSection = () => {
  const { data, isLoading } = useGetArticlesQuery();

  if (isLoading) {
    return "";
  }

  return (
    <section id="articles" className="w-full flex gap-2 pt-28">
      {data &&
        data?.map((element) => {
          return (
            <HighlightedBox
              key={element.title}
              title={element.title}
              description={element.description}
              asideImage={element.asideImage}
            />
          );
        })}
    </section>
  );
};

export default ArticlesSection;
