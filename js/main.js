// Funciones principales de la aplicación

// Función para scroll suave a secciones
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Función para toggle del menú móvil
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Función para manejar el envío del formulario de contacto
function submitContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const name = formData.get('name') || form.querySelector('input[type="text"]').value;
    const email = formData.get('email') || form.querySelector('input[type="email"]').value;
    const phone = formData.get('phone') || form.querySelector('input[type="tel"]').value;
    const message = formData.get('message') || form.querySelector('textarea').value;
    
    // Validar campos requeridos
    if (!name || !email || !message) {
        showNotification('Por favor completa todos los campos requeridos', 'error');
        return;
    }
    
    // Crear mensaje para WhatsApp
    const whatsappMessage = `¡Hola! Me pongo en contacto desde la página web de IrisColombiaModa.
    
Nombre: ${name}
Email: ${email}
${phone ? `Teléfono: ${phone}` : ''}

Mensaje: ${message}`;
    
    const whatsappNumber = '573196642167'; // Número real de IrisColombiaModa
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpiar formulario
    form.reset();
    
    // Mostrar confirmación
    showNotification('¡Mensaje enviado! Te contactaremos pronto.', 'success');
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="closeNotification(this)">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        closeNotification(notification.querySelector('.notification-close'));
    }, 5000);
}

// Función para obtener icono de notificación
function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

// Función para obtener color de notificación
function getNotificationColor(type) {
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    return colors[type] || colors.info;
}

// Función para cerrar notificación
function closeNotification(button) {
    const notification = button.closest('.notification');
    if (notification) {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

// Función para manejar scroll y efectos
function handleScroll() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Efecto de header al hacer scroll
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Animaciones de elementos al entrar en viewport
    animateOnScroll();
}

// Función para animar elementos al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.product-card, .promo-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Función para inicializar la aplicación
function initializeApp() {
    // Configurar navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Configurar formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        // Agregar atributos name a los campos si no los tienen
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach((input, index) => {
            if (!input.name) {
                const fieldNames = ['name', 'email', 'phone', 'message'];
                input.name = fieldNames[index] || `field_${index}`;
            }
        });
    }
    
    // Configurar lazy loading para imágenes
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Configurar efectos de hover para tarjetas
    setupCardHoverEffects();
    
    // Inicializar animaciones
    animateOnScroll();
}

