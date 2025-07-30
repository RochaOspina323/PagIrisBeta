// Solución específica para carga de imágenes del carrusel en móviles
function forceCarouselImagesLoad() {
    console.log('🔧 Iniciando corrección de carga de imágenes para móviles');
    
    const carousel = document.querySelector('.hero-carousel');
    const carouselContainer = document.querySelector('.carousel-container');
    
    if (!carousel || !carouselContainer) {
        console.error('❌ Elementos del carrusel no encontrados');
        return;
    }
    
    // Rutas de las imágenes
    const imagePaths = [
        'img/Fotos-Index/Modelo IrisColombiaModa.jpg',
        'img/Fotos-Index/Modelo IrisColombiaModa2.jpg',
        'img/Fotos-Index/Modelo IrisColombiaModa3.jpg',
        'img/Fotos-Index/Modelo IrisColombiaModa4.jpg'
    ];
    
    // Obtener todas las imágenes del carrusel
    const heroImages = carousel.querySelectorAll('.hero-img');
    
    if (heroImages.length === 0) {
        console.error('❌ No se encontraron imágenes del carrusel');
        return;
    }
    
    console.log(`📱 Procesando ${heroImages.length} imágenes del carrusel`);
    
    // Forzar carga de cada imagen
    heroImages.forEach((img, index) => {
        console.log(`🖼️ Procesando imagen ${index + 1}:`, img.src);
        
        // Asegurar que la imagen tenga la ruta correcta
        if (!img.src || img.src === '' || img.src.includes('data:image')) {
            img.src = imagePaths[index];
            console.log(`✅ Ruta asignada a imagen ${index + 1}:`, imagePaths[index]);
        }
        
        // Forzar estilos para móviles
        if (window.innerWidth <= 767) {
            img.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
                opacity: ${index === 0 ? '1' : '0'};
                transition: opacity 0.5s ease-in-out;
                display: block !important;
                visibility: visible !important;
                z-index: ${index === 0 ? '1' : '0'};
            `;
            
            // Asegurar que la primera imagen esté activa
            if (index === 0) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        }
        
        // Event listeners para verificar carga
        img.addEventListener('load', function() {
            console.log(`✅ Imagen ${index + 1} cargada exitosamente`);
            this.classList.add('loaded');
            this.style.opacity = index === 0 ? '1' : '0';
        });
        
        img.addEventListener('error', function() {
            console.error(`❌ Error cargando imagen ${index + 1}:`, this.src);
            
            // Crear imagen de respaldo
            this.style.cssText += `
                background: linear-gradient(135deg, var(--accent-color) 0%, var(--light-gray) 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--primary-color);
                font-size: 1rem;
                text-align: center;
            `;
            
            this.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-image" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <br>
                    <span style="font-weight: 500;">Imagen ${index + 1}</span>
                    <br>
                    <small style="opacity: 0.7;">IrisColombiaModa</small>
                </div>
            `;
        });
        
        // Forzar recarga si la imagen no se ha cargado después de 2 segundos
        setTimeout(() => {
            if (!img.complete || img.naturalHeight === 0) {
                console.log(`🔄 Reintentando carga de imagen ${index + 1}`);
                const originalSrc = img.src;
                img.src = '';
                setTimeout(() => {
                    img.src = originalSrc + '?t=' + Date.now(); // Cache busting
                }, 100);
            }
        }, 2000);
    });
    
    // Asegurar que el contenedor tenga el tamaño correcto
    if (window.innerWidth <= 767) {
        carouselContainer.style.cssText = `
            width: 100%;
            height: ${window.innerWidth <= 360 ? '320px' : '400px'};
            position: relative;
            overflow: hidden;
            background: var(--light-gray);
            border-radius: 15px;
        `;
        
        carousel.style.cssText = `
            width: 100%;
            max-width: ${window.innerWidth <= 360 ? '300px' : '350px'};
            margin: 0 auto;
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: var(--shadow);
        `;
    }
    
    console.log('🎉 Corrección de carga de imágenes completada');
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

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 767) {
        console.log('📱 Dispositivo móvil detectado, aplicando correcciones');
        
        // Ejecutar inmediatamente
        setTimeout(forceCarouselImagesLoad, 100);
        
        // Ejecutar después de que todo esté cargado
        setTimeout(reinitializeCarouselForMobile, 500);
        
        // Verificar nuevamente después de 2 segundos
        setTimeout(() => {
            if (!checkImagesLoaded()) {
                console.log('🔧 Aplicando corrección final');
                forceCarouselImagesLoad();
            }
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