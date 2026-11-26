
import { useMemo } from "react";
import type { Experience } from "@/types/experience";

interface ExperienceFilters {
  query: string;
  category: string;
  destination: string;
}

export function useExperienceFilters(
  experiences: Experience[],
  filters: ExperienceFilters
) {
  const { query, category, destination } = filters;

  const categories = useMemo(
    () =>
      [...new Set(experiences.map((item) => item.category))].sort(),
    [experiences]
  );

  const destinations = useMemo(
    () =>
      [...new Set(experiences.map((item) => item.destination))]
        .sort((a, b) => a.localeCompare(b, "es")),
    [experiences]
  );

  const filteredExperiences = useMemo(() => {
    const escapedQuery = query.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

    const searchPattern = new RegExp(escapedQuery, "i");

    return experiences.filter((experience) => {
      const matchesSearch = searchPattern.test(experience.title);

      const matchesCategory =
        category === "All" ||
        experience.category === category;

      const matchesDestination =
        destination === "All" ||
        experience.destination === destination;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDestination
      );
    });
  }, [experiences, query, category, destination]);

  return {
    categories,
    destinations,
    filteredExperiences,
  };
}
