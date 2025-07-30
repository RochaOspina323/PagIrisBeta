// Funciones específicas para páginas de catálogo individual

// Variables globales para filtros
let currentSubcategory = 'all';
let currentVariant = 'all';
let currentColor = 'all';
let currentSort = 'name';
let currentCategory = '';

// Función para inicializar el catálogo según la página actual
function initializeCatalog() {
    console.log('=== INICIANDO CATÁLOGO ===');
    
    // Verificar que productsData esté disponible
    if (typeof productsData === 'undefined') {
        console.error('❌ productsData no está disponible');
        return;
    }
    
    console.log('✅ productsData disponible:', Object.keys(productsData));
    
    const currentPage = window.location.pathname.split('/').pop();
    console.log('📄 Página actual:', currentPage);
    
    switch(currentPage) {
        case 'bodys.html':
            console.log('🏷️ Cargando bodys...');
            currentCategory = 'bodys';
            loadCategoryProducts('bodys', 'bodysGrid');
            break;
        case 'blusas.html':
            console.log('👚 Cargando blusas...');
            currentCategory = 'blusas';
            loadCategoryProducts('blusas', 'blusasGrid');
            break;
        case 'crop-tops.html':
            console.log('✂️ Cargando crop tops...');
            currentCategory = 'crop-tops';
            loadCategoryProducts('crop-tops', 'cropTopsGrid');
            break;
        default:
            console.warn('⚠️ Página no reconocida:', currentPage);
    }
}

// Función para cargar productos de una categoría específica
function loadCategoryProducts(category, gridId) {
    console.log('Cargando productos para:', category, 'en grid:', gridId);
    
    const grid = document.getElementById(gridId);
    if (!grid) {
        console.error('Grid no encontrado:', gridId);
        return;
    }
    
    if (typeof productsData === 'undefined') {
        console.error('productsData no está definido');
        grid.innerHTML = '<div class="loading">Cargando productos...</div>';
        return;
    }
    
    const categoryProducts = productsData[category] || [];
    console.log('Productos encontrados:', categoryProducts.length);
    
    if (categoryProducts.length === 0) {
        console.warn('No hay productos para la categoría:', category);
        grid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                <h3>No hay productos disponibles</h3>
                <p>Esta categoría está en construcción</p>
            </div>
        `;
        return;
    }
    
    const filteredProducts = applyFilters(categoryProducts);
    const sortedProducts = applySorting(filteredProducts);
    
    if (sortedProducts.length > 0) {
        grid.innerHTML = sortedProducts.map(product => createCatalogProductCard(product)).join('');
        console.log('Productos renderizados:', sortedProducts.length);
    } else {
        grid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                <h3>No se encontraron productos</h3>
                <p>Intenta ajustar los filtros para ver más resultados</p>
            </div>
        `;
    }
    
    updateResultsCount(sortedProducts.length, categoryProducts.length);
}

// Función para formatear precios (local para catalog.js)
function formatPriceCatalog(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
}

// Función para crear tarjeta de producto en catálogo
function createCatalogProductCard(product) {
    const minPrice = Math.min(...product.variants.map(v => v.price));
    const maxPrice = Math.max(...product.variants.map(v => v.price));
    const priceDisplay = minPrice === maxPrice ? 
        formatPriceCatalog(minPrice) : 
        `${formatPriceCatalog(minPrice)} - ${formatPriceCatalog(maxPrice)}`;

    return `
        <div class="catalog-product-card" onclick="openProductModal('${product.id}')">
            <div class="catalog-product-image">
                <div class="product-image-placeholder">
                    <i class="fas fa-image"></i>
                    <span>Imagen del producto</span>
                </div>
                <div class="product-badges">
                    ${product.subcategory === 'fiesta' ? '<span class="badge badge-special">Fiesta</span>' : ''}
                    ${product.subcategory === 'rave' ? '<span class="badge badge-rave">Rave</span>' : ''}
                </div>
            </div>
            <div class="catalog-product-info">
                <h3 class="catalog-product-title">${product.name}</h3>
                <p class="catalog-product-description">${product.description}</p>
                
                <div class="catalog-product-variants">
                    ${product.variants.map(variant => `
                        <div class="catalog-variant-item">
                            <span class="variant-name">${variant.name}</span>
                            <span class="variant-price">${formatPriceCatalog(variant.price)}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="catalog-product-details">
                    <div class="available-sizes">
                        <span class="detail-label">Tallas:</span>
                        <span class="detail-value">${product.sizes.join(', ')}</span>
                    </div>
                    <div class="available-colors">
                        <span class="detail-label">Colores:</span>
                        <span class="detail-value">${product.colors.join(', ')}</span>
                    </div>
                </div>
                
                <div class="catalog-product-actions">
                    <button class="quick-add-btn" onclick="event.stopPropagation(); if(typeof quickAddToCart === 'function') quickAddToCart('${product.id}'); else console.error('quickAddToCart no disponible');">
                        <i class="fas fa-cart-plus"></i>
                        Agregar Rápido
                    </button>
                    <button class="view-details-btn" onclick="if(typeof openProductModal === 'function') openProductModal('${product.id}'); else console.error('openProductModal no disponible');">
                        <i class="fas fa-eye"></i>
                        Ver Detalles
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Función para aplicar filtros
function applyFilters(products) {
    if (!products || !Array.isArray(products)) {
        console.warn('⚠️ Productos no válidos para filtrar:', products);
        return [];
    }
    
    return products.filter(product => {
        try {
            const subcategoryMatch = currentSubcategory === 'all' || product.subcategory === currentSubcategory;
            const variantMatch = currentVariant === 'all' || 
                (product.variants && product.variants.some(v => v.name.toLowerCase().includes(currentVariant)));
            const colorMatch = currentColor === 'all' || 
                (product.colors && product.colors.some(c => c.toLowerCase().includes(currentColor.toLowerCase())));
            
            return subcategoryMatch && variantMatch && colorMatch;
        } catch (error) {
            console.error('Error al filtrar producto:', product, error);
            return false;
        }
    });
}

// Función para aplicar ordenamiento
function applySorting(products) {
    if (!products || !Array.isArray(products)) {
        console.warn('⚠️ Productos no válidos para ordenar:', products);
        return [];
    }
    
    const sortedProducts = [...products];
    
    try {
        switch(currentSort) {
            case 'name':
                return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            case 'price-low':
                return sortedProducts.sort((a, b) => {
                    const minPriceA = Math.min(...a.variants.map(v => v.price));
                    const minPriceB = Math.min(...b.variants.map(v => v.price));
                    return minPriceA - minPriceB;
                });
            case 'price-high':
                return sortedProducts.sort((a, b) => {
                    const maxPriceA = Math.max(...a.variants.map(v => v.price));
                    const maxPriceB = Math.max(...b.variants.map(v => v.price));
                    return maxPriceB - maxPriceA;
                });
            default:
                return sortedProducts;
        }
    } catch (error) {
        console.error('Error al ordenar productos:', error);
        return sortedProducts;
    }
}

// Función para actualizar contador de resultados
function updateResultsCount(filtered, total) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        if (filtered === total) {
            resultsCount.textContent = `Mostrando todos los ${total} productos`;
        } else {
            resultsCount.textContent = `Mostrando ${filtered} de ${total} productos`;
        }
    }
}

