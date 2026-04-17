"use client"; 

import { useFavorites } from '@/context/FavoritesContext';
import { Product } from '@/types/product'; 

export default function FavoriteButton({ product }: { product: any }) {
   const { toggleFavorite, isFavorite } = useFavorites();
   const  isFav = isFavorite(product.id);

    return(
        <button 
            onClick={() => toggleFavorite(product)} 
            className={`w-full py-4 rounded-xl font-bold border flex items-center justify-center gap-2 transition-all shadow-lg ${
            isFav 
              ? "bg-orange-500/10 border-orange-500 text-orange-500" 
              : "border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b]/5 shadow-[0_0_15px_rgba(245,158,11,0.1)]" 
            } `}
          >
            <span className="text-xl">
              {isFav ? '❤️' : '♡'}
            </span>
              {isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
           </button>
    )
}