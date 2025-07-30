// Sistema simplificado de catálogo que funciona de inmediato

console.log('🚀 Simple Catalog ARREGLADO cargado');

// Función simple para formatear precios
function simpleFormatPrice(price) {
    return '$' + price.toLocaleString('es-CO');
}

// Función simple para crear tarjeta de producto
function createSimpleProductCard(product) {
    return `
        <div class="catalog-product-card" style="background: white; border: 1px solid #ddd; border-radius: 10px; padding: 20px; margin: 10px;">
            <div style="height: 250px; background: #f5f5f5; border-radius: 8px; overflow: hidden; margin-bottom: 15px;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div style="height: 100%; display: none; align-items: center; justify-content: center; text-align: center; color: #666;">
                    <div>
                        <i class="fas fa-image" style="font-size: 2rem; margin-bottom: 10px;"></i>
                        <br>
                        <span>Imagen no disponible</span>
                    </div>
                </div>
            </div>
            
            <h3 style="color: #8B5A96; margin-bottom: 10px;">${product.name}</h3>
            <p style="color: #666; margin-bottom: 15px; font-size: 0.9rem;">${product.description}</p>
            
            <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
                ${product.variants.map(variant => `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span>${variant.name}</span>
                        <strong style="color: #8B5A96;">${simpleFormatPrice(variant.price)}</strong>
                    </div>
                `).join('')}
            </div>
            
            <div style="margin-bottom: 15px; font-size: 0.9rem;">
                <div style="margin-bottom: 5px;">
                    <strong>Tallas:</strong> ${product.sizes.join(', ')}
                </div>
                <div>
                    <strong>Colores:</strong> ${product.colors.join(', ')}
                </div>
            </div>
            
            <button onclick="openPurchaseModal('${product.id}')" style="width: 100%; background: #8B5A96; color: white; border: none; padding: 12px; border-radius: 5px; cursor: pointer; font-weight: 600;">
                <i class="fas fa-shopping-cart"></i> Comprar
            </button>
        </div>
    `;
}

// Función simple para cargar productos
function loadSimpleProducts() {
    console.log('📦 Intentando cargar productos...');
    
    // Verificar que productsData esté disponible
    if (typeof productsData === 'undefined') {
        console.error('❌ productsData no disponible');
        setTimeout(loadSimpleProducts, 500); // Reintentar en 500ms
        return;
    }
    
    console.log('✅ productsData encontrado:', Object.keys(productsData));
    
    // Detectar qué página estamos viendo
    const bodysGrid = document.getElementById('bodysGrid');
    const blusasGrid = document.getElementById('blusasGrid');
    const cropTopsGrid = document.getElementById('cropTopsGrid');
    
    // Cargar bodys si estamos en la página de bodys
    if (bodysGrid) {
        console.log('🏷️ Cargando bodys...');
        const bodys = productsData.bodys || [];
        console.log('Productos bodys encontrados:', bodys.length);
        
        if (bodys.length > 0) {
            bodysGrid.innerHTML = bodys.map(createSimpleProductCard).join('');
            console.log('✅ Bodys cargados correctamente');
        } else {
            bodysGrid.innerHTML = '<div style="text-align: center; padding: 40px;">No hay productos de bodys disponibles</div>';
        }
    }
    
    // Cargar blusas si estamos en la página de blusas
    if (blusasGrid) {
        console.log('👚 Cargando blusas...');
        const blusas = productsData.blusas || [];
        console.log('Productos blusas encontrados:', blusas.length);
        
        if (blusas.length > 0) {
            blusasGrid.innerHTML = blusas.map(createSimpleProductCard).join('');
            console.log('✅ Blusas cargadas correctamente');
        } else {
            blusasGrid.innerHTML = '<div style="text-align: center; padding: 40px;">No hay productos de blusas disponibles</div>';
        }
    }
    
    // Cargar crop tops si estamos en la página de crop tops
    if (cropTopsGrid) {
        console.log('✂️ Cargando crop tops...');
        const cropTops = productsData['crop-tops'] || [];
        console.log('Productos crop tops encontrados:', cropTops.length);
        
        if (cropTops.length > 0) {
            cropTopsGrid.innerHTML = cropTops.map(createSimpleProductCard).join('');
            console.log('✅ Crop tops cargados correctamente');
        } else {
            cropTopsGrid.innerHTML = '<div style="text-align: center; padding: 40px;">No hay productos de crop tops disponibles</div>';
        }
    }
}

