// Carrito de compras
let cart = [];

// Función para agregar producto al carrito
function addToCart(item) {
    // Verificar si el producto ya existe en el carrito
    const existingItemIndex = cart.findIndex(cartItem => 
        cartItem.id === item.id && 
        cartItem.variant === item.variant && 
        cartItem.size === item.size
    );
    
    if (existingItemIndex > -1) {
        // Si existe, incrementar cantidad
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        // Si no existe, agregar nuevo item
        cart.push({
            ...item,
            cartId: generateCartId()
        });
    }
    
    updateCartUI();
    saveCartToStorage();
}

// Función para generar ID único para items del carrito
function generateCartId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Función para remover item del carrito
function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCartUI();
    saveCartToStorage();
}

// Función para actualizar cantidad de item
function updateCartItemQuantity(cartId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(cartId);
        return;
    }
    
    const itemIndex = cart.findIndex(item => item.cartId === cartId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity = newQuantity;
        updateCartUI();
        saveCartToStorage();
    }
}

// Función para calcular total del carrito
function calculateCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Función para actualizar UI del carrito
function updateCartUI() {
    updateCartCount();
    updateCartItems();
    updateCartTotal();
}

// Función para actualizar contador del carrito
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Mostrar/ocultar contador
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Función para actualizar items del carrito
function updateCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                <p>Tu carrito está vacío</p>
                <p>¡Agrega algunos productos para comenzar!</p>
            </div>
        `;
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image || 'img/placeholder.jpg'}" alt="${item.name}" 
                     style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div style="width: 60px; height: 60px; background: #f5f5f5; border-radius: 8px; display: none; align-items: center; justify-content: center; font-size: 0.8rem; color: #666;">
                    <i class="fas fa-image"></i>
                </div>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-variant">${item.variant} - Talla ${item.size}</div>
                <div class="cart-item-price">${formatPrice ? formatPrice(item.price) : '$' + item.price.toLocaleString('es-CO')}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateCartItemQuantity('${item.cartId}', ${item.quantity - 1})">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartItemQuantity('${item.cartId}', ${item.quantity + 1})">
                    <i class="fas fa-plus"></i>
                </button>
                <button class="remove-item" onclick="removeFromCart('${item.cartId}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Función para actualizar total del carrito
function updateCartTotal() {
    const cartTotalElement = document.getElementById('cartTotal');
    const total = calculateCartTotal();
    cartTotalElement.textContent = new Intl.NumberFormat('es-CO').format(total);
    
    // Habilitar/deshabilitar botón de checkout
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.disabled = cart.length === 0;
}

// Función para mostrar/ocultar carrito
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    const isVisible = cartModal.style.display === 'block';
    cartModal.style.display = isVisible ? 'none' : 'block';
    
    if (!isVisible) {
        updateCartUI();
    }
}

// Función para proceder al checkout mejorada
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío', 'warning');
        return;
    }
    
    // Crear modal de checkout
    const checkoutModal = document.createElement('div');
    checkoutModal.id = 'checkoutModal';
    checkoutModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 3500;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    const orderSummary = cart.map(item => 
        `• ${item.name} (${item.variant}, Talla ${item.size}) x${item.quantity} = ${formatPrice(item.price * item.quantity)}`
    ).join('\n');
    
    const total = calculateCartTotal();
    
    checkoutModal.innerHTML = `
        <div style="background: white; border-radius: 15px; padding: 30px; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="color: #8B5A96; margin: 0;">Finalizar Compra</h2>
                <button onclick="closeCheckoutModal()" style="background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h3 style="color: #333; margin-bottom: 15px;">Resumen de tu pedido:</h3>
                <div style="white-space: pre-line; font-family: monospace; font-size: 14px; line-height: 1.6;">
