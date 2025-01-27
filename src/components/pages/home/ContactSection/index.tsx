"use client";

import { NextImage, NextLink } from "@src/components/common";
import ContactImage from "@public/images/pages/home/contact.svg";

export default function ContactSection() {
  return (
    <section
      className="last-section-height flex items-center bg-primary-400 bg-noise"
      id="contact"
    >
      <div className="container grid cursor-default place-items-center gap-12 max-lg:py-12 lg:grid-cols-2 lg:gap-20">
        <div className="grid gap-4 font-semibold">
          <h2 className="text-3xl font-bold md:text-6xl">Get in Touch</h2>
          <p>
            I&apos;d love to hear from you! Whether you have a question, a
            project idea, or just want to say hello, feel free to reach out.
          </p>
          <p>
            Contact me via email and let&apos;s discuss how we can work together
            to bring your ideas to life.
          </p>
          <div className="group inline-block w-fit">
            <NextLink
              className="inline-block rounded-md border border-primary-300 bg-white px-4 py-2.5 font-semibold transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[-4px_4px_0px_0px_#3a10e5]"
              href="mailto:gokhan_bakirci_53@hotmail.com"
            >
              Contact Me
            </NextLink>
          </div>
        </div>
        <NextImage src={ContactImage} alt="Contact Illustration" />
      </div>
    </section>
  );
}
