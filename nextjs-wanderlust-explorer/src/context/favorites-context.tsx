
"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface FavoritesContextType {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<
  FavoritesContextType | undefined
>(undefined);

export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  function toggleFavorite(id: number) {
    setFavoriteIds((previousIds) =>
      previousIds.includes(id)
        ? previousIds.filter((favoriteId) => favoriteId !== id)
        : [...previousIds, id]
    );
  }

  function isFavorite(id: number) {
    return favoriteIds.includes(id);
  }

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites debe utilizarse dentro de FavoritesProvider"
    );
  }

  return context;
}
