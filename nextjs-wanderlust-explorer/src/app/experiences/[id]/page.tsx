
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import ExperienceTitle from "@/components/experience-title";
import { notFound } from "next/navigation";
import { experiences } from "@/data/experiences";

export function generateStaticParams() {
  return experiences.map((experience) => ({
    id: String(experience.id),
  }));
}

function ExperienceDetailSkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Cargando detalle de la experiencia"
      className="overflow-hidden rounded-2xl bg-white shadow-lg"
    >
      <div className="aspect-video w-full animate-pulse bg-gray-200" />

      <div className="space-y-6 p-6 sm:p-10">
        <div className="flex items-center justify-between">
          <div className="h-8 w-28 animate-pulse rounded-full bg-[#b4e7ce]/60" />
          <div className="h-6 w-14 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="h-10 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
        <div className="h-24 w-full animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
}

async function ExperienceDetailContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const experience = experiences.find(
    (item) => String(item.id) === id
  );

  if (!experience) {
    notFound();
  }

  return (
    <article className="overflow-hidden rounded-2xl bg-white text-[#123b36] shadow-lg">
      <ExperienceTitle title={experience.title} />

      <Image
        src={experience.imageUrl}
        alt={experience.title}
        width={800}
        height={600}
        sizes="(max-width: 896px) 100vw, 896px"
        className="aspect-video w-full object-cover"
      />

      <div className="p-6 sm:p-10">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-[#b4e7ce] px-4 py-2 text-sm font-semibold">
            {experience.category}
          </span>

          <span className="font-semibold">
            ⭐ {experience.rating.toFixed(1)}
          </span>
        </div>

        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
          {experience.title}
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          📍 {experience.destination}
        </p>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold">
            Sobre esta experiencia
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            {experience.description}
          </p>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600">
            Precio
          </p>

          <p className="mt-2 text-3xl font-bold">
            {experience.price}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <main className="min-h-screen bg-[#123b36] text-white">
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <Link
          href="/experiences"
          className="mb-6 inline-block font-semibold text-[#b4e7ce] hover:underline"
        >
          ← Volver a experiencias
        </Link>

        <Suspense fallback={<ExperienceDetailSkeleton />}>
          <ExperienceDetailContent params={params} />
        </Suspense>
      </section>
    </main>
  );
}
