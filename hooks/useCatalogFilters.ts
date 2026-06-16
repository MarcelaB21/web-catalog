import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product } from '@/types/product';
import { featuredProducts } from '@/data/products';

export function useCatalogFilters() {
  const searchParams = useSearchParams();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('TODOS');
  const [subCategory, setSubCategory] = useState('TODOS');

  // Sincronizar categoría desde URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setCategory(categoryFromUrl.toUpperCase());
    } else {
      setCategory('TODOS');
    }
    setSubCategory('TODOS');
  }, [searchParams]);

  // Lógica de filtrado memoizada
  const filteredProducts = useMemo(() => {
    return featuredProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'TODOS' || product.category === category;
      
      const matchesSub = 
        subCategory === 'TODOS' || 
        product.subCategory === subCategory ||
        product.category === subCategory;

      return matchesSearch && matchesCategory && matchesSub;
    });
  }, [searchTerm, category, subCategory]);

  const handleSubCategoryChange = (sub: string) => {
    if (category === 'TODOS') {
      setSubCategory(sub.toUpperCase());
    } else {
      setSubCategory(sub);
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    category,
    subCategory,
    setSubCategory: handleSubCategoryChange,
    filteredProducts
  };
}
