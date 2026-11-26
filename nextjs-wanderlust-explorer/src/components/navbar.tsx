
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/context/favorites-context";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/experiences", label: "Experiencias" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/profile", label: "Perfil" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favoriteIds } = useFavorites();

  return (
    <header className="border-b border-white/20 bg-[#123b36] text-white">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between"
      >
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          Wanderlust Explorer
        </Link>

        <ul className="flex flex-wrap items-center gap-2">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    isActive
                      ? "bg-[#b4e7ce] text-[#123b36]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}

                  {item.href === "/favorites" &&
                    ` (${favoriteIds.length})`}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
