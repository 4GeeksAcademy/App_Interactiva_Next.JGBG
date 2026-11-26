
"use client";

interface FilterBarProps {
  categories: string[];
  destinations: string[];
  selectedCategory: string;
  selectedDestination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

export default function FilterBar({
  categories,
  destinations,
  selectedCategory,
  selectedDestination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label
          htmlFor="category-filter"
          className="mb-2 block font-semibold"
        >
          Categoría
        </label>

        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) =>
            onCategoryChange(event.target.value)
          }
          className="w-full rounded-xl bg-white px-4 py-3 text-[#123b36] focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <option value="All">
            Todas las categorías
          </option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="destination-filter"
          className="mb-2 block font-semibold"
        >
          Destino
        </label>

        <select
          id="destination-filter"
          value={selectedDestination}
          onChange={(event) =>
            onDestinationChange(event.target.value)
          }
          className="w-full rounded-xl bg-white px-4 py-3 text-[#123b36] focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <option value="All">
            Todos los destinos
          </option>

          {destinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
