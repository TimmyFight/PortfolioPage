import { useGetExperiencesQuery } from "@/lib/services/experiences";

const ExperienceSection = () => {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string;
  const { data: experiences } = useGetExperiencesQuery({ projectId });

  return (
    <section id="#experience">
      {experiences?.map((experiences) => {
        return <p>{experiences.title}</p>;
      })}
    </section>
  );
};

export default ExperienceSection;
