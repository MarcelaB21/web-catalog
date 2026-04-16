import Link from 'next/link';
import { MessageSquare } from "lucide-react";

const IconX = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
);

const IconInstagram = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const IconTikTok = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.62 4.14.94 1.1 2.24 1.83 3.66 2.13v3.93a9.03 9.03 0 0 1-5.17-1.57v6.86c0 1.48-.36 2.91-1.04 4.19a8.91 8.91 0 0 1-7.1 5.08c-1.4.15-2.82.02-4.16-.41a8.9 8.9 0 0 1-5.19-5.18A8.88 8.88 0 0 1 0 15.35c.16-4.63 3.84-8.39 8.47-8.58v4.06a4.85 4.85 0 0 0-4.41 4.54c-.06 2.69 2.12 4.9 4.8 4.9.46 0 .92-.06 1.36-.19a4.83 4.83 0 0 0 3.3-4.61V0h.01Z"/></svg>
);





const footerLinks=[  
    {
        title: 'Enlaces',
        links: [  
            { name: 'Inicio', href: '/' },
            { name: 'Catálogo', href: '/catalog'},
            { name: 'Contacto', href: '#' },
            { name: 'Blog', href: '#' },
        ],
    },
    {
        title: 'Categorías',
        links: [
            { name: 'Anime', href: '#' },
            { name: 'Peliculas', href: '#' },
            { name: 'Series', href: '#' },
        ],
    },
]

const socialLinks=[
    {icon: IconX, href:"#"},
    {icon: IconInstagram , href:"#"},
    {icon: IconTikTok, href:"#"},
    {icon:MessageSquare, href:"#"},
]

const legalLinks = [
    { name: 'Privacidad', href: '#' },
    { name: 'Términos', href: '#' },
    { name: 'Política de cookies', href: '#' },
]



export default function Footer(){
    const currentYear =new Date().getFullYear();

    return(
        <footer className ="bg-[#030712] text-gray-400 px-6 sm:px-10 md:px-16 lg:px-24 py-16 border-t border-gray-900">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-16">

                    <div className="col-span-2 md:col-span-2 space-y-4">
                        <h2 className="text-2xl font-bold text-amber-400">Vertex Atelier</h2>
                        <p className="text-gray-500 max-w-sm leading-relaxed">
                            Figuras de tus personajes favoritos. Hecho con precisión para coleccionistas exigentes.
                        </p>
                    </div>

                    {footerLinks.map((section)=>(
                        <div key={section.title} className="space-y-4">
                            <h3 className="font-semibold text-white text-base">{section.title}</h3>
                            <ul className="space-y-2.5">
                                {section.links.map((link)=>(
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-amber-400 transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="space-y-4 col-span-2 md:col-span-1">
                        <h3 className="font-semibold text-white text-base">Síguenos</h3>
                        <div className="flex gap-4" >
                            {socialLinks.map((social,index)=>(
                                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-900 rounded-full hover:bg-amber-400 group transition-colors">
                                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[#030712]" strokeWidth={1.5}/>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-10 mt-6 border-t border-gray-900 text-xs text-gray-600 flex flex-col sm:flex-row justify-between gap-4">
                    <p>©{currentYear} Vertex Atelier. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        {legalLinks.map((link)=>(
                            <Link key={link.name}href={link.href} className="hover:text-amber-400 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}