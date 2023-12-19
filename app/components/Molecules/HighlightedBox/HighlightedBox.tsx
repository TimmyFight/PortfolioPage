import Image from "next/image";
import Headings from "../../Atoms/Headings/Headings";
import Typography from "../../Atoms/Typography/Typography";
import Chip from "../../Atoms/Chip/Chip";

type HighlightedBoxProperties = Articles & Projects & Experiences;

const HighlightedBox = ({
  title,
  title2 = "",
  title3 = "",
  description,
  asideText = "",
  asideImage = "",
  technologies = [],
  urlLink = "",
}: HighlightedBoxProperties) => {
  return (
    <section
      data-testid="highlightedBox"
      className={`w-full p-8 flex gap-4 justify-between border-transparent border ${
        urlLink ? "hover:cursor-pointer" : "hover:cursor-default"
      } hover:rounded-lg hover:border-dashed hover:border-emerald-700`}>
      <aside data-testid="asideSection">
        {asideText && (
          <Typography customClass="text-sm pt-1 whitespace-nowrap">
            <>{asideText}</>
          </Typography>
        )}
        {asideImage && (
          <Image
            alt={title}
            src={asideImage}
            width={150}
            height={75}
            className="max-w-fit"
          />
        )}
      </aside>
      <div data-testid="mainSection" className="grow">
        <div>
          <Headings level={2} customClass="text-lg text-neutral-300">
            <>{title}</>
          </Headings>
          {title2 !== "" && (
            <Headings level={3}>
              <>{title2}</>
            </Headings>
          )}
          {title3 !== "" && (
            <Headings level={4}>
              <>{title3}</>
            </Headings>
          )}
          <Typography customClass="pt-2 text-sm">
            <>{description}</>
          </Typography>
        </div>
        {technologies && (
          <section className="flex flex-row flex-wrap mt-6 gap-4">
            {technologies.map((technology: string) => (
              <Chip key={technology} technology={technology} />
            ))}
          </section>
        )}
      </div>
    </section>
  );
};

export default HighlightedBox;
