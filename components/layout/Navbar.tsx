"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Menu, X } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext'; 

export default function Navbar() {
  const { favorites } = useFavorites();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#010318]/85 backdrop-blur-md shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Vertex Atelier
        </div>

        <div className="flex items-center gap-8 md:gap-12">
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              href="/"
              className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all hover:after:w-full"
            >
              Inicio
            </Link>
            <Link
              href="/catalog?category=TODOS"
              className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all hover:after:w-full"
            >
              Catálogo
            </Link>
            <Link
              href="/catalog?category=ANIME"
              className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all hover:after:w-full"
            >
              Anime
            </Link>
            <Link
              href="/catalog?category=PELÍCULAS"
              className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all hover:after:w-full"
            >
              Películas
            </Link>
            <Link
              href="/catalog?category=SERIES"
              className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all hover:after:w-full"
            >
              Series
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/favorites"
              className="relative flex items-center group cursor-pointer"
            >
              <Heart className="w-6 h-6 text-transparent fill-red-500 transition-all duration-300 group-hover:scale-110 group-hover:fill-orange-500" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-red-500 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center text-black shadow-md">
                {favorites.length}
              </span>
            </Link>

            
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-[#010318] border-t border-gray-800 p-8 flex flex-col gap-6 text-center">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-200 hover:text-orange-400 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/catalog"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-200 hover:text-orange-400 transition-colors"
          >
            Catálogo
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-200 hover:text-orange-400 transition-colors"
          >
            Anime
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-200 hover:text-orange-400 transition-colors"
          >
            Películas
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-200 hover:text-orange-400 transition-colors"
          >
            Series
          </Link>
        </div>
      )}
    </nav>
  );
}
