"use client";

import { useEffect, useState } from "react";
import { cn } from "@src/utils";
import SiteLogo from "@public/images/common/site-logo.svg";
import { NextImage, NextLink } from "@src/components/common";

const navigationLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (window.location.hash) {
      setActiveLink(window.location.hash.slice(1));
      const section = document.querySelector(window.location.hash);
      section?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <nav className="h-header sticky top-0 z-50 flex items-center border-b-2 border-primary-100 bg-primary-300">
      <div className="container flex items-center justify-between">
        <NextLink
          className="rounded-full bg-primary-100 p-1"
          href="#"
          title="Home"
          onClick={() => setActiveLink("")}
        >
          <NextImage
            width={28}
            height={28}
            src={SiteLogo}
            priority
            alt="Site Logo"
          />
        </NextLink>

        <ul className="hidden items-center justify-between gap-2 font-medium text-white xs:flex sm:gap-6">
          {navigationLinks.map(({ id, label }) => (
            <li key={id}>
              <NextLink
                href={`#${id}`}
                onClick={() => setActiveLink(id)}
                className={cn(
                  "py-1 decoration-2 underline-offset-8",
                  activeLink === id
                    ? "text-primary-100 underline"
                    : "transition hover:text-primary-100 hover:underline"
                )}
              >
                {label}
              </NextLink>
            </li>
          ))}
        </ul>

        <div className="group inline-block">
          <NextLink
            className="inline-block rounded-md border border-primary-300 bg-white px-4 py-1.5 font-medium transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[-4px_4px_0px_0px_#ffd300]"
            href="/static/Amit_Singh_Resume.pdf"
            target="_blank"
            prefetch={false}
          >
            Resume
          </NextLink>
        </div>
      </div>
    </nav>
  );
}
