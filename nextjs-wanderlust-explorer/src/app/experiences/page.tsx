

import { Suspense } from "react";
import { experiences } from "@/data/experiences";
import ExperienceSearch from "./experience-search";

function ExperienceSearchFallback() {
  return (
    <div
      aria-busy="true"
      aria-label="Cargando experiencias"
      className="mt-8 space-y-6"
    >
      <div className="h-14 animate-pulse rounded-xl bg-white/20" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="h-12 animate-pulse rounded-xl bg-white/20" />
        <div className="h-12 animate-pulse rounded-xl bg-white/20" />
      </div>

      <p className="text-sm text-[#b4e7ce]">
        Cargando experiencias...
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className="h-80 animate-pulse rounded-2xl bg-white/20"
          />
        ))}
      </div>
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#123b36] text-white">

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Explora experiencias
        </h1>

        <p className="mt-4 text-lg text-[#d2e7df]">
          Descubre experiencias únicas alrededor del mundo.
        </p>

        <Suspense fallback={<ExperienceSearchFallback />}>
          <ExperienceSearch experiences={experiences} />
        </Suspense>
      </section>
    </main>
  );
}
