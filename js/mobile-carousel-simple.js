// SOLUCIÓN ULTRA SIMPLE para carrusel en móviles
(function() {
    'use strict';
    
    console.log('🔥 Iniciando solución ultra simple para móviles');
    
    function createMobileCarousel() {
        // Solo ejecutar en móviles
        if (window.innerWidth > 767) {
            console.log('💻 No es móvil, saltando...');
            return;
        }
        
        console.log('📱 Creando carrusel para móvil');
        
        // Buscar el contenedor hero-image
        const heroImageContainer = document.querySelector('.hero-image');
        if (!heroImageContainer) {
            console.error('❌ No se encontró .hero-image');
            return;
        }
        
        // Crear HTML del carrusel completamente nuevo
        const carouselHTML = `
            <div class="mobile-carousel" style="
                position: relative;
                width: 100%;
                max-width: 350px;
                height: 350px;
                margin: 0 auto;
                border-radius: 15px;
                overflow: hidden;
                background: #F8F9FA;
                box-shadow: 0 4px 15px rgba(139, 90, 150, 0.1);
            ">
                <div class="mobile-carousel-track" style="
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                ">
                    <img src="img/Fotos-Index/Modelo IrisColombiaModa.jpg" 
                         alt="Modelo 1" 
                         class="mobile-slide active"
                         style="
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            object-position: center;
                            opacity: 1;
                            transition: opacity 0.5s ease;
                            z-index: 2;
                         ">
                    <img src="img/Fotos-Index/Modelo IrisColombiaModa2.jpg" 
                         alt="Modelo 2" 
                         class="mobile-slide"
                         style="
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            object-position: center;
                            opacity: 0;
                            transition: opacity 0.5s ease;
                            z-index: 1;
                         ">
                    <img src="img/Fotos-Index/Modelo IrisColombiaModa3.jpg" 
                         alt="Modelo 3" 
                         class="mobile-slide"
                         style="
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            object-position: center;
                            opacity: 0;
                            transition: opacity 0.5s ease;
                            z-index: 1;
                         ">
                    <img src="img/Fotos-Index/Modelo IrisColombiaModa4.jpg" 
                         alt="Modelo 4" 
                         class="mobile-slide"
                         style="
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            object-position: center;
                            opacity: 0;
                            transition: opacity 0.5s ease;
                            z-index: 1;
                         ">
                </div>
                
                <!-- Botones de navegación -->
                <button class="mobile-prev" onclick="mobileCarouselPrev()" style="
                    position: absolute;
                    top: 50%;
                    left: 10px;
                    transform: translateY(-50%);
                    width: 35px;
                    height: 35px;
                    background: rgba(255, 255, 255, 0.9);
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #8B5A96;
                    font-size: 14px;
                    z-index: 10;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                ">‹</button>
                
                <button class="mobile-next" onclick="mobileCarouselNext()" style="
                    position: absolute;
                    top: 50%;
                    right: 10px;
                    transform: translateY(-50%);
                    width: 35px;
                    height: 35px;
                    background: rgba(255, 255, 255, 0.9);
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #8B5A96;
                    font-size: 14px;
                    z-index: 10;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                ">›</button>
                
                <!-- Indicadores -->
                <div class="mobile-indicators" style="
                    position: absolute;
                    bottom: 15px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 8px;
                    z-index: 10;
                ">
                    <span class="mobile-indicator active" onclick="mobileGoToSlide(0)" style="
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: #FFFFFF;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        transform: scale(1.2);
                    "></span>
                    <span class="mobile-indicator" onclick="mobileGoToSlide(1)" style="
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.6);
                        cursor: pointer;
                        transition: all 0.3s ease;
                    "></span>
                    <span class="mobile-indicator" onclick="mobileGoToSlide(2)" style="
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.6);
                        cursor: pointer;
                        transition: all 0.3s ease;
                    "></span>
                    <span class="mobile-indicator" onclick="mobileGoToSlide(3)" style="
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.6);
                        cursor: pointer;
                        transition: all 0.3s ease;
                    "></span>
                </div>
            </div>
        `;
        
        // Reemplazar el contenido existente
        heroImageContainer.innerHTML = carouselHTML;
        
        console.log('✅ Carrusel móvil creado exitosamente');
        
        // Verificar que las imágenes se carguen
        const images = heroImageContainer.querySelectorAll('.mobile-slide');
        images.forEach((img, index) => {
            img.addEventListener('load', function() {
                console.log(`✅ Imagen móvil ${index + 1} cargada`);
            });
            
            img.addEventListener('error', function() {
                console.error(`❌ Error cargando imagen móvil ${index + 1}`);
                this.style.background = 'linear-gradient(135deg, #E6E6FA 0%, #F8F9FA 100%)';
                this.style.display = 'flex';
                this.style.alignItems = 'center';
                this.style.justifyContent = 'center';
                this.style.color = '#8B5A96';
                this.innerHTML = `<div style="text-align: center;"><i class="fas fa-image" style="font-size: 2rem; margin-bottom: 0.5rem;"></i><br>Modelo ${index + 1}</div>`;
            });
        });
    }
    
    // Variables globales para el carrusel móvil
    let mobileCurrentSlide = 0;
    const mobileTotalSlides = 4;
    
    // Función para mostrar slide específico
    window.mobileGoToSlide = function(index) {
        console.log(`📱 Cambiando a slide ${index + 1}`);
        
        const slides = document.querySelectorAll('.mobile-slide');
        const indicators = document.querySelectorAll('.mobile-indicator');
        
        if (slides.length === 0) return;
        
        // Ocultar todos los slides
        slides.forEach(slide => {
            slide.style.opacity = '0';
            slide.style.zIndex = '1';
        });
        
        // Mostrar slide actual
        if (slides[index]) {
            slides[index].style.opacity = '1';
            slides[index].style.zIndex = '2';
        }
        
        // Actualizar indicadores
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.style.background = '#FFFFFF';
                indicator.style.transform = 'scale(1.2)';
                indicator.classList.add('active');
            } else {
                indicator.style.background = 'rgba(255, 255, 255, 0.6)';
                indicator.style.transform = 'scale(1)';
                indicator.classList.remove('active');
            }
        });
        
        mobileCurrentSlide = index;
    };
    
    // Función para slide siguiente
    window.mobileCarouselNext = function() {
        const nextSlide = (mobileCurrentSlide + 1) % mobileTotalSlides;
        mobileGoToSlide(nextSlide);
    };
    
    // Función para slide anterior
    window.mobileCarouselPrev = function() {
        const prevSlide = (mobileCurrentSlide - 1 + mobileTotalSlides) % mobileTotalSlides;
        mobileGoToSlide(prevSlide);
    };
    
    // Configurar gestos táctiles
    function setupMobileTouchGestures() {
        const carousel = document.querySelector('.mobile-carousel');
        if (!carousel) return;
        
        let startX = 0;
        let startY = 0;
        
        carousel.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });
        
        carousel.addEventListener('touchend', function(e) {
            if (!startX || !startY) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Solo procesar swipes horizontales
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe izquierda - siguiente
                    mobileCarouselNext();
                } else {
                    // Swipe derecha - anterior
                    mobileCarouselPrev();
                }
            }
            
            startX = 0;
            startY = 0;
        }, { passive: true });
        
        console.log('👆 Gestos táctiles configurados');
    }
    
    // Ejecutar cuando el DOM esté listo
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(createMobileCarousel, 100);
                setTimeout(setupMobileTouchGestures, 200);
            });
        } else {
            setTimeout(createMobileCarousel, 100);
            setTimeout(setupMobileTouchGestures, 200);
        }
    }
    
    // Ejecutar inmediatamente
    init();
    
    // También ejecutar cuando la ventana se cargue completamente
    window.addEventListener('load', function() {
        if (window.innerWidth <= 767) {
            setTimeout(createMobileCarousel, 100);
            setTimeout(setupMobileTouchGestures, 200);
        }
    });
    
    // Ejecutar cuando cambie el tamaño de ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 767) {
            setTimeout(createMobileCarousel, 100);
            setTimeout(setupMobileTouchGestures, 200);
        }
    });
    
    console.log('🎉 Script de carrusel móvil ultra simple inicializado');
})();