// Función para abrir modal de compra
function openPurchaseModal(productId) {
    const product = findProductById(productId);
    if (!product) {
        alert('Producto no encontrado');
        return;
    }
    
    // Crear modal dinámicamente
    const modal = document.createElement('div');
    modal.id = 'purchaseModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 15px; padding: 30px; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="color: #8B5A96; margin: 0;">Comprar ${product.name}</h2>
                <button onclick="closePurchaseModal()" style="background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
            </div>
            
            <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                <img src="${product.image}" alt="${product.name}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 10px;">
                <div>
                    <h3 style="color: #333; margin-bottom: 10px;">${product.name}</h3>
                    <p style="color: #666; margin-bottom: 15px;">${product.description}</p>
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4 style="color: #333; margin-bottom: 10px;">Selecciona el tipo:</h4>
                <div id="variantOptions">
                    ${product.variants.map((variant, index) => `
                        <label style="display: block; margin-bottom: 10px; cursor: pointer;">
                            <input type="radio" name="variant" value="${variant.name}" data-price="${variant.price}" ${index === 0 ? 'checked' : ''} style="margin-right: 10px;">
                            <span>${variant.name} - ${simpleFormatPrice(variant.price)}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4 style="color: #333; margin-bottom: 10px;">Selecciona la talla:</h4>
                <div id="sizeOptions" style="display: flex; gap: 10px; flex-wrap: wrap;">
                    ${product.sizes.map((size, index) => `
                        <button onclick="selectSize(this)" data-size="${size}" 
                                style="padding: 8px 16px; border: 2px solid ${index === 0 ? '#8B5A96' : '#ddd'}; 
                                       background: ${index === 0 ? '#E6E6FA' : 'white'}; border-radius: 5px; cursor: pointer;">
                            ${size}
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4 style="color: #333; margin-bottom: 10px;">Cantidad:</h4>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <button onclick="changeQuantity(-1)" style="background: #8B5A96; color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer;">-</button>
                    <span id="quantity" style="font-size: 18px; font-weight: bold; min-width: 30px; text-align: center;">1</span>
                    <button onclick="changeQuantity(1)" style="background: #8B5A96; color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer;">+</button>
                </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 18px; font-weight: bold;">Total:</span>
                    <span id="totalPrice" style="font-size: 20px; font-weight: bold; color: #8B5A96;">${simpleFormatPrice(product.variants[0].price)}</span>
                </div>
            </div>
            
            <div style="display: flex; gap: 10px;">
                <button onclick="addToCartFromModal('${productId}')" style="flex: 1; background: #8B5A96; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                </button>
                <button onclick="buyNowFromModal('${productId}')" style="flex: 1; background: #28a745; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    <i class="fas fa-whatsapp"></i> Comprar Ahora
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Agregar event listeners para actualizar precio
    const variantInputs = modal.querySelectorAll('input[name="variant"]');
    variantInputs.forEach(input => {
        input.addEventListener('change', updateModalPrice);
    });
}

// Función para cerrar modal de compra
function closePurchaseModal() {
    const modal = document.getElementById('purchaseModal');
    if (modal) {
        modal.remove();
    }
}

// Función para seleccionar talla
function selectSize(button) {
    const sizeButtons = button.parentNode.querySelectorAll('button');
    sizeButtons.forEach(btn => {
        btn.style.border = '2px solid #ddd';
        btn.style.background = 'white';
    });
    button.style.border = '2px solid #8B5A96';
    button.style.background = '#E6E6FA';
}

// Función para cambiar cantidad
function changeQuantity(change) {
    const quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.textContent) + change;
    if (quantity < 1) quantity = 1;
    if (quantity > 10) quantity = 10;
    quantityElement.textContent = quantity;
    updateModalPrice();
}

// Función para actualizar precio en modal
function updateModalPrice() {
    const selectedVariant = document.querySelector('input[name="variant"]:checked');
    const quantity = parseInt(document.getElementById('quantity').textContent);
    const price = parseInt(selectedVariant.dataset.price);
    const total = price * quantity;
    document.getElementById('totalPrice').textContent = simpleFormatPrice(total);
}

// Función para agregar al carrito desde modal - USANDO CARRITO UNIFICADO
function addToCartFromModal(productId) {
    const product = findProductById(productId);
    const selectedVariant = document.querySelector('input[name="variant"]:checked');
    const selectedSize = document.querySelector('#sizeOptions button[style*="#8B5A96"]');
    const quantity = parseInt(document.getElementById('quantity').textContent);
    
    if (!selectedSize) {
        alert('Por favor selecciona una talla');
        return;
    }
    
    const cartItem = {
        id: productId,
        name: product.name,
        variant: selectedVariant.value,
        price: parseInt(selectedVariant.dataset.price),
        size: selectedSize.dataset.size,
        quantity: quantity,
        image: product.image
    };
    
    // Usar el carrito unificado
    if (typeof addToCart === 'function') {
        addToCart(cartItem);
    } else {
        console.error('Función addToCart no disponible');
        alert('Error: No se pudo agregar al carrito');
        return;
    }
    
    closePurchaseModal();
    showSuccessMessage('¡Producto agregado al carrito!');
}

// Función para comprar ahora desde modal
function buyNowFromModal(productId) {
    const product = findProductById(productId);
    const selectedVariant = document.querySelector('input[name="variant"]:checked');
    const selectedSize = document.querySelector('#sizeOptions button[style*="#8B5A96"]');
    const quantity = parseInt(document.getElementById('quantity').textContent);
    
    if (!selectedSize) {
        alert('Por favor selecciona una talla');
        return;
    }
    
    const total = parseInt(selectedVariant.dataset.price) * quantity;
    
    const message = `¡Hola! Quiero comprar este producto:

📦 *${product.name}*
🏷️ Tipo: ${selectedVariant.value}
📏 Talla: ${selectedSize.dataset.size}
🔢 Cantidad: ${quantity}
💰 Total: ${simpleFormatPrice(total)}

¿Podrían ayudarme con el proceso de compra?`;
    
    const whatsappNumber = '573196642167'; // Número real de IrisColombiaModa
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    closePurchaseModal();
}

// Función simple para encontrar producto por ID
function findProductById(productId) {
    if (typeof productsData === 'undefined') return null;
    
    for (const category in productsData) {
        const product = productsData[category].find(p => p.id === productId);
        if (product) return product;
    }
    return null;
}

// Función para mostrar mensaje de éxito
function showSuccessMessage(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 4000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i> ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM cargado, iniciando carga simple...');
    loadSimpleProducts();
});

// También intentar cargar después de un breve delay
setTimeout(loadSimpleProducts, 1000);

// Cerrar modal al hacer clic fuera
document.addEventListener('click', function(event) {
    const modal = document.getElementById('purchaseModal');
    if (modal && event.target === modal) {
        closePurchaseModal();
    }
});

// Exportar funciones para uso global
window.openPurchaseModal = openPurchaseModal;
window.closePurchaseModal = closePurchaseModal;
window.selectSize = selectSize;
window.changeQuantity = changeQuantity;
window.updateModalPrice = updateModalPrice;
window.addToCartFromModal = addToCartFromModal;
window.buyNowFromModal = buyNowFromModal;