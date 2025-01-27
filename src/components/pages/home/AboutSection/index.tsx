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
            Hi there! I’m Amit Singh, a web developer with a passion for turning
            ideas into amazing digital experiences. My journey started with the
            basics of HTML, CSS, and JavaScript, and has grown into building
            sleek, functional apps using ReactJS, NextJS, TailwindCSS, and
            TypeScript.
          </p>
          <p>
            I’ve worked on projects big and small, and I’m always excited to
            learn, create, and explore in the ever-evolving world of web
            development. When I’m not coding, you’ll find me exploring tech
            trends, watching Netflix, or chasing the perfect cup of coffee.
            Let’s build something great together! 🚀
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
