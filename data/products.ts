import { Product } from '@/types/product'

export const featuredProducts : Product[] = [
    {
        id: 1,
        name: "Mazinger Z",
        category: "ANIME",
        description: "Figura coleccionable de alta gama del legendario Mazinger Z. Diseñada con precisión digital y acabados metalizados que simulan el 'Chogokin'. Una pieza de ingeniería 3D esencial para nostálgicos y coleccionistas.",
        price: "$25",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775947362/catalog-products/mazinger_perfil_frontal_t5cgnd.webp",
        images: [
            {id: "mazinger-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947362/catalog-products/mazinger_perfil_frontal_t5cgnd.webp"},
            {id: "mazinger-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947355/catalog-products/mazinger_perfil_derecho_gxux4l.webp"},
            {id: "mazinger-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947367/catalog-products/mazinger_perfil_izquierdo_zux0ul.webp"},
            {id: "mazinger-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947361/catalog-products/mazinger_perfil_dorsal_mcqpba.webp"}
        ],
        size: "18 cm",
        colors: ["Rojo", "Azul", "Negro", "Gris"],
        material:"PLA" , 
        subCategory:"Mazinger Z",
        isFeatured: false
        
    },
    {
        id: 2,
        name: "Naruto Uzumaki",
        category: "ANIME",
        description: "Figura dinámica de Naruto Uzumaki en pose de batalla. Esculpido detallado que captura la fluidez de su movimiento y expresión determinada. Fabricada en material rígido de alta calidad con pintura artesanal.",
        price: "$20",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775947376/catalog-products/naruto_perfil_frontal_rliejv.webp", 
        images: [
            {id: "naruto-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947376/catalog-products/naruto_perfil_frontal_rliejv.webp"}, 
            {id: "naruto-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947367/catalog-products/naruto_perfil_derecho_cwvwzc.webp"},
            {id: "naruto-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947376/catalog-products/naruto_perfil_izquierdo_cb5nt9.webp"},
            {id: "naruto-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947372/catalog-products/naruto_perfil_dorsal_zprvfe.webp"}
        ],
        size: "16 cm",
        colors: ["Naranja", "Negro", "Amarillo", "Azul"],
        material:"PLA" , 
        subCategory:"Naruto",
        isFeatured: false
          
    },
    {
        id: 3,
        name: "Sasuke Uchiha",
        category: "ANIME",
        description: "Réplica premium esculpida de Sasuke Uchiha. Destaca por el detalle realista en su Sharingan y el acabado nítido de su uniforme. Estructura sólida y base de exhibición diseñada para la estabilidad de la pose.",
        price: "$20",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775947386/catalog-products/sasuke_perfil_frontal_bjap46.webp", 
        images: [
            {id: "sasuke-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947386/catalog-products/sasuke_perfil_frontal_bjap46.webp"},
            {id: "sasuke-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947381/catalog-products/sasuke_perfil_derecho_cmrsvi.webp"},
            {id: "sasuke-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947387/catalog-products/sasuke_perfil_izquierdo_l8ifpc.webp"},
            {id: "sasuke-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947382/catalog-products/sasuke_perfil_dorsal_eeh2pg.webp"}
        ],
        size: "16 cm",
        colors:["Azul Marino", "Blanco", "Gris", "Morado"],
        material:"PLA" , 
        subCategory:"Naruto",
        isFeatured: true
    },
    {
        id: 4,
        name: "Pennywise (It)",
        category: "SERIES",
        price: "$30",
        description: "Figura de colección del payaso Pennywise con esculpido de alta definición. Incluye accesorios rígidos como el icónico globo rojo y base temática detallada. Pintura premium que resalta su expresión siniestra.",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775947341/catalog-products/it_perfil_frontal_k5kdjq.webp", 
        images: [
            {id: "it-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947341/catalog-products/it_perfil_frontal_k5kdjq.webp"},
            {id: "it-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947337/catalog-products/it_perfil_derecho_ddj2sd.webp"},
            {id: "it-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947345/catalog-products/it_perfil_izquierdo_qt3uov.webp"},
            {id: "it-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947340/catalog-products/it_perfil_dorsal_hwecaj.webp"}
        ],
        size: "18 cm",
        colors: ["Blanco Crema", "Rojo", "Naranja", "Gris"],
        material: "PLA", 
        subCategory:"it",
        isFeatured: false
    },
    {
        id: 5, 
        name: "Levi Ackerman",
        category: "ANIME",
        price: "$30",
        description: "Estatua detallada del Capitán Levi Ackerman. Capta con precisión el uniforme del Cuerpo de Exploración y la capa verde con tecnología de esculpido digital. Acabado mate premium y expresión seria rígida.",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775947350/catalog-products/levi_perfil_frontal_atbrvw.webp", 
        images: [
            {id: "levi-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947350/catalog-products/levi_perfil_frontal_atbrvw.webp"},
            {id: "levi-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947346/catalog-products/levi_perfil_derecho_p1klrg.webp"},
            {id: "levi-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947354/catalog-products/levi_perfil_izquierdo_xgjvpx.webp"},
            {id: "levi-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775947350/catalog-products/levi_perfil_dorsal_voxumy.webp"}
        ],
        size: "17 cm",
        colors: ["Gris Oscuro", "Verde", "Blanco", "Marrón"],
        material: "PLA", 
        subCategory:"Shingeki no Kyojin",
        isFeatured: true
    },
    {
        id: 6,
        name: "Gaara",
        category: "ANIME",
        price: "$35",
        description: "Figura premium esculpida de Gaara del Desierto. Incluye la calabaza de arena con textura rugosa simulada y esculpido facial de alta fidelidad. Estructura compacta y sólida para coleccionistas exigentes.",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775947333/catalog-products/gaara_perfil_frontal_otsgmp.webp", 
        images: [
            {id: "gaara-1", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775947333/catalog-products/gaara_perfil_frontal_otsgmp.webp"},
            {id: "gaara-2", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775947332/catalog-products/gaara_perfil_derecho_llfrvs.webp"},
            {id: "gaara-3", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775947336/catalog-products/gaara_perfil_izquierdo_uev72z.webp"},
            {id: "gaara-4", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775947332/catalog-products/gaara_perfil_dorsal_rtirjv.webp"}
        ],
        size: "18 cm",
        colors: ["Rojo Granate", "Arena", "Marrón", "Negro"],
        material: "PLA", 
        subCategory: "Naruto",
        isFeatured: false
    },
    {    
        id: 7,
        name: "Harry Potter ",
        category: "SERIES",
        subCategory: "Harry Potter",
        price: "$38", 
        description: "Figura premium esculpida del Niño que Sobrevivió. Presenta a Harry en su túnica de Hogwarts con la icónica bufanda de Gryffindor a rayas rojas y amarillas. Incluye esculpido de alta fidelidad de la cicatriz de rayo y las gafas redondas de vinilo mate, sosteniendo su varita. Estructura compacta y sólida para coleccionistas exigentes.",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1776378034/catalog-products/harry_potter_perfil_frontal_ebz4n7.webp", 
        images:[
            { id: "harry-1", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1776378034/catalog-products/harry_potter_perfil_frontal_ebz4n7.webp" },
            { id: "harry-2", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1776378034/catalog-products/harry_potter_perfil_derecho_kpnlv7.webp"}, 
            { id: "harry-3", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1776378035/catalog-products/harry_potter_perfil_izquierdo_gvdjve.webp"},
            { id: "harry-4", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1776378034/catalog-products/harry_potter_perfil_dorsal_umwezr.webp" }
        ],
        size: "16 cm",
        colors: ["Negro mate", "Gris", "Rojo carmesí", "Amarillo mostaza"],
        material: "PLA / Resina",
        isFeatured: false
    },
    {
        id: 8, 
        name: "The Joker",
        category: "PELÍCULAS",
        subCategory: "Batman / DC",
        price: "$40", 
        description: "Figura premium esculpida del Príncipe Payaso del Crimen. Presenta al Joker en un estilo chibi de vinilo premium con su traje púrpura profundo y chaleco amarillo. El esculpido de alta fidelidad captura la sonrisa amenazante y el pelo verde detallado. La base de resina de hormigón modelado . Estructura sólida y compleja para coleccionistas exigentes.",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775962732/catalog-products/joker_perfil_frontal_as02h3.webp", 
        images: [
            { id: "joker-1", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775962732/catalog-products/joker_perfil_frontal_as02h3.webp" },
            { id: "joker-2", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775962732/catalog-products/joker_perfil_derecho_v5cqwt.webp" }, 
            { id: "joker-3", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775962732/catalog-products/joker_perfil_izquierdo_rvhapu.webp" },
            { id: "joker-4", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775962733/catalog-products/joker_perfil_dorsal_hkiwrt.webp" } 
        ],
        size: "18 cm",
        colors: ["Púrpura profundo", "Amarillo vibrante", "Verde lima", "Blanco mate"],
        material: "PLA / Resina Polystone",
        isFeatured: false
    },
    {
        id: 9, 
        name: "Spider-Man",
        category: "PELÍCULAS",
        subCategory: "Marvel / Spider-Man",
        price: "$38", 
        description: "Figura premium esculpida de tu amigable vecino arácnido. Presenta a Spider-Man en una pose dinámica de 'lanzamiento de red', en su traje clásico rojo y azul. El esculpido de alta fidelidad captura las micro-texturas del vinilo mate y los grandes lentes blancos de acrílico. La base de resina de hormigón modelado . Estructura sólida y compacta para coleccionistas exigentes.",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775962733/catalog-products/spider_man_perfil_frontal_xeooxa.webp", 
        images: [
            { id: "spiderman-1", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775962733/catalog-products/spider_man_perfil_frontal_xeooxa.webp" },
            { id: "spiderman-2", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775962736/catalog-products/spider_man_perfil_derecho_gctdca.webp" }, 
            { id: "spiderman-3", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775962733/catalog-products/spider_man_perfil_izquierdo_vlrfsn.webp" },
            { id: "spiderman-4", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775962733/catalog-products/spider_man_perfil_dorsal_uxy1vf.webp" } 
        ],
        size: "16 cm",
        colors: ["Rojo vibrante", "Azul oscuro", "Blanco mate", "Negro"],
        material: "PLA / Resina Polystone",
        isFeatured: false 
    }

]