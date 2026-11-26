

import Link from "next/link";
import FavoritesCount from "@/components/favorites-count";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#123b36] text-white">

      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Mi perfil
        </h1>

        <p className="mt-4 text-lg text-[#d2e7df]">
          Consulta tu información y tus experiencias favoritas.
        </p>

        <article className="mt-10 rounded-2xl bg-white p-8 text-center text-[#123b36] shadow-lg sm:p-12">
          <div
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#b4e7ce] text-3xl font-bold"
            aria-hidden="true"
          >
            EW
          </div>

          <h2 className="mt-6 text-2xl font-bold">
            Explorador Wanderlust
          </h2>

          <p className="mt-3 text-gray-600">
            Amante de los viajes y las aventuras
          </p>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <span className="text-4xl" aria-hidden="true">
              ♡
            </span>

            <FavoritesCount />

            <Link
              href="/favorites"
              className="mt-8 inline-block rounded-xl bg-[#123b36] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#24574e] focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Ver mis favoritos →
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
