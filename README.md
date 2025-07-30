# IrisColombiaModa - Tienda Online

## 🎨 Descripción del Proyecto

Tienda online profesional para la marca de ropa femenina "IrisColombiaModa", desarrollada con HTML, CSS y JavaScript vanilla. La tienda presenta una interfaz elegante en tonos blanco y morado, diseñada para ofrecer una experiencia de compra moderna y sofisticada.

## 📁 Estructura del Proyecto

```
iris_colombia_moda/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   ├── main.js            # Funciones principales
│   ├── products.js        # Gestión de productos
│   └── cart.js            # Carrito de compras
├── img/
│   ├── bodys/             # Imágenes de bodys
│   ├── blusas/            # Imágenes de blusas
│   └── crop-tops/         # Imágenes de crop tops
├── Logos/
│   └── logo_1.jpg         # Logo de la marca
└── README.md              # Este archivo
```

## 🛍️ Productos y Precios

### BODYS
- **Bodys sin mangas, con mangas, primavera, fiesta**
- Clásico: $49.990 COP
- Control de abdomen: $79.990 COP

### BLUSAS
- Básicas: $39.990 COP
- Moda: $49.990 COP

### CROP TOPS
- Básicos: $29.990 COP
- Rave Edition: $39.990 COP

## ✨ Características Implementadas

### 🎯 Funcionalidades Principales
- ✅ Catálogo interactivo con filtros por categoría y precio
- ✅ Vista detallada de productos con variantes y tallas
- ✅ Carrito de compras funcional con persistencia
- ✅ Sistema de checkout vía WhatsApp
- ✅ Formulario de contacto integrado
- ✅ Diseño completamente responsivo
- ✅ Navegación suave y intuitiva

### 🎨 Diseño y UX
- ✅ Paleta de colores blanco y morado
- ✅ Tipografía moderna (Poppins)
- ✅ Animaciones y transiciones suaves
- ✅ Efectos hover interactivos
- ✅ Iconografía con Font Awesome
- ✅ Layout adaptativo para móviles

### 🛒 Sistema de Carrito
- ✅ Agregar/remover productos
- ✅ Modificar cantidades
- ✅ Persistencia en localStorage
- ✅ Cálculo automático de totales
- ✅ Modal interactivo

### 📱 Integración Social
- ✅ Enlaces a redes sociales
- ✅ Checkout vía WhatsApp
- ✅ Formulario de contacto
- ✅ Testimonios de clientes

## 🚀 Cómo Usar

1. **Abrir el proyecto**: Simplemente abre `index.html` en tu navegador
2. **Navegar productos**: Usa los filtros para encontrar productos específicos
3. **Ver detalles**: Haz clic en cualquier producto para ver más información
4. **Agregar al carrito**: Selecciona variante y talla, luego agrega al carrito
5. **Finalizar compra**: El checkout te redirige a WhatsApp con el resumen del pedido

## 📋 Próximos Pasos

### Fase 2 - Contenido Visual
- [ ] Agregar fotografías de productos reales
- [ ] Incluir imágenes de modelos
- [ ] Crear banners promocionales
- [ ] Optimizar imágenes para web

### Fase 3 - Funcionalidades Avanzadas
- [ ] Sistema de búsqueda
- [ ] Wishlist/Lista de deseos
- [ ] Comparador de productos
- [ ] Sistema de reseñas
- [ ] Newsletter/Suscripciones

### Fase 4 - Integración de Pagos
- [ ] Pasarela de pagos (Mercado Pago, PayU, etc.)
- [ ] Gestión de inventario
- [ ] Sistema de pedidos
- [ ] Panel de administración

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS y Flexbox/Grid
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía (Poppins)
- **LocalStorage**: Persistencia de datos

## 📱 Compatibilidad

- ✅ Chrome/Edge (Recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Dispositivos móviles (iOS/Android)
- ✅ Tablets

## 🎨 Paleta de Colores

```css
--primary-color: #8B5A96    /* Morado principal */
--secondary-color: #B19CD9  /* Morado claro */
--accent-color: #E6E6FA     /* Lavanda */
--white: #FFFFFF            /* Blanco */
--text-color: #2C2C2C       /* Texto principal */
```

## 📞 Configuración de Contacto

Para personalizar la información de contacto, edita las siguientes variables en los archivos JavaScript:

```javascript
// En cart.js y main.js
const whatsappNumber = '573196642167'; // Número real de IrisColombiaModa
```

## 🔧 Personalización

### Agregar Nuevos Productos
Edita el archivo `js/products.js` y agrega productos al objeto `productsData`:

```javascript
const productsData = {
    bodys: [
        {
            id: 'nuevo-producto',
            name: 'Nombre del Producto',
            category: 'bodys',
            description: 'Descripción del producto',
            variants: [
                { name: 'Clásico', price: 49990 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL']
        }
    ]
};
```

### Modificar Estilos
Los estilos principales están en `css/styles.css`. Usa las variables CSS para cambios globales:

```css
:root {
    --primary-color: #TU_COLOR;
    --secondary-color: #TU_COLOR;
}
```

## 📈 SEO y Performance

- ✅ HTML semántico
- ✅ Meta tags optimizados
- ✅ Imágenes con alt text
- ✅ Carga asíncrona de recursos
- ✅ CSS y JS minificables
- ✅ Lazy loading preparado

## 🤝 Contribución

Este es un proyecto base que puede expandirse según las necesidades específicas de IrisColombiaModa. Las siguientes áreas están preparadas para futuras mejoras:

1. **Backend**: Preparado para integrar con APIs
2. **Base de datos**: Estructura de productos escalable
3. **Pagos**: Hooks preparados para pasarelas
4. **Analytics**: Eventos de tracking implementables

---

**Desarrollado para IrisColombiaModa** 💜
*Moda femenina elegante y sofisticada*