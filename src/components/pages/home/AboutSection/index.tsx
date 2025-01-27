"use client";

import { NextImage } from "@src/components/common";
import AboutMeImage from "@public/images/pages/home/about-me.svg";

export default function AboutSection() {
  return (
    <section
      className="section-height flex items-center bg-primary-200"
      id="about"
    >
      <div className="container grid cursor-default place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
        <NextImage src={AboutMeImage} alt="About Me Illustration" />
        <div className="grid gap-4 font-semibold text-white">
          <h2 className="text-3xl font-bold text-primary-100 md:text-6xl">
            About Me
          </h2>
          <p>
            Welcome to my website! I’m passionate about creating meaningful
            digital experiences.
          </p>
          <p>
            With years of experience in design and development, I’ve worked on
            projects ranging from small startups to large-scale enterprise
            applications.
          </p>
          <p>
            My goal is to combine creativity with technical expertise to bring
            ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
}
