"use client";

import { useState } from "react";
import { cn } from "@src/utils";
import { Category, projectItems } from "./projectItems";
import ProjectItem from "./ProjectItem";
import { categoryButtons } from "./categoryButton";
import { ExternalLinkIcon, GithubIcon } from "@src/icons";
import { NextLink } from "@src/components/common";

export default function PortfolioSection() {
  const [category, setCategory] = useState<Category>("nextjs");

  return (
    <section className="section-height grid bg-primary-300" id="projects">
      <div className="container py-12 lg:py-20">
        <h2 className="text-3xl font-bold text-white md:text-6xl">
          My Portfolio
        </h2>
        <div className="my-10 flex flex-wrap justify-center gap-8">
          <button
            type="button"
            className={cn(
              "group relative flex items-center gap-1.5 border-b-[3px] border-transparent py-2 text-lg font-semibold text-white transition hover:text-white"
            )}
          >
            <span>Experience</span>
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="flex cursor-default flex-col gap-6 bg-white p-6 transition duration-300 hover:-translate-y-4 hover:translate-x-4 hover:shadow-primary-100-lg">
            <h3 className="bg-primary-100 p-2 text-center font-semibold">
              TeachEdison - Frontend Developer
            </h3>
            <p>
              Developed Bluebook Insights, a web application for SAT score
              analysis, using Next.js, TypeScript, and Tailwind CSS. Implemented
              dynamic report generation, interactive visual analytics, and
              user-specific insights to enhance student and tutor engagement.
              Built a modular, API-driven architecture with scalable data
              handling and seamless authentication.
            </p>
            <p>
              Integrated Lexical editor into the frontend for real-time text
              editing with syntax highlighting, autocompletion, and live
              validation, optimizing performance and ensuring seamless UI
              integration.
            </p>
            <ul className="flex flex-wrap gap-2.5 text-primary-200">
              <li className="rounded-full border border-primary-200 px-3 py-1 text-sm">
                NextJs
              </li>
              <li className="rounded-full border border-primary-200 px-3 py-1 text-sm">
                TailwindCSS
              </li>
              <li className="rounded-full border border-primary-200 px-3 py-1 text-sm">
                LexicalEditor
              </li>
              <li className="rounded-full border border-primary-200 px-3 py-1 text-sm">
                Typescript
              </li>
            </ul>

            <div className="mt-auto flex justify-end gap-4">
              <NextLink
                href="https://www.teachedison.com/"
                className="group flex w-1/2 items-center justify-around rounded-lg border-2 border-primary-300 px-4 py-2 hover:bg-primary-300 hover:text-white md:w-1/3"
              >
                <span>Visit Website</span>
                <ExternalLinkIcon className="h-8 w-8 fill-primary-300 transition group-hover:fill-white" />
              </NextLink>

              {/* <NextLink
                href=""
                className="group flex w-1/2 items-center justify-around rounded-lg border-2 border-primary-300 px-4 py-2 hover:bg-primary-300 hover:text-white md:w-1/3"
              >
                <span>Source Code</span>
                <GithubIcon className="h-8 w-8 fill-primary-300 transition group-hover:fill-white" />
              </NextLink> */}
            </div>
          </article>
        </div>

        <div className="my-10 flex flex-wrap justify-center gap-8">
          {categoryButtons.map((categoryButton) => (
            <button
              type="button"
              key={categoryButton.id}
              onClick={() => setCategory(categoryButton.id)}
              className={cn(
                "group relative flex items-center gap-1.5 border-b-[3px] border-transparent py-2 text-lg font-semibold text-primary-100 transition hover:text-white",
                category === categoryButton.id &&
                  "border-white text-white [&>svg]:fill-white"
              )}
            >
              {/* <categoryButton.icon className="h-6 w-6 fill-primary-100 transition group-hover:fill-white" /> */}
              {/* <span>{categoryButton.title}</span> */}
              <span>Projects</span>
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projectItems[category].map((projectItem) => (
            <ProjectItem
              key={projectItem.sourceLink}
              title={projectItem.title}
              websiteLink={projectItem.websiteLink}
              sourceLink={projectItem.sourceLink}
              description={projectItem.description}
              techStacks={projectItem.techStacks}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
