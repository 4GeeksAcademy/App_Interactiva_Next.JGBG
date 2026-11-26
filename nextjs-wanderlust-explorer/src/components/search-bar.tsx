
"use client";

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export default function SearchBar({
  query,
  onQueryChange,
}: SearchBarProps) {
  return (
    <div className="mt-8">
      <label
        htmlFor="experience-search"
        className="mb-2 block font-semibold"
      >
        Buscar experiencias
      </label>

      <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-[#123b36]">
        <span aria-hidden="true">🔍</span>

        <input
          id="experience-search"
          type="search"
          value={query}
          onChange={(event) =>
            onQueryChange(event.target.value)
          }
          placeholder="Buscar experiencias por título..."
          className="min-w-0 flex-1 rounded-md bg-transparent px-2 py-2 focus-visible:outline-2 focus-visible:outline-[#123b36]"
        />

        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Limpiar búsqueda"
            className="rounded-lg px-3 py-2 font-semibold hover:bg-gray-100"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