${orderSummary}
                </div>
                <hr style="margin: 15px 0;">
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 18px; font-weight: bold;">
                    <span>Total:</span>
                    <span style="color: #8B5A96;">${formatPrice(total)}</span>
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4 style="color: #333; margin-bottom: 10px;">Información de contacto (opcional):</h4>
                <input type="text" id="customerName" placeholder="Tu nombre" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 5px;">
                <input type="tel" id="customerPhone" placeholder="Tu teléfono" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 5px;">
                <textarea id="customerNotes" placeholder="Notas adicionales (opcional)" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; height: 80px; resize: vertical;"></textarea>
            </div>
            
            <div style="display: flex; gap: 10px;">
                <button onclick="sendWhatsAppOrder()" style="flex: 1; background: #25D366; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    <i class="fab fa-whatsapp"></i> Enviar por WhatsApp
                </button>
                <button onclick="copyOrderDetails()" style="flex: 1; background: #6c757d; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    <i class="fas fa-copy"></i> Copiar Pedido
                </button>
            </div>
            
            <div style="text-align: center; margin-top: 15px; font-size: 12px; color: #666;">
                Al continuar, serás redirigido a WhatsApp para completar tu compra
            </div>
        </div>
    `;
    
    document.body.appendChild(checkoutModal);
}

// Función para cerrar modal de checkout
function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.remove();
    }
}

// Función para enviar pedido por WhatsApp
function sendWhatsAppOrder() {
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerNotes = document.getElementById('customerNotes').value;
    
    const orderSummary = cart.map(item => 
        `• ${item.name} (${item.variant}, Talla ${item.size}) x${item.quantity} = ${formatPrice(item.price * item.quantity)}`
    ).join('\n');
    
    const total = calculateCartTotal();
    
    let message = `🛍️ *NUEVO PEDIDO - IrisColombiaModa*\n\n`;
    
    if (customerName) {
        message += `👤 *Cliente:* ${customerName}\n`;
    }
    if (customerPhone) {
        message += `📱 *Teléfono:* ${customerPhone}\n`;
    }
    
    message += `\n📦 *PRODUCTOS:*\n${orderSummary}\n\n`;
    message += `💰 *TOTAL: ${formatPrice(total)}*\n\n`;
    
    if (customerNotes) {
        message += `📝 *Notas:* ${customerNotes}\n\n`;
    }
    
    message += `¿Podrían ayudarme con el proceso de compra y envío?`;
    
    const whatsappNumber = '573196642167'; // Número real de IrisColombiaModa
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    closeCheckoutModal();
    
    // Mostrar confirmación
    showNotification('¡Pedido enviado! Te contactaremos pronto.', 'success');
    
    // Opcional: limpiar carrito después del checkout
    setTimeout(() => {
        if (confirm('¿Deseas limpiar el carrito?')) {
            clearCart();
        }
    }, 2000);
}

// Función para copiar detalles del pedido
function copyOrderDetails() {
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerNotes = document.getElementById('customerNotes').value;
    
    const orderSummary = cart.map(item => 
        `• ${item.name} (${item.variant}, Talla ${item.size}) x${item.quantity} = ${formatPrice(item.price * item.quantity)}`
    ).join('\n');
    
    const total = calculateCartTotal();
    
    let message = `PEDIDO - IrisColombiaModa\n\n`;
    
    if (customerName) {
        message += `Cliente: ${customerName}\n`;
    }
    if (customerPhone) {
        message += `Teléfono: ${customerPhone}\n`;
    }
    
    message += `\nPRODUCTOS:\n${orderSummary}\n\n`;
    message += `TOTAL: ${formatPrice(total)}\n\n`;
    
    if (customerNotes) {
        message += `Notas: ${customerNotes}\n\n`;
    }
    
    // Copiar al portapapeles
    navigator.clipboard.writeText(message).then(() => {
        showNotification('¡Pedido copiado al portapapeles!', 'success');
    }).catch(() => {
        // Fallback para navegadores que no soportan clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = message;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('¡Pedido copiado al portapapeles!', 'success');
    });
}

// Función para limpiar carrito
function clearCart() {
    cart = [];
    updateCartUI();
    saveCartToStorage();
    toggleCart();
}

// Función para guardar carrito en localStorage
function saveCartToStorage() {
    try {
        localStorage.setItem('irisColombiaModaCart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to storage:', error);
    }
}

// Función para cargar carrito desde localStorage UNIFICADO
function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('irisColombiaModaCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartUI();
            console.log('✅ Carrito cargado desde localStorage:', cart.length, 'items');
        } else {
            cart = [];
            console.log('📦 Carrito vacío inicializado');
        }
    } catch (error) {
        console.error('Error loading cart from storage:', error);
        cart = [];
    }
}

// Función para obtener información del carrito
function getCartInfo() {
    return {
        items: cart,
        totalItems: cart.reduce((total, item) => total + item.quantity, 0),
        totalPrice: calculateCartTotal()
    };
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    
    // Cerrar modales al hacer clic fuera
    document.addEventListener('click', function(event) {
        const cartModal = document.getElementById('cartModal');
        const productModal = document.getElementById('productModal');
        
        if (event.target === cartModal) {
            toggleCart();
        }
        
        if (event.target === productModal) {
            closeProductModal();
        }
    });
    
    // Cerrar modales con tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const cartModal = document.getElementById('cartModal');
            const productModal = document.getElementById('productModal');
            
            if (cartModal.style.display === 'block') {
                toggleCart();
            }
            
            if (productModal.style.display === 'block') {
                closeProductModal();
            }
        }
    });
});

// Exportar funciones para uso global
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.toggleCart = toggleCart;
window.proceedToCheckout = proceedToCheckout;
window.clearCart = clearCart;
window.getCartInfo = getCartInfo;//
 Exportar funciones adicionales para uso global
window.closeCheckoutModal = closeCheckoutModal;
window.sendWhatsAppOrder = sendWhatsAppOrder;
window.copyOrderDetails = copyOrderDetails;