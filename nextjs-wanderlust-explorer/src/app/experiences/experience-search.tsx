
"use client";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import type { Experience } from "@/types/experience";
import SearchBar from "@/components/search-bar";
import FilterBar from "@/components/filter-bar";
import ExperienceCard from "@/components/experience-card";
import { useExperienceFilters } from "@/hooks/use-experience-filters";
import { useFavorites } from "@/context/favorites-context";

interface ExperienceSearchProps {
  experiences: Experience[];
}

export default function ExperienceSearch({
  experiences,
}: ExperienceSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { favoriteIds, toggleFavorite } = useFavorites();

  const searchQuery = searchParams.get("q") ?? "";
  const categoryParam = searchParams.get("category");
  const destinationParam = searchParams.get("destination");

  const selectedCategory = experiences.some(
    (experience) => experience.category === categoryParam
  )
    ? categoryParam!
    : "All";

  const selectedDestination = experiences.some(
    (experience) => experience.destination === destinationParam
  )
    ? destinationParam!
    : "All";

  const { categories, destinations, filteredExperiences } =
    useExperienceFilters(experiences, {
      query: searchQuery,
      category: selectedCategory,
      destination: selectedDestination,
    });

  function updateFilter(
    name: "q" | "category" | "destination",
    value: string
  ) {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || (name !== "q" && value === "All")) {
      params.delete(name);
    } else {
      params.set(name, value);
    }

    const queryString = params.toString();

    router.replace(
      queryString ? `${pathname}?${queryString}` : pathname,
      { scroll: false }
    );
  }

  function clearFilters() {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("q");
    params.delete("category");
    params.delete("destination");

    const queryString = params.toString();

    router.replace(
      queryString ? `${pathname}?${queryString}` : pathname,
      { scroll: false }
    );
  }

  return (
    <>
      <SearchBar
        query={searchQuery}
        onQueryChange={(value) => updateFilter("q", value)}
      />

      <FilterBar
        categories={categories}
        destinations={destinations}
        selectedCategory={selectedCategory}
        selectedDestination={selectedDestination}
        onCategoryChange={(value) =>
          updateFilter("category", value)
        }
        onDestinationChange={(value) =>
          updateFilter("destination", value)
        }
      />

      <p
        aria-live="polite"
        className="my-8 text-sm text-[#b4e7ce]"
      >
        {filteredExperiences.length === 1
          ? "1 experiencia disponible"
          : `${filteredExperiences.length} experiencias disponibles`}
      </p>

      {filteredExperiences.length === 0 ? (
        <div className="rounded-2xl bg-white px-6 py-16 text-center text-[#123b36] shadow-lg">
          <span className="text-5xl" aria-hidden="true">
            🔍
          </span>

          <h2 className="mt-6 text-2xl font-bold">
            No se encontraron resultados
          </h2>

          <p className="mt-4 text-gray-600">
            Prueba con otra búsqueda o modifica los filtros seleccionados.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-8 rounded-xl bg-[#123b36] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#24574e] focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </ul>
      )}
    </>
  );
}
