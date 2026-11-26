
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#123b36] text-white">

      <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 py-16 text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-[#b4e7ce]">
          Tu próxima aventura comienza aquí
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
          Descubre experiencias inolvidables alrededor del mundo
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d2e7df] sm:text-xl">
          Explora 100 experiencias únicas, descubre nuevos destinos
          y encuentra tu próxima aventura.
        </p>

        <Link
          href="/experiences"
          className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-[#123b36] transition-colors hover:bg-[#b4e7ce] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Explorar experiencias
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
