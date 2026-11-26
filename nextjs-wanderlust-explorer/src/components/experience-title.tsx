
"use client";

import { useEffect } from "react";

interface ExperienceTitleProps {
  title: string;
}

export default function ExperienceTitle({
  title,
}: ExperienceTitleProps) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `${title} | Wanderlust Explorer`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return null;
}
