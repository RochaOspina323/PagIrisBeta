// Base de datos de productos
const productsData = {
    bodys: [
        // BODYS SIN MANGAS
        {
            id: 'body-cloe',
            name: 'Body Cloe',
            category: 'bodys',
            subcategory: 'sin-mangas',
            description: 'Body sin mangas elegante y versátil, perfecto para cualquier ocasión.',
            image: 'img/bodys/sin-mangas/Body-Cloe.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-iris',
            name: 'Body Iris',
            category: 'bodys',
            subcategory: 'sin-mangas',
            description: 'Body sin mangas de corte premium con acabados de lujo.',
            image: 'img/bodys/sin-mangas/Body-Iris.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-lina',
            name: 'Body Lina',
            category: 'bodys',
            subcategory: 'sin-mangas',
            description: 'Body sin mangas con diseño deportivo y tela transpirable.',
            image: 'img/bodys/sin-mangas/Body-Lina.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-lucy',
            name: 'Body Lucy',
            category: 'bodys',
            subcategory: 'sin-mangas',
            description: 'Body sin mangas básico, esencial en tu guardarropa.',
            image: 'img/bodys/sin-mangas/Body-Lucy.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-noa',
            name: 'Body Noa',
            category: 'bodys',
            subcategory: 'sin-mangas',
            description: 'Body sin mangas con estilo único y moderno.',
            image: 'img/bodys/sin-mangas/Body-Noa.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-pao',
            name: 'Body Pao',
            category: 'bodys',
            subcategory: 'sin-mangas',
            description: 'Body sin mangas con diseño sofisticado y elegante.',
            image: 'img/bodys/sin-mangas/Body-Pao.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },

        // BODYS CON MANGAS
        {
            id: 'body-brisa',
            name: 'Body Brisa',
            category: 'bodys',
            subcategory: 'con-mangas',
            description: 'Body con mangas largas ideal para looks sofisticados.',
            image: 'img/bodys/con-mangas/Body-Brisa.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-bubi',
            name: 'Body Bubi',
            category: 'bodys',
            subcategory: 'con-mangas',
            description: 'Body con mangas perfecto para el día a día.',
            image: 'img/bodys/con-mangas/Body-Bubi.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-hanna',
            name: 'Body Hanna',
            category: 'bodys',
            subcategory: 'con-mangas',
            description: 'Body con mangas ideal para looks de oficina.',
            image: 'img/bodys/con-mangas/Body-Hanna.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-tania',
            name: 'Body Tania',
            category: 'bodys',
            subcategory: 'con-mangas',
            description: 'Body con mangas con diseño moderno y actual.',
            image: 'img/bodys/con-mangas/Body-Tania.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-vane',
            name: 'Body Vane',
            category: 'bodys',
            subcategory: 'con-mangas',
            description: 'Body con mangas elegante y versátil.',
            image: 'img/bodys/con-mangas/Body-Vane.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-yeni',
            name: 'Body Yeni',
            category: 'bodys',
            subcategory: 'con-mangas',
            description: 'Body con mangas con estilo único y sofisticado.',
            image: 'img/bodys/con-mangas/Body-Yeni.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },

        // BODYS PRIMAVERA
        {
            id: 'body-dafne',
            name: 'Body Dafne',
            category: 'bodys',
            subcategory: 'primavera',
            description: 'Body fresco y ligero perfecto para la temporada primaveral.',
            image: 'img/bodys/primavera/Body-Dafne.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-estefa',
            name: 'Body Estefa',
            category: 'bodys',
            subcategory: 'primavera',
            description: 'Body con estampado floral ideal para primavera.',
            image: 'img/bodys/primavera/Body-Estefa.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-lucia',
            name: 'Body Lucia',
            category: 'bodys',
            subcategory: 'primavera',
            description: 'Body en tonos pastel suaves y delicados.',
            image: 'img/bodys/primavera/Body-Lucia.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-meli',
            name: 'Body Meli',
            category: 'bodys',
            subcategory: 'primavera',
            description: 'Body con colores vibrantes para primavera.',
            image: 'img/bodys/primavera/Body-Meli.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-vale',
            name: 'Body Vale',
            category: 'bodys',
            subcategory: 'primavera',
            description: 'Body primaveral con diseño fresco y moderno.',
            image: 'img/bodys/primavera/Body-Vale.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },

        // BODYS FIESTA
        {
            id: 'body-nina',
            name: 'Body Nina',
            category: 'bodys',
            subcategory: 'fiesta',
            description: 'Body elegante con detalles brillantes para fiestas.',
            image: 'img/bodys/fiesta/Body-Nina.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-rita',
            name: 'Body Rita',
            category: 'bodys',
            subcategory: 'fiesta',
            description: 'Body con lentejuelas para brillar en cualquier evento.',
            image: 'img/bodys/fiesta/Body-Rita.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-sofi',
            name: 'Body Sofi',
            category: 'bodys',
            subcategory: 'fiesta',
            description: 'Body en tela satinada para ocasiones especiales.',
            image: 'img/bodys/fiesta/Body-Sofi.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-sol',
            name: 'Body Sol',
            category: 'bodys',
            subcategory: 'fiesta',
            description: 'Body con detalles de encaje para eventos elegantes.',
            image: 'img/bodys/fiesta/Body-Sol.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-tere',
            name: 'Body Tere',
            category: 'bodys',
            subcategory: 'fiesta',
            description: 'Body glamoroso perfecto para fiestas especiales.',
            image: 'img/bodys/fiesta/Body-Tere.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'body-vilma',
            name: 'Body Vilma',
            category: 'bodys',
            subcategory: 'fiesta',
            description: 'Body sofisticado con estilo único para eventos.',
            image: 'img/bodys/fiesta/Body-Vilma.jpg',
            variants: [
                { name: 'Clásico', price: 49990 },
                { name: 'Control de abdomen', price: 79990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        }
    ],
    blusas: [
        // BLUSAS BÁSICAS - $39.990
        {
            id: 'blusa-bibi',
            name: 'Blusa Bibi',
            category: 'blusas',
            subcategory: 'basicas',
            description: 'Blusa básica versátil que combina con todo tu guardarropa.',
            image: 'img/blusas/basicas/Blusa-Bibi.jpg',
            variants: [
                { name: 'Básica', price: 39990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'blusa-brisa-basica',
            name: 'Blusa Brisa',
            category: 'blusas',
            subcategory: 'basicas',
            description: 'Blusa básica súper cómoda para el día a día.',
            image: 'img/blusas/basicas/Blusa-Brisa.jpg',
            variants: [
                { name: 'Básica', price: 39990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'blusa-cloe-basica',
            name: 'Blusa Cloe',
            category: 'blusas',
            subcategory: 'basicas',
            description: 'Blusa básica de corte clásico, perfecta para cualquier ocasión.',
            image: 'img/blusas/basicas/Blusa-Cloe.jpg',
            variants: [
                { name: 'Básica', price: 39990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'blusa-iris-basica',
            name: 'Blusa Iris',
            category: 'blusas',
            subcategory: 'basicas',
            description: 'Blusa básica casual ideal para looks relajados.',
            image: 'img/blusas/basicas/Blusa-Iris.jpg',
            variants: [
                { name: 'Básica', price: 39990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'blusa-lina-basica',
            name: 'Blusa Lina',
            category: 'blusas',
            subcategory: 'basicas',
            description: 'Blusa básica perfecta para el ambiente de oficina.',
            image: 'img/blusas/basicas/Blusa-Lina.jpg',
            variants: [
                { name: 'Básica', price: 39990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'blusa-lucy-basica',
            name: 'Blusa Lucy',
            category: 'blusas',
            subcategory: 'basicas',
            description: 'Blusa básica cómoda para fines de semana relajados.',
            image: 'img/blusas/basicas/Blusa-Lucy.jpg',
            variants: [
                { name: 'Básica', price: 39990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },

        // BLUSAS MODA - $49.990
        {
            id: 'blusa-abril',
            name: 'Blusa Abril',
            category: 'blusas',
            subcategory: 'moda',
            description: 'Blusa de moda con diseño actual y detalles únicos.',
            image: 'img/blusas/moda/Blusa-Abril.jpg',
            variants: [
                { name: 'Moda', price: 49990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'blusa-ari',
            name: 'Blusa Ari',
            category: 'blusas',
            subcategory: 'moda',
            description: 'Blusa chic con estilo moderno y elegante.',
            image: 'img/blusas/moda/Blusa-Ari.jpg',
            variants: [
                { name: 'Moda', price: 49990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'blusa-emma',
            name: 'Blusa Emma',
            category: 'blusas',
            subcategory: 'moda',
            description: 'Blusa elegante con detalles sofisticados.',
            image: 'img/blusas/moda/Blusa-Emma.jpg',
            variants: [
                { name: 'Moda', price: 49990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'blusa-laia',
            name: 'Blusa Laia',
            category: 'blusas',
            subcategory: 'moda',
            description: 'Blusa con diseño llamativo que marca la diferencia.',
            image: 'img/blusas/moda/Blusa-Laia.jpg',
            variants: [
                { name: 'Moda', price: 49990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'blusa-lia',
            name: 'Blusa Lia',
            category: 'blusas',
            subcategory: 'moda',
            description: 'Blusa con estilo bohemio y detalles únicos.',
            image: 'img/blusas/moda/Blusa-Lia.jpg',
            variants: [
                { name: 'Moda', price: 49990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'blusa-mara',
            name: 'Blusa Mara',
            category: 'blusas',
            subcategory: 'moda',
            description: 'Blusa glamorosa con detalles brillantes.',
            image: 'img/blusas/moda/Blusa-Mara.jpg',
            variants: [
                { name: 'Moda', price: 49990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'blusa-sara',
            name: 'Blusa Sara',
            category: 'blusas',
            subcategory: 'moda',
            description: 'Blusa moderna con estilo único y sofisticado.',
            image: 'img/blusas/moda/Blusa-Sara.jpg',
            variants: [
                { name: 'Moda', price: 49990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'blusa-zoe',
            name: 'Blusa Zoe',
            category: 'blusas',
            subcategory: 'moda',
            description: 'Blusa trendy con diseño contemporáneo.',
            image: 'img/blusas/moda/Blusa-Zoe.jpg',
            variants: [
                { name: 'Moda', price: 49990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        }
    ],
    'crop-tops': [
        // CROP TOPS BÁSICOS - $29.990
        {
            id: 'crop-bibi',
            name: 'Crop Top Bibi',
            category: 'crop-tops',
            subcategory: 'basicos',
            description: 'Crop top básico perfecto para looks casuales y deportivos.',
            image: 'img/crop-tops/basicos/Crop-Top-Bibi.jpg',
            variants: [
                { name: 'Básico', price: 29990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'crop-brisa',
            name: 'Crop Top Brisa',
            category: 'crop-tops',
            subcategory: 'basicos',
            description: 'Crop top básico súper cómodo para uso diario.',
            image: 'img/crop-tops/basicos/Crop-Top-Brisa.jpg',
            variants: [
                { name: 'Básico', price: 29990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'crop-cloe',
            name: 'Crop Top Cloe',
            category: 'crop-tops',
            subcategory: 'basicos',
            description: 'Crop top básico deportivo con tela transpirable.',
            image: 'img/crop-tops/basicos/Crop-Top-Cloe.jpg',
            variants: [
                { name: 'Básico', price: 29990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'crop-iris',
            name: 'Crop Top Iris',
            category: 'crop-tops',
            subcategory: 'basicos',
            description: 'Crop top básico casual para looks relajados.',
            image: 'img/crop-tops/basicos/Crop-Top-Iris.jpg',
            variants: [
                { name: 'Básico', price: 29990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'crop-lina',
            name: 'Crop Top Lina',
            category: 'crop-tops',
            subcategory: 'basicos',
            description: 'Crop top básico con corte moderno y actual.',
            image: 'img/crop-tops/basicos/Crop-Top-Lina.jpg',
            variants: [
                { name: 'Básico', price: 29990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'crop-lucy',
            name: 'Crop Top Lucy',
            category: 'crop-tops',
            subcategory: 'basicos',
            description: 'Crop top básico con diseño minimalista.',
            image: 'img/crop-tops/basicos/Crop-Top-Lucy.jpg',
            variants: [
                { name: 'Básico', price: 29990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },

        // CROP TOPS RAVE EDITION - $39.990
        {
            id: 'crop-eva',
            name: 'Crop Top Eva',
            category: 'crop-tops',
            subcategory: 'rave',
            description: 'Crop top especial para fiestas y eventos rave con diseño único.',
            image: 'img/crop-tops/rave/Crop-Top-Eva.jpg',
            variants: [
                { name: 'Rave Edition', price: 39990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'crop-isa',
            name: 'Crop Top Isa',
            category: 'crop-tops',
            subcategory: 'rave',
            description: 'Crop top rave con efectos brillantes y diseño llamativo.',
            image: 'img/crop-tops/rave/Crop-Top-Isa.jpg',
            variants: [
                { name: 'Rave Edition', price: 39990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'crop-julia',
            name: 'Crop Top Julia',
            category: 'crop-tops',
            subcategory: 'rave',
            description: 'Crop top rave en colores neón vibrantes.',
            image: 'img/crop-tops/rave/Crop-Top-Julia.jpg',
            variants: [
                { name: 'Rave Edition', price: 39990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'crop-lia-rave',
            name: 'Crop Top Lia',
            category: 'crop-tops',
            subcategory: 'rave',
            description: 'Crop top rave con glitter y detalles brillantes.',
            image: 'img/crop-tops/rave/Crop-Top-Lia.jpg',
            variants: [
                { name: 'Rave Edition', price: 39990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        },
        {
            id: 'crop-mar',
            name: 'Crop Top Mar',
            category: 'crop-tops',
            subcategory: 'rave',
            description: 'Crop top rave con efectos láser y holográficos.',
            image: 'img/crop-tops/rave/Crop-Top-Mar.jpg',
            variants: [
                { name: 'Rave Edition', price: 39990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Disponible en varios colores']
        }
    ]
};

// Variables globales
let filteredProducts = [];
let currentCategory = 'all';
let currentPriceRange = 'all';

// Función para formatear precios
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
}

// Función para crear HTML de tarjeta de producto
function createProductCard(product) {
    const minPrice = Math.min(...product.variants.map(v => v.price));
    const maxPrice = Math.max(...product.variants.map(v => v.price));
    const priceDisplay = minPrice === maxPrice ? 
        formatPrice(minPrice) : 
        `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`;

    return `
        <div class="product-card" onclick="openProductModal('${product.id}')">
            <div class="product-image">
                Imagen del producto
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-variants">
                    ${product.variants.map(variant => `
                        <div class="variant-option">
                            <span class="variant-name">${variant.name}</span>
                            <span class="variant-price">${formatPrice(variant.price)}</span>
                        </div>
                    `).join('')}
                </div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); quickAddToCart('${product.id}')">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    `;
}

// Función para renderizar productos
function renderProducts() {
    const categories = ['bodys', 'blusas', 'crop-tops'];
    
    categories.forEach(category => {
        const grid = document.getElementById(`${category}-grid`);
        if (grid) {
            const categoryProducts = productsData[category] || [];
            const filteredCategoryProducts = filterProductsByCategory(categoryProducts);
            
            if (filteredCategoryProducts.length > 0) {
                grid.innerHTML = filteredCategoryProducts.map(createProductCard).join('');
                document.getElementById(category).style.display = 'block';
            } else {
                document.getElementById(category).style.display = 'none';
            }
        }
    });
}

// Función para filtrar productos por categoría actual
function filterProductsByCategory(products) {
    return products.filter(product => {
        const categoryMatch = currentCategory === 'all' || product.category === currentCategory;
        const priceMatch = checkPriceRange(product);
        return categoryMatch && priceMatch;
    });
}

// Función para verificar rango de precios
function checkPriceRange(product) {
    if (currentPriceRange === 'all') return true;
    
    const [min, max] = currentPriceRange.split('-').map(Number);
    const productPrices = product.variants.map(v => v.price);
    const minProductPrice = Math.min(...productPrices);
    
    return minProductPrice >= min && minProductPrice <= max;
}

// Función para filtrar productos
function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    currentCategory = categoryFilter.value;
    currentPriceRange = priceFilter.value;
    
    renderProducts();
}

// Función para agregar rápidamente al carrito
function quickAddToCart(productId) {
    const product = findProductById(productId);
    if (product) {
        // Agregar la primera variante por defecto
        const defaultVariant = product.variants[0];
        const defaultSize = product.sizes[0];
        
        addToCart({
            id: productId,
            name: product.name,
            variant: defaultVariant.name,
            price: defaultVariant.price,
            size: defaultSize,
            quantity: 1,
            image: product.image
        });
        
        // Mostrar feedback visual
        showAddToCartFeedback();
    }
}

// Función para encontrar producto por ID
function findProductById(productId) {
    for (const category in productsData) {
        const product = productsData[category].find(p => p.id === productId);
        if (product) return product;
    }
    return null;
}

// Función para mostrar feedback de agregar al carrito
function showAddToCartFeedback() {
    // Crear elemento de feedback
    const feedback = document.createElement('div');
    feedback.textContent = '¡Producto agregado al carrito!';
    feedback.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(feedback);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        feedback.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 3000);
}

// Función para abrir modal de producto
function openProductModal(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('productModalBody');
    
    modalBody.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-image">
                Imagen del producto
            </div>
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <p class="product-detail-description">${product.description}</p>
                
                <div class="variant-selector">
                    <h4>Selecciona el tipo:</h4>
                    <div class="variant-options">
                        ${product.variants.map((variant, index) => `
                            <div class="variant-option-detail ${index === 0 ? 'selected' : ''}" 
                                 onclick="selectVariant(this, '${variant.name}', ${variant.price})">
                                <span>${variant.name}</span>
                                <strong>${formatPrice(variant.price)}</strong>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="size-selector">
                    <h4>Selecciona la talla:</h4>
                    <div class="size-options">
                        ${product.sizes.map((size, index) => `
                            <div class="size-option ${index === 0 ? 'selected' : ''}" 
                                 onclick="selectSize(this, '${size}')">${size}</div>
                        `).join('')}
                    </div>
                </div>
                
                <button class="add-to-cart-detail" onclick="addToCartFromModal('${productId}')">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Función para cerrar modal de producto
function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Función para seleccionar variante
function selectVariant(element, variantName, price) {
    // Remover selección anterior
    element.parentNode.querySelectorAll('.variant-option-detail').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Agregar selección actual
    element.classList.add('selected');
    
    // Guardar selección
    element.parentNode.setAttribute('data-selected-variant', variantName);
    element.parentNode.setAttribute('data-selected-price', price);
}

// Función para seleccionar talla
function selectSize(element, size) {
    // Remover selección anterior
    element.parentNode.querySelectorAll('.size-option').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Agregar selección actual
    element.classList.add('selected');
    
    // Guardar selección
    element.parentNode.setAttribute('data-selected-size', size);
}

// Función para agregar al carrito desde modal
function addToCartFromModal(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    const variantSelector = document.querySelector('.variant-options');
    const sizeSelector = document.querySelector('.size-options');
    
    const selectedVariant = variantSelector.getAttribute('data-selected-variant') || product.variants[0].name;
    const selectedPrice = parseInt(variantSelector.getAttribute('data-selected-price')) || product.variants[0].price;
    const selectedSize = sizeSelector.getAttribute('data-selected-size') || product.sizes[0];
    
    addToCart({
        id: productId,
        name: product.name,
        variant: selectedVariant,
        price: selectedPrice,
        size: selectedSize,
        quantity: 1,
        image: product.image
    });
    
    closeProductModal();
    showAddToCartFeedback();
}

// Inicializar productos cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});

// Exportar funciones para uso global
window.formatPrice = formatPrice;
window.findProductById = findProductById;
window.quickAddToCart = quickAddToCart;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.selectVariant = selectVariant;
window.selectSize = selectSize;
window.addToCartFromModal = addToCartFromModal;
