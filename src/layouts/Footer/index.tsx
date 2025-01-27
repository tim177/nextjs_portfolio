"use client";

import { GithubIcon, LinkedinIcon, TwitterIcon } from "@src/icons";
import { NextLink } from "@src/components/common";

export default function Footer() {
  return (
    <footer className="h-footer flex cursor-default items-center bg-primary-300 text-white">
      <div className="container flex items-center justify-between text-sm">
        <div className="flex items-center gap-2.5">
          <NextLink href="https://github.com/tim177" title="Github">
            <GithubIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
          </NextLink>
          <NextLink
            href="https://www.linkedin.com/in/amit-singh-b19022217/"
            title="Linkedin"
          >
            <LinkedinIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
          </NextLink>
          <NextLink href="https://twitter.com/amitsingh180900" title="Twitter">
            <TwitterIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
          </NextLink>
        </div>
        <p className="hidden sm:inline-block">
          Made with ❤️ © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
