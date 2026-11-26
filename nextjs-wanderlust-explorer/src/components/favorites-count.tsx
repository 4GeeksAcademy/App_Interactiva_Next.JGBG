
"use client";

import { useFavorites } from "@/context/favorites-context";

export default function FavoritesCount() {
  const { favoriteIds } = useFavorites();

  return (
    <div aria-live="polite">
      <p className="mt-3 text-4xl font-bold">
        {favoriteIds.length}
      </p>

      <p className="mt-2 text-gray-600">
        {favoriteIds.length === 1
          ? "Experiencia favorita"
          : "Experiencias favoritas"}
      </p>
    </div>
  );
}
