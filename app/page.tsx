import Image from "next/image";
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import CatalogoCTA from '@/components/home/CatalogCTA';

export default function Home() {
  return (
    <main className="bg-[#0b0c10] min-h-screen">
      <Hero/>
      <Categories/>
      <CatalogoCTA/>
    </main>
  );
}
