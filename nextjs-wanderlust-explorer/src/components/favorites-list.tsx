
"use client";

import Link from "next/link";
import ExperienceCard from "@/components/experience-card";
import { useFavorites } from "@/context/favorites-context";
import type { Experience } from "@/types/experience";

interface FavoritesListProps {
  experiences: Experience[];
}

export default function FavoritesList({
  experiences,
}: FavoritesListProps) {
  const { favoriteIds, toggleFavorite } =
    useFavorites();

  const favoriteExperiences = experiences.filter(
    (experience) => favoriteIds.includes(experience.id)
  );

  if (favoriteExperiences.length === 0) {
    return (
      <div className="mt-10 flex flex-col items-center rounded-2xl bg-white px-6 py-16 text-center text-[#123b36] shadow-lg">
        <span className="text-6xl" aria-hidden="true">
          ♡
        </span>

        <h2 className="mt-6 text-2xl font-bold">
          Todavía no tienes favoritos
        </h2>

        <p className="mt-4 max-w-md text-gray-600">
          Explora nuevas experiencias y guarda las que más te gusten.
        </p>

        <Link
          href="/experiences"
          className="mt-8 rounded-xl bg-[#123b36] px-6 py-3 font-semibold text-white hover:bg-[#24574e]"
        >
          Explorar experiencias →
        </Link>
      </div>
    );
  }

  return (
    <>
      <p
        aria-live="polite"
        className="my-8 text-[#b4e7ce]"
      >
        {favoriteExperiences.length === 1
          ? "1 experiencia favorita"
          : `${favoriteExperiences.length} experiencias favoritas`}
      </p>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favoriteExperiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </ul>
    </>
  );
}
