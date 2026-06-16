export interface CategoryConfig {
  title: string;
  subcategories: string[];
  bannerUrl?: string;
  description?: string;
}

export const CATALOG_CONFIG: Record<string, CategoryConfig> = {
  TODOS: {
    title: "Catálogo de Productos",
    subcategories: ["TODOS", "ANIME", "PELÍCULAS", "SERIES"],
    description: "Descubre nuestra colección completa de figuras"
  },
  ANIME: {
    title: "Universo Anime",
    subcategories: ["TODOS", "NARUTO", "DBZ", "SHINGEKI"],
    description: "Las mejores figuras de tus series japonesas favoritas"
  },
  PELÍCULAS: {
    title: "Iconos del Cine",
    subcategories: ["TODOS", "MARVEL", "DC", "TERROR"],
    description: "Coleccionables de los grandes éxitos de la pantalla grande"
  },
  SERIES: {
    title: "Series Aclamadas",
    subcategories: ["TODOS", "NETFLIX", "HBO", "FANTASÍA"],
    description: "Tus personajes favoritos de la televisión en casa"
  }
};

export type CategoryKey = keyof typeof CATALOG_CONFIG;