// Función para configurar efectos de hover en tarjetas
function setupCardHoverEffects() {
    const cards = document.querySelectorAll('.product-card, .promo-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Función para manejar redimensionamiento de ventana
function handleResize() {
    // Cerrar menú móvil si se cambia a desktop
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', initializeApp);
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleResize);

// Agregar estilos CSS para animaciones
const animationStyles = `
    <style>
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .header.scrolled {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
        }
        
        .animate {
            animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .lazy {
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .lazy.loaded {
            opacity: 1;
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', animationStyles);

// Exportar funciones para uso global
window.scrollToSection = scrollToSection;
window.toggleMenu = toggleMenu;
window.submitContactForm = submitContactForm;
window.showNotification = showNotification;
window.closeNotification = closeNotification;

// Carrusel del Hero Section
let currentSlide = 0;
let carouselInterval;
const slides = document.querySelectorAll('.hero-img');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = 4; // Número total de imágenes

// Función para mostrar slide específico
function showSlide(index) {
    // Remover clase active de todas las imágenes e indicadores
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Agregar clase active al slide e indicador actual
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    
    currentSlide = index;
}

// Función para ir al siguiente slide
function nextSlide() {
    const next = (currentSlide + 1) % totalSlides;
    showSlide(next);
}

// Función para ir al slide anterior
function previousSlide() {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(prev);
}

// Función para ir a un slide específico
function goToSlide(index) {
    showSlide(index);
    resetCarouselTimer(); // Reiniciar el timer cuando el usuario interactúa
}

// Función para iniciar el carrusel automático
function startCarousel() {
    carouselInterval = setInterval(nextSlide, 4000); // Cambiar cada 4 segundos
}

// Función para pausar el carrusel
function pauseCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

// Función para reiniciar el timer del carrusel
function resetCarouselTimer() {
    pauseCarousel();
    startCarousel();
}

// Inicializar el carrusel cuando se carga la página
function initializeCarousel() {
    // Verificar que existan los elementos del carrusel
    if (slides.length > 0 && indicators.length > 0) {
        console.log('🎠 Inicializando carrusel con', slides.length, 'imágenes');
        
        // Mostrar la primera imagen
        showSlide(0);
        
        // Iniciar rotación automática
        startCarousel();
        
        // Pausar cuando el mouse está sobre el carrusel
        const carousel = document.querySelector('.hero-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', pauseCarousel);
            carousel.addEventListener('mouseleave', startCarousel);
        }
        
        // Agregar event listeners para navegación con teclado
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowLeft') {
                previousSlide();
                resetCarouselTimer();
            } else if (event.key === 'ArrowRight') {
                nextSlide();
                resetCarouselTimer();
            }
        });
        
        console.log('✅ Carrusel inicializado correctamente');
    } else {
        console.warn('⚠️ No se encontraron elementos del carrusel');
    }
}

// Función para precargar imágenes
function preloadCarouselImages() {
    const imageUrls = [
        'img/Fotos-Index/Modelo IrisColombiaModa.jpg',
        'img/Fotos-Index/Modelo IrisColombiaModa2.jpg',
        'img/Fotos-Index/Modelo IrisColombiaModa3.jpg',
        'img/Fotos-Index/Modelo IrisColombiaModa4.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
    
    console.log('🖼️ Imágenes del carrusel precargadas');
}

// Agregar las funciones al objeto window para que sean accesibles globalmente
window.nextSlide = nextSlide;
window.previousSlide = previousSlide;
window.goToSlide = goToSlide;

// Inicializar cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Precargar imágenes primero
    preloadCarouselImages();
    
    // Inicializar carrusel después de un pequeño delay para asegurar que las imágenes estén cargadas
    setTimeout(initializeCarousel, 500);
});

// También inicializar cuando se carga completamente la ventana
window.addEventListener('load', function() {
    // Reinicializar si es necesario
    if (slides.length === 0) {
        setTimeout(initializeCarousel, 1000);
    }
});

// Funciones para Modal de Imagen
function openImageModal(imageSrc, title) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imageModalImg');
    const modalTitle = document.getElementById('imageModalTitle');
    
    if (modal && modalImg && modalTitle) {
        modalTitle.textContent = title;
        modalImg.src = imageSrc;
        modalImg.alt = title;
        modal.style.display = 'block';
        
        // Resetear zoom
        modalImg.classList.remove('zoomed');
        modalImg.style.transform = 'scale(1)';
        modalImg.style.cursor = 'zoom-in';
        
        // Agregar indicador de zoom si no existe
        addZoomIndicator(modal);
        
        // Prevenir scroll del body cuando el modal está abierto
        document.body.style.overflow = 'hidden';
        
        // Agregar event listener para zoom en la imagen
        modalImg.addEventListener('click', toggleImageZoom);
        
        // Cerrar modal con tecla Escape
        document.addEventListener('keydown', handleImageModalKeydown);
        
        // Cerrar modal al hacer clic fuera de la imagen
        modal.addEventListener('click', handleImageModalOutsideClick);
        
        console.log('📸 Modal de imagen abierto:', title);
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.style.display = 'none';
        
        // Restaurar scroll del body
        document.body.style.overflow = 'auto';
        
        // Remover event listeners
        document.removeEventListener('keydown', handleImageModalKeydown);
        modal.removeEventListener('click', handleImageModalOutsideClick);
    }
}

function handleImageModalKeydown(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
}

function handleImageModalOutsideClick(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeImageModal();
    }
}

// Función para agregar indicador de zoom
function addZoomIndicator(modal) {
    // Verificar si ya existe el indicador
    if (modal.querySelector('.zoom-indicator')) {
        return;
    }
    
    const indicator = document.createElement('div');
    indicator.className = 'zoom-indicator';
    indicator.innerHTML = '<i class="fas fa-search-plus"></i> Haz clic para ampliar';
    modal.querySelector('.image-modal-content').appendChild(indicator);
}

// Función para hacer zoom en la imagen
function toggleImageZoom() {
    const modalImg = document.getElementById('imageModalImg');
    const indicator = document.querySelector('.zoom-indicator');
    
    if (modalImg) {
        if (modalImg.classList.contains('zoomed')) {
            modalImg.classList.remove('zoomed');
            modalImg.style.transform = 'scale(1)';
            modalImg.style.cursor = 'zoom-in';
            if (indicator) {
                indicator.innerHTML = '<i class="fas fa-search-plus"></i> Haz clic para ampliar';
            }
        } else {
            modalImg.classList.add('zoomed');
            modalImg.style.transform = 'scale(2.5)';
            modalImg.style.cursor = 'zoom-out';
            if (indicator) {
                indicator.innerHTML = '<i class="fas fa-search-minus"></i> Haz clic para reducir';
            }
        }
    }
}

// Exportar funciones para uso global
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
window.toggleImageZoom = toggleImageZoom;// 
Optimizaciones específicas para móviles
function initializeMobileOptimizations() {
    // Detectar si es dispositivo móvil
    const isMobile = window.innerWidth <= 767;
    
    if (isMobile) {
        console.log('📱 Inicializando optimizaciones móviles');
        
        // Optimizar carrusel para móviles
        optimizeCarouselForMobile();
        
        // Mejorar navegación táctil
        improveTouchNavigation();
        
        // Optimizar modales para móviles
        optimizeModalsForMobile();
        
        // Mejorar rendimiento en móviles
        optimizePerformanceForMobile();
        
        // Configurar gestos táctiles
        setupTouchGestures();
    }
}

// Optimizar carrusel para dispositivos móviles
function optimizeCarouselForMobile() {
    const carousel = document.querySelector('.hero-carousel');
    const carouselContainer = document.querySelector('.carousel-container');
    
    if (!carousel || !carouselContainer) {
        console.warn('⚠️ Carrusel no encontrado');
        return;
    }
    
    console.log('📱 Optimizando carrusel para móvil');
    
    if (window.innerWidth <= 767) {
        // Marcar como cargando
        carouselContainer.classList.add('loading');
        
        // Verificar y forzar carga de imágenes
        const images = carousel.querySelectorAll('.hero-img');
        let loadedImages = 0;
        
        images.forEach((img, index) => {
            // Verificar si la imagen ya tiene src
            if (!img.src || img.src === '') {
                console.log(`🖼️ Configurando imagen ${index + 1}`);
                const imagePaths = [
                    'img/Fotos-Index/Modelo IrisColombiaModa.jpg',
                    'img/Fotos-Index/Modelo IrisColombiaModa2.jpg',
                    'img/Fotos-Index/Modelo IrisColombiaModa3.jpg',
                    'img/Fotos-Index/Modelo IrisColombiaModa4.jpg'
                ];
                
                if (imagePaths[index]) {
                    img.src = imagePaths[index];
                }
            }
            
            // Verificar carga de imagen
            if (img.complete && img.naturalHeight !== 0) {
                loadedImages++;
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', function() {
                    loadedImages++;
                    this.classList.add('loaded');
                    console.log(`✅ Imagen ${index + 1} cargada`);
                    
                    if (loadedImages === images.length) {
                        carouselContainer.classList.remove('loading');
                        console.log('🎉 Todas las imágenes del carrusel cargadas');
                    }
                });
                
                img.addEventListener('error', function() {
                    console.error(`❌ Error cargando imagen ${index + 1}:`, this.src);
                    this.style.background = 'var(--light-gray)';
                    this.style.display = 'flex';
                    this.style.alignItems = 'center';
                    this.style.justifyContent = 'center';
                    this.innerHTML = '<div style="text-align: center; color: var(--primary-color);"><i class="fas fa-image" style="font-size: 2rem; margin-bottom: 0.5rem;"></i><br>Imagen no disponible</div>';
                });
            }
        });
        
        // Remover loading si todas las imágenes ya están cargadas
        if (loadedImages === images.length) {
            carouselContainer.classList.remove('loading');
        }
        
        // Pausar carrusel automático en móviles para ahorrar batería
        if (typeof pauseCarousel === 'function') {
            pauseCarousel();
        }
        
        // Agregar indicador visual para swipe (solo si no existe)
        if (!carousel.querySelector('.swipe-indicator')) {
            const swipeIndicator = document.createElement('div');
            swipeIndicator.className = 'swipe-indicator';
            swipeIndicator.innerHTML = '<i class="fas fa-hand-point-left"></i> Desliza para ver más';
            swipeIndicator.style.cssText = `
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 0.8rem;
                z-index: 15;
                animation: fadeInOut 3s ease-in-out;
                pointer-events: none;
            `;
            
            carousel.appendChild(swipeIndicator);
            
            // Remover indicador después de 3 segundos
            setTimeout(() => {
                if (swipeIndicator.parentNode) {
                    swipeIndicator.remove();
                }
            }, 3000);
        }
        
        // Forzar primer slide activo
        const firstImg = images[0];
        if (firstImg) {
            firstImg.classList.add('active');
            console.log('🎯 Primera imagen activada');
        }
    }
}

// Mejorar navegación táctil
function improveTouchNavigation() {
    // Mejorar el menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        // Agregar animación suave al menú
        navMenu.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';
        
        // Mejorar feedback táctil
        menuToggle.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        menuToggle.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Cerrar menú al tocar fuera
        document.addEventListener('touchstart', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Mejorar botones táctiles
    const buttons = document.querySelectorAll('.cta-btn, .category-btn, .cart-btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Optimizar modales para móviles
function optimizeModalsForMobile() {
    // Mejorar modal de carrito para móviles
    const cartModal = document.getElementById('cartModal');
    if (cartModal && window.innerWidth <= 767) {
        cartModal.style.padding = '0';
        
        const cartContent = cartModal.querySelector('.cart-content');
        if (cartContent) {
            cartContent.style.cssText += `
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                top: auto;
                transform: none;
                border-radius: 15px 15px 0 0;
                max-height: 90vh;
            `;
        }
    }
    
    // Mejorar modal de imagen para móviles
    const imageModal = document.getElementById('imageModal');
    if (imageModal && window.innerWidth <= 767) {
        // Agregar soporte para pinch-to-zoom en móviles
        const modalImg = document.getElementById('imageModalImg');
        if (modalImg) {
            modalImg.style.touchAction = 'pinch-zoom';
        }
    }
}

// Optimizar rendimiento para móviles
function optimizePerformanceForMobile() {
    if (window.innerWidth <= 767) {
        // Reducir animaciones para ahorrar batería
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 767px) {
                *, *::before, *::after {
                    animation-duration: 0.2s !important;
                    transition-duration: 0.2s !important;
                }
                
                .hero-img {
                    transition-duration: 0.3s !important;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Lazy loading para imágenes en móviles
        if ('IntersectionObserver' in window) {
            const images = document.querySelectorAll('img');
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });
            
            images.forEach(img => {
                if (img.src && !img.dataset.src) {
                    img.dataset.src = img.src;
                    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGOEY5RkEiLz48L3N2Zz4=';
                    imageObserver.observe(img);
                }
            });
        }
    }
}

// Configurar gestos táctiles
function setupTouchGestures() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel || window.innerWidth > 767) return;
    
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    let threshold = 50; // Distancia mínima para considerar swipe
    
    carousel.addEventListener('touchstart', function(e) {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    }, { passive: true });
    
    carousel.addEventListener('touchmove', function(e) {
        if (!startX || !startY) return;
        
        const touch = e.touches[0];
        distX = touch.clientX - startX;
        distY = touch.clientY - startY;
        
        // Prevenir scroll vertical si es swipe horizontal
        if (Math.abs(distX) > Math.abs(distY)) {
            e.preventDefault();
        }
    }, { passive: false });
    
    carousel.addEventListener('touchend', function(e) {
        if (!startX || !startY) return;
        
        // Verificar si es un swipe válido
        if (Math.abs(distX) > threshold && Math.abs(distY) < 100) {
            if (distX > 0) {
                // Swipe derecha - imagen anterior
                if (typeof previousSlide === 'function') {
                    previousSlide();
                }
            } else {
                // Swipe izquierda - siguiente imagen
                if (typeof nextSlide === 'function') {
                    nextSlide();
                }
            }
        }
        
        // Reset
        startX = 0;
        startY = 0;
        distX = 0;
        distY = 0;
    }, { passive: true });
}

// Función para manejar cambios de orientación
function handleOrientationChange() {
    // Esperar a que se complete el cambio de orientación
    setTimeout(() => {
        // Reinicializar optimizaciones móviles
        initializeMobileOptimizations();
        
        // Ajustar altura del carrusel
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer && window.innerWidth <= 767) {
            if (window.orientation === 90 || window.orientation === -90) {
                // Landscape
                carouselContainer.style.height = '300px';
            } else {
                // Portrait
                carouselContainer.style.height = window.innerWidth <= 360 ? '320px' : '400px';
            }
        }
        
        // Cerrar menú móvil si está abierto
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }, 100);
}

// Función para detectar dispositivos táctiles
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Función para optimizar scroll en móviles
function optimizeMobileScroll() {
    if (window.innerWidth <= 767) {
        // Mejorar scroll momentum en iOS
        document.body.style.webkitOverflowScrolling = 'touch';
        
        // Prevenir bounce en iOS
        document.addEventListener('touchmove', function(e) {
            if (e.target.closest('.cart-modal, .product-modal, .image-modal')) {
                return; // Permitir scroll en modales
            }
            
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            
            if (scrollTop === 0 && e.touches[0].clientY > e.touches[0].clientY) {
                e.preventDefault();
            }
            
            if (scrollTop + clientHeight >= scrollHeight && e.touches[0].clientY < e.touches[0].clientY) {
                e.preventDefault();
            }
        }, { passive: false });
    }
}

// Event listeners para móviles
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileOptimizations();
    optimizeMobileScroll();
});

window.addEventListener('orientationchange', handleOrientationChange);
window.addEventListener('resize', function() {
    // Reinicializar optimizaciones cuando cambie el tamaño
    setTimeout(initializeMobileOptimizations, 100);
});

// Agregar estilos CSS adicionales para animaciones móviles
const mobileStyles = `
    <style>
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
            20% { opacity: 1; transform: translateX(-50%) translateY(0); }
            80% { opacity: 1; transform: translateX(-50%) translateY(0); }
            100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
        }
        
        @media (max-width: 767px) {
            .swipe-indicator {
                pointer-events: none;
            }
            
            .nav-menu.active {
                animation: slideDown 0.3s ease-out;
            }
            
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .category-card,
            .promo-card,
            .testimonial-card {
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }
            
            .category-card:active,
            .promo-card:active,
            .testimonial-card:active {
                transform: scale(0.98);
            }
            
            /* Mejorar área táctil */
            .carousel-btn {
                padding: 8px;
            }
            
            .indicator {
                padding: 8px;
                margin: -8px;
            }
            
            /* Optimizar rendimiento */
            .hero-carousel {
                will-change: transform;
                transform: translateZ(0);
            }
            
            .hero-img {
                will-change: opacity;
                backface-visibility: hidden;
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', mobileStyles);

// Exportar funciones para uso global
window.initializeMobileOptimizations = initializeMobileOptimizations;
window.handleOrientationChange = handleOrientationChange;
window.isTouchDevice = isTouchDevice;/
/ ========================================
// FUNCIONES PARA MODAL DE IMAGEN
// ========================================

// Función para abrir el modal de imagen
function openImageModal(imageSrc, title) {
    console.log('📸 Abriendo modal de imagen:', title);
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imageModalImg');
    const modalTitle = document.getElementById('imageModalTitle');
    
    if (!modal || !modalImg || !modalTitle) {
        console.error('❌ Elementos del modal de imagen no encontrados');
        return;
    }
    
    // Configurar el modal
    modalTitle.textContent = title;
    modalImg.src = imageSrc;
    modalImg.alt = title;
    
    // Mostrar el modal
    modal.style.display = 'block';
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
    
    // Agregar event listeners
    setupImageModalEvents();
    
    console.log('✅ Modal de imagen abierto exitosamente');
}

// Función para cerrar el modal de imagen
function closeImageModal() {
    console.log('❌ Cerrando modal de imagen');
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imageModalImg');
    
    if (!modal) {
        console.error('❌ Modal de imagen no encontrado');
        return;
    }
    
    // Ocultar el modal
    modal.style.display = 'none';
    
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
    
    // Limpiar la imagen
    if (modalImg) {
        modalImg.src = '';
        modalImg.classList.remove('zoomed');
    }
    
    // Remover event listeners
    removeImageModalEvents();
    
    console.log('✅ Modal de imagen cerrado');
}

// Función para configurar event listeners del modal
function setupImageModalEvents() {
    // Cerrar con tecla Escape
    document.addEventListener('keydown', handleImageModalKeydown);
    
    // Cerrar al hacer clic fuera del modal
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.addEventListener('click', handleImageModalOutsideClick);
    }
    
    // Zoom en la imagen
    const modalImg = document.getElementById('imageModalImg');
    if (modalImg) {
        modalImg.addEventListener('click', toggleImageZoom);
    }
}

// Función para remover event listeners del modal
function removeImageModalEvents() {
    document.removeEventListener('keydown', handleImageModalKeydown);
    
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.removeEventListener('click', handleImageModalOutsideClick);
    }
    
    const modalImg = document.getElementById('imageModalImg');
    if (modalImg) {
        modalImg.removeEventListener('click', toggleImageZoom);
    }
}

// Función para manejar tecla Escape
function handleImageModalKeydown(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
}

// Función para cerrar al hacer clic fuera del modal
function handleImageModalOutsideClick(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeImageModal();
    }
}

// Función para hacer zoom en la imagen
function toggleImageZoom() {
    const modalImg = document.getElementById('imageModalImg');
    if (!modalImg) return;
    
    if (modalImg.classList.contains('zoomed')) {
        modalImg.classList.remove('zoomed');
        modalImg.style.cursor = 'zoom-in';
        console.log('🔍 Zoom desactivado');
    } else {
        modalImg.classList.add('zoomed');
        modalImg.style.cursor = 'zoom-out';
        console.log('🔍 Zoom activado');
    }
}

// Exportar funciones para uso global
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
window.toggleImageZoom = toggleImageZoom;

console.log('🖼️ Funciones del modal de imagen cargadas correctamente');