"use client";

import ProductCard from '@/components/products/ProductCard';
import { CATALOG_CONFIG, CategoryKey } from '@/components/catalog/config';
import { useCatalogFilters } from '@/hooks/useCatalogFilters';

export default function CatalogPage() {
  const {
    searchTerm,
    setSearchTerm,
    category,
    subCategory,
    setSubCategory,
    filteredProducts
  } = useCatalogFilters();

  const config = CATALOG_CONFIG[category as CategoryKey] || CATALOG_CONFIG.TODOS;

  return (
    <main className="min-h-screen bg-[#060814] p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#ffea00] to-[#ff4e00] text-transparent bg-clip-text inline-block mb-4">
            {config.title}
          </h1>
          <p className="text-[#a0a3bd] text-xl">
            {config.description || "Descubre nuestra colección completa de figuras"}
          </p>
        </div>

        {/* Buscador */}
        <div className="relative mb-8">
          <input
            type="text"
            value={searchTerm}
            placeholder="Buscar productos..."
            className="w-full bg-[#101222] border border-[#1e233d] text-white px-6 py-4 rounded-xl focus:border-[#f6931d] outline-none transition-all placeholder:text-[#4a4f70]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#4a4f70]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>

        {/* Filtros de Subcategoría */}
        <div className="flex gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#1e233d]">
          {config.subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setSubCategory(sub)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all text-base whitespace-nowrap ${
                subCategory === sub.toUpperCase() || subCategory === sub
                  ? 'bg-[#f6931d] text-white'
                  : 'bg-[#1a1c2e] text-[#a0a3bd] hover:text-white hover:bg-[#1e233d]'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Grilla de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} info={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-[#101222] rounded-3xl border border-[#1e233d]">
              <p className="text-[#a0a3bd] text-xl italic">
                "No encontramos productos que coincidan con tu búsqueda... por ahora 🚀"
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
