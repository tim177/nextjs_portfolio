"use client";

import { NextImage, NextLink } from "@src/components/common";
import GreetingImage from "@public/images/pages/home/greeting.svg";

export default function GreetingSection() {
  return (
    <section className="section-height flex items-center bg-primary-400 bg-noise">
      <div className="container grid place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
        <div className="grid cursor-default gap-4">
          <span className="text-primary-200">Hi there!</span>
          <h1 className="text-4xl font-bold md:text-6xl">
            I&apos;m Amit Singh
          </h1>
          <p className="text-xl italic md:text-2xl">
            A passionate Frontend Developer
          </p>
          <p className="font-semibold">
            I specialize in creating high-quality web applications that solve
            real-world problems.
          </p>
          <p className="font-semibold">
            {/* Feel free to check out my projects or connect with me on{" "} */}
            <NextLink
              href="https://www.entererp.com"
              className="hover:text-primary-200 underline-offset-2 hover:cursor-pointer hover:underline"
            >
              {/* LinkedIn */}
            </NextLink>
          </p>
        </div>
        <NextImage src={GreetingImage} priority alt="Greeting Illustration" />
      </div>
    </section>
  );
}