// Funciones de filtrado
function filterBySubcategory() {
    const select = document.getElementById('subcategoryFilter');
    currentSubcategory = select.value;
    reloadCurrentCatalog();
}

function filterByVariant() {
    const select = document.getElementById('variantFilter');
    currentVariant = select.value;
    reloadCurrentCatalog();
}

function filterByColor() {
    const select = document.getElementById('colorFilter');
    currentColor = select.value;
    reloadCurrentCatalog();
}

function sortProducts() {
    const select = document.getElementById('sortFilter');
    currentSort = select.value;
    reloadCurrentCatalog();
}

// Función para recargar el catálogo actual
function reloadCurrentCatalog() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'bodys.html':
            loadCategoryProducts('bodys', 'bodysGrid');
            break;
        case 'blusas.html':
            loadCategoryProducts('blusas', 'blusasGrid');
            break;
        case 'crop-tops.html':
            loadCategoryProducts('crop-tops', 'cropTopsGrid');
            break;
    }
}

// Función para resetear filtros
function resetFilters() {
    currentSubcategory = 'all';
    currentVariant = 'all';
    currentColor = 'all';
    currentSort = 'name';
    
    // Resetear selects
    const selects = document.querySelectorAll('.category-filters select');
    selects.forEach(select => {
        select.value = select.id === 'sortFilter' ? 'name' : 'all';
    });
    
    reloadCurrentCatalog();
}

// Función para esperar a que productsData esté disponible
function waitForProductsData(callback, maxAttempts = 10) {
    let attempts = 0;
    
    function checkData() {
        attempts++;
        
        if (typeof productsData !== 'undefined') {
            console.log('productsData disponible, inicializando catálogo');
            callback();
        } else if (attempts < maxAttempts) {
            console.log(`Esperando productsData... intento ${attempts}/${maxAttempts}`);
            setTimeout(checkData, 100);
        } else {
            console.error('No se pudo cargar productsData después de', maxAttempts, 'intentos');
        }
    }
    
    checkData();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM cargado, iniciando detección de página...');
    
    // Detectar página actual de múltiples maneras
    const currentPage = window.location.pathname.split('/').pop() || window.location.href.split('/').pop();
    const catalogPages = ['bodys.html', 'blusas.html', 'crop-tops.html'];
    
    console.log('🔍 Página detectada:', currentPage);
    console.log('📋 Páginas de catálogo:', catalogPages);
    
    // También verificar por la presencia de elementos específicos
    const hasBodysGrid = document.getElementById('bodysGrid');
    const hasBlusasGrid = document.getElementById('blusasGrid');
    const hasCropTopsGrid = document.getElementById('cropTopsGrid');
    
    console.log('🎯 Grids encontrados:', {
        bodys: !!hasBodysGrid,
        blusas: !!hasBlusasGrid,
        cropTops: !!hasCropTopsGrid
    });
    
    if (catalogPages.includes(currentPage) || hasBodysGrid || hasBlusasGrid || hasCropTopsGrid) {
        console.log('✅ Página de catálogo confirmada, esperando datos...');
        waitForProductsData(initializeCatalog);
    } else {
        console.log('ℹ️ No es una página de catálogo');
    }
});

// Exportar funciones para uso global
window.filterBySubcategory = filterBySubcategory;
window.filterByVariant = filterByVariant;
window.filterByColor = filterByColor;
window.sortProducts = sortProducts;
window.resetFilters = resetFilters;