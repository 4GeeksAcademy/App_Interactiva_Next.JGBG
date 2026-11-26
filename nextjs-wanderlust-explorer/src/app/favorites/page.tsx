

import { experiences } from "@/data/experiences";
import FavoritesList from "@/components/favorites-list";

export default function FavoritesPage() {
  return (
    <main className="min-h-screen bg-[#123b36] text-white">

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Mis favoritos
        </h1>

        <p className="mt-4 text-lg text-[#d2e7df]">
          Encuentra todas tus experiencias favoritas en un solo lugar.
        </p>

        <FavoritesList experiences={experiences} />
      </section>
    </main>
  );
}
