// SOLUCIÓN AGRESIVA para carga de imágenes del carrusel en móviles
function forceCarouselImagesLoad() {
    console.log('🔧 FORZANDO carga de imágenes para móviles');
    
    // Rutas absolutas de las imágenes
    const imagePaths = [
        'img/Fotos-Index/Modelo IrisColombiaModa.jpg',
        'img/Fotos-Index/Modelo IrisColombiaModa2.jpg',
        'img/Fotos-Index/Modelo IrisColombiaModa3.jpg',
        'img/Fotos-Index/Modelo IrisColombiaModa4.jpg'
    ];
    
    // Buscar o crear el carrusel
    let carousel = document.querySelector('.hero-carousel');
    let carouselContainer = document.querySelector('.carousel-container');
    
    if (!carousel || !carouselContainer) {
        console.log('⚠️ Carrusel no encontrado, buscando contenedor padre...');
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            // Recrear el carrusel completo
            heroImage.innerHTML = `
                <div class="hero-carousel">
                    <div class="carousel-container">
                        <img src="${imagePaths[0]}" alt="Modelo IrisColombiaModa 1" class="hero-img active">
                        <img src="${imagePaths[1]}" alt="Modelo IrisColombiaModa 2" class="hero-img">
                        <img src="${imagePaths[2]}" alt="Modelo IrisColombiaModa 3" class="hero-img">
                        <img src="${imagePaths[3]}" alt="Modelo IrisColombiaModa 4" class="hero-img">
                    </div>
                    <div class="carousel-indicators">
                        <span class="indicator active" onclick="goToSlide(0)"></span>
                        <span class="indicator" onclick="goToSlide(1)"></span>
                        <span class="indicator" onclick="goToSlide(2)"></span>
                        <span class="indicator" onclick="goToSlide(3)"></span>
                    </div>
                    <button class="carousel-btn prev" onclick="previousSlide()">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="carousel-btn next" onclick="nextSlide()">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            `;
            carousel = document.querySelector('.hero-carousel');
            carouselContainer = document.querySelector('.carousel-container');
        }
    }
    
    if (!carousel || !carouselContainer) {
        console.error('❌ No se pudo crear/encontrar el carrusel');
        return;
    }
    
    // Aplicar estilos directamente en línea para móviles
    if (window.innerWidth <= 767) {
        const mobileWidth = window.innerWidth <= 360 ? '300px' : '350px';
        const mobileHeight = window.innerWidth <= 360 ? '320px' : '350px';
        
        // Estilos del carrusel
        carousel.style.cssText = `
            position: relative !important;
            width: 100% !important;
            max-width: ${mobileWidth} !important;
            margin: 0 auto !important;
            border-radius: 15px !important;
            overflow: hidden !important;
            box-shadow: 0 4px 15px rgba(139, 90, 150, 0.1) !important;
            background: #F8F9FA !important;
        `;
        
        // Estilos del contenedor
        carouselContainer.style.cssText = `
            position: relative !important;
            width: 100% !important;
            height: ${mobileHeight} !important;
            overflow: hidden !important;
            background: #F8F9FA !important;
        `;
    }
    
    // Obtener todas las imágenes
    const heroImages = carousel.querySelectorAll('.hero-img');
    
    if (heroImages.length === 0) {
        console.error('❌ No se encontraron imágenes del carrusel');
        return;
    }
    
    console.log(`📱 Procesando ${heroImages.length} imágenes del carrusel`);
    
    // Procesar cada imagen
    heroImages.forEach((img, index) => {
        console.log(`🖼️ Configurando imagen ${index + 1}`);
        
        // Forzar la ruta de la imagen
        img.src = imagePaths[index];
        img.alt = `Modelo IrisColombiaModa ${index + 1}`;
        
        // Aplicar estilos directamente para móviles
        if (window.innerWidth <= 767) {
            img.style.cssText = `
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
                object-position: center !important;
                opacity: ${index === 0 ? '1' : '0'} !important;
                transition: opacity 0.5s ease-in-out !important;
                display: block !important;
                visibility: visible !important;
                z-index: ${index === 0 ? '2' : '1'} !important;
            `;
        }
        
        // Configurar clases
        if (index === 0) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
        
        // Event listeners
        img.addEventListener('load', function() {
            console.log(`✅ Imagen ${index + 1} cargada exitosamente`);
            this.classList.add('loaded');
        });
        
        img.addEventListener('error', function() {
            console.error(`❌ Error cargando imagen ${index + 1}:`, this.src);
            
            // Crear placeholder visual
            this.style.cssText += `
                background: linear-gradient(135deg, #E6E6FA 0%, #F8F9FA 100%) !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                color: #8B5A96 !important;
                font-size: 1rem !important;
                text-align: center !important;
            `;
            
            this.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-image" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <br>
                    <span style="font-weight: 500;">Modelo ${index + 1}</span>
                    <br>
                    <small style="opacity: 0.7;">IrisColombiaModa</small>
                </div>
            `;
        });
        
        // Precargar imagen
        const preloadImg = new Image();
        preloadImg.onload = function() {
            console.log(`🚀 Imagen ${index + 1} precargada`);
        };
        preloadImg.src = imagePaths[index];
    });
    
    // Configurar controles para móviles
    if (window.innerWidth <= 767) {
        const prevBtn = carousel.querySelector('.carousel-btn.prev');
        const nextBtn = carousel.querySelector('.carousel-btn.next');
        const indicators = carousel.querySelectorAll('.indicator');
        
        if (prevBtn) {
            prevBtn.style.cssText = `
                position: absolute !important;
                top: 50% !important;
                left: 10px !important;
                transform: translateY(-50%) !important;
                width: 35px !important;
                height: 35px !important;
                background: rgba(255, 255, 255, 0.9) !important;
                border: none !important;
                border-radius: 50% !important;
                cursor: pointer !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                color: #8B5A96 !important;
                font-size: 0.9rem !important;
                z-index: 10 !important;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2) !important;
            `;
        }
        
        if (nextBtn) {
            nextBtn.style.cssText = `
                position: absolute !important;
                top: 50% !important;
                right: 10px !important;
                transform: translateY(-50%) !important;
                width: 35px !important;
                height: 35px !important;
                background: rgba(255, 255, 255, 0.9) !important;
                border: none !important;
                border-radius: 50% !important;
                cursor: pointer !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                color: #8B5A96 !important;
                font-size: 0.9rem !important;
                z-index: 10 !important;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2) !important;
            `;
        }
        
        indicators.forEach((indicator, index) => {
            indicator.style.cssText = `
                width: 8px !important;
                height: 8px !important;
                border-radius: 50% !important;
                background: rgba(255, 255, 255, 0.6) !important;
                cursor: pointer !important;
                transition: all 0.3s ease !important;
                margin: 0 4px !important;
            `;
            
            if (index === 0) {
                indicator.classList.add('active');
                indicator.style.background = '#FFFFFF !important';
                indicator.style.transform = 'scale(1.2) !important';
            }
        });
        
        const indicatorsContainer = carousel.querySelector('.carousel-indicators');
        if (indicatorsContainer) {
            indicatorsContainer.style.cssText = `
                position: absolute !important;
                bottom: 15px !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                display: flex !important;
                gap: 8px !important;
                z-index: 10 !important;
            `;
        }
    }
    
    console.log('🎉 Corrección AGRESIVA de carga de imágenes completada');
}

// Función para verificar si las imágenes están cargadas
function checkImagesLoaded() {
    const heroImages = document.querySelectorAll('.hero-img');
    let loadedCount = 0;
    
    heroImages.forEach(img => {
        if (img.complete && img.naturalHeight !== 0) {
            loadedCount++;
        }
    });
    
    console.log(`📊 Imágenes cargadas: ${loadedCount}/${heroImages.length}`);
    return loadedCount === heroImages.length;
}

// Función para reinicializar el carrusel en móviles
function reinitializeCarouselForMobile() {
    if (window.innerWidth > 767) return;
    
    console.log('🔄 Reinicializando carrusel para móviles');
    
    // Forzar carga de imágenes
    forceCarouselImagesLoad();
    
    // Esperar un momento y verificar
    setTimeout(() => {
        if (!checkImagesLoaded()) {
            console.log('⚠️ Algunas imágenes no se cargaron, reintentando...');
            forceCarouselImagesLoad();
        }
    }, 1000);
    
    // Configurar controles del carrusel para móviles
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const indicators = document.querySelectorAll('.indicator');
    
    if (prevBtn && nextBtn) {
        prevBtn.style.cssText = `
            position: absolute;
            top: 50%;
            left: 15px;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary-color);
            font-size: 1rem;
            z-index: 10;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        `;
        
        nextBtn.style.cssText = `
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary-color);
            font-size: 1rem;
            z-index: 10;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        `;
    }
    
    // Configurar indicadores
    indicators.forEach((indicator, index) => {
        indicator.style.cssText = `
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        `;
        
        if (index === 0) {
            indicator.classList.add('active');
            indicator.style.background = 'var(--white)';
            indicator.style.transform = 'scale(1.2)';
        }
    });
}

// EJECUTAR INMEDIATAMENTE - Sin esperar DOM
(function() {
    console.log('🚀 Iniciando corrección inmediata para móviles');
    
    function executeImmediateFix() {
        if (window.innerWidth <= 767) {
            console.log('📱 Aplicando corrección inmediata');
            forceCarouselImagesLoad();
        }
    }
    
    // Ejecutar múltiples veces para asegurar que funcione
    executeImmediateFix();
    setTimeout(executeImmediateFix, 50);
    setTimeout(executeImmediateFix, 100);
    setTimeout(executeImmediateFix, 200);
    setTimeout(executeImmediateFix, 500);
    setTimeout(executeImmediateFix, 1000);
    setTimeout(executeImmediateFix, 2000);
})();

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 767) {
        console.log('📱 Dispositivo móvil detectado, aplicando correcciones DOM');
        
        // Ejecutar múltiples veces
        forceCarouselImagesLoad();
        setTimeout(forceCarouselImagesLoad, 100);
        setTimeout(forceCarouselImagesLoad, 300);
        setTimeout(forceCarouselImagesLoad, 500);
        setTimeout(forceCarouselImagesLoad, 1000);
        
        // Verificar y reintentar
        setTimeout(() => {
            console.log('🔧 Verificación final');
            forceCarouselImagesLoad();
            reinitializeCarouselForMobile();
        }, 2000);
    }
});

// Ejecutar cuando la ventana esté completamente cargada
window.addEventListener('load', function() {
    if (window.innerWidth <= 767) {
        setTimeout(reinitializeCarouselForMobile, 200);
    }
});

// Ejecutar cuando cambie el tamaño de la ventana
window.addEventListener('resize', function() {
    if (window.innerWidth <= 767) {
        setTimeout(reinitializeCarouselForMobile, 100);
    }
});

// Exportar funciones para uso global
window.forceCarouselImagesLoad = forceCarouselImagesLoad;
window.reinitializeCarouselForMobile = reinitializeCarouselForMobile;
window.checkImagesLoaded = checkImagesLoaded;