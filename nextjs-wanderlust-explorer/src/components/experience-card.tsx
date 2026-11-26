
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
}

export default function ExperienceCard({
  experience,
  favoriteIds,
  onToggleFavorite,
}: ExperienceCardProps) {
  const isFavorite = favoriteIds.includes(experience.id);
  return (
    <li className="overflow-hidden rounded-2xl bg-white text-[#123b36] shadow-lg">
      <div className="relative">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          width={800}
          height={600}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className="aspect-[4/3] w-full object-cover"
        />

        <button
          type="button"
          onClick={() => onToggleFavorite(experience.id)}
          aria-pressed={isFavorite}
          aria-label={`${isFavorite ? "Quitar de" : "Añadir a"} favoritos: ${experience.title}`}
          className={`absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl shadow-md transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 ${
            isFavorite ? "text-red-600" : "text-[#123b36]"
          }`}
        >
          <span aria-hidden="true">
            {isFavorite ? "♥" : "♡"}
          </span>
        </button>
      </div>

      <div className="p-5">
        <span className="inline-block rounded-full bg-[#b4e7ce] px-3 py-1 text-xs font-semibold">
          {experience.category}
        </span>

        <h2 className="mt-3 text-lg font-bold">
          {experience.title}
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          {experience.destination}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">
          <span className="font-bold">
            Precio: {experience.price}
          </span>
          <span className="text-sm font-semibold">
            ⭐ {experience.rating.toFixed(1)}
          </span>
        </div>

        <Link
          href={`/experiences/${experience.id}`}
          aria-label={`Ver experiencia: ${experience.title}`}
          className="mt-5 block rounded-xl bg-[#123b36] px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-[#24574e] focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Ver experiencia →
        </Link>
      </div>
    </li>
  );
}
