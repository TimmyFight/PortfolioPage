'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';

import { setActiveLink } from '@/lib/services/activeLinkSlice';

import StrongText from '../../Atoms/StrongText/StrongText';
import Typography from '../../Atoms/Typography/Typography';

const AboutSection = () => {
  const dispatch = useDispatch();
  const [aboutRef, inView, entry] = useInView({
    threshold: 0.2,
    rootMargin: '10%',
  });

  useEffect(() => {
    if (inView && entry) {
      dispatch(setActiveLink(`#${entry.target.id}`));
    }
  }, [inView]);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="pt-14 lg:pt-28"
    >
      <Typography>
        <>
          In 2015 I decided to learn HTML and CSS. I created my first websites,
          it was so exciting for me that I still learn a new frontend frameworks
          and technologies. I found my first internship in a{' '}
          <StrongText>small family company</StrongText>. There I learned the
          basics of programming. After this short but valuable time, I started
          working for{' '}
          <StrongText>
            one of the world&apos;s leading beauty companies
          </StrongText>
          . Where I implemented a lot of huge features and improvements. Then I
          moved to a smaller company where I was able to improve my programming
          skills and was surrounded by a lot of professionals. I was involved in
          different interesting projects, some of them were for example good
          prospere <StrongText>startups</StrongText>.
        </>
      </Typography>
      <Typography customClass="pt-4">
        <>
          I am focused on being{' '}
          <StrongText>profesional frontend developer</StrongText>. I am always
          looking for opportunity to be a <StrongText>Tech Lead</StrongText> on
          the projects and I am able to take responisbility for projects and
          team. In my spare time I creating new repositories on my GitHub and I
          constantly tring new technologies and different way to get my aims.
        </>
      </Typography>
      <Typography customClass="pt-4">
        <>
          I love to hike in the mountains and to ride long on my bicycle and
          listen to my favorite music. I try to keep my health on the highest
          level and always I try to find some interesting activities that allow
          me to move a little after spending a lot of time with computer.
        </>
      </Typography>
    </section>
  );
};

export default AboutSection;
