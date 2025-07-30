// Carrusel del Hero Section - FUNCIONAL
console.log('🎠 Carrusel cargado');

let currentSlide = 0;
let carouselInterval;
const totalSlides = 4;

// Función para mostrar slide específico
function showSlide(index) {
    console.log('📸 Mostrando slide:', index);
    
    const slides = document.querySelectorAll('.hero-img');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) {
        console.error('❌ No se encontraron slides');
        return;
    }
    
    // Remover clase active de todas las imágenes e indicadores
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Agregar clase active al slide e indicador actual
    if (slides[index]) {
        slides[index].classList.add('active');
        console.log('✅ Slide activado:', index);
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    
    currentSlide = index;
}

// Función para ir al siguiente slide
function nextSlide() {
    console.log('➡️ Siguiente slide');
    const next = (currentSlide + 1) % totalSlides;
    showSlide(next);
}

// Función para ir al slide anterior
function previousSlide() {
    console.log('⬅️ Slide anterior');
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(prev);
}

// Función para ir a un slide específico
function goToSlide(index) {
    console.log('🎯 Ir a slide:', index);
    showSlide(index);
    resetCarouselTimer();
}

// Función para iniciar el carrusel automático
function startCarousel() {
    console.log('▶️ Iniciando carrusel automático');
    carouselInterval = setInterval(() => {
        console.log('⏰ Cambio automático de slide');
        nextSlide();
    }, 4000); // Cambiar cada 4 segundos
}

// Función para pausar el carrusel
function pauseCarousel() {
    console.log('⏸️ Pausando carrusel');
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

// Función para reiniciar el timer del carrusel
function resetCarouselTimer() {
    console.log('🔄 Reiniciando timer del carrusel');
    pauseCarousel();
    setTimeout(startCarousel, 1000); // Esperar 1 segundo antes de reiniciar
}

// Función para inicializar el carrusel
function initializeCarousel() {
    console.log('🚀 Inicializando carrusel...');
    
    const slides = document.querySelectorAll('.hero-img');
    const indicators = document.querySelectorAll('.indicator');
    const carousel = document.querySelector('.hero-carousel');
    
    console.log('Slides encontrados:', slides.length);
    console.log('Indicadores encontrados:', indicators.length);
    
    if (slides.length === 0) {
        console.error('❌ No se encontraron slides del carrusel');
        return;
    }
    
    // Mostrar la primera imagen
    showSlide(0);
    
    // Iniciar rotación automática
    startCarousel();
    
    // Configurar eventos de hover
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            console.log('🖱️ Mouse sobre carrusel - pausando');
            pauseCarousel();
        });
        
        carousel.addEventListener('mouseleave', () => {
            console.log('🖱️ Mouse fuera del carrusel - reanudando');
            startCarousel();
        });
    }
    
    // Configurar navegación con teclado
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            console.log('⌨️ Tecla izquierda presionada');
            previousSlide();
            resetCarouselTimer();
        } else if (event.key === 'ArrowRight') {
            console.log('⌨️ Tecla derecha presionada');
            nextSlide();
            resetCarouselTimer();
        }
    });
    
    console.log('✅ Carrusel inicializado correctamente');
}

// Función para verificar que las imágenes existen
function checkImages() {
    const imageUrls = [
        'img/Fotos-Index/Modelo IrisColombiaModa.jpg',
        'img/Fotos-Index/Modelo IrisColombiaModa2.jpg',
        'img/Fotos-Index/Modelo IrisColombiaModa3.jpg',
        'img/Fotos-Index/Modelo IrisColombiaModa4.jpg'
    ];
    
    imageUrls.forEach((url, index) => {
        const img = new Image();
        img.onload = () => console.log(`✅ Imagen ${index + 1} cargada:`, url);
        img.onerror = () => console.error(`❌ Error cargando imagen ${index + 1}:`, url);
        img.src = url;
    });
}

// Función de prueba para verificar que todo funciona
function testCarousel() {
    console.log('🧪 Probando funciones del carrusel...');
    
    setTimeout(() => {
        console.log('Probando nextSlide...');
        nextSlide();
    }, 2000);
    
    setTimeout(() => {
        console.log('Probando previousSlide...');
        previousSlide();
    }, 4000);
    
    setTimeout(() => {
        console.log('Probando goToSlide(2)...');
        goToSlide(2);
    }, 6000);
}

// Exportar funciones para uso global
window.nextSlide = nextSlide;
window.previousSlide = previousSlide;
window.goToSlide = goToSlide;
window.startCarousel = startCarousel;
window.pauseCarousel = pauseCarousel;

// Inicializar cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM cargado - inicializando carrusel');
    checkImages();
    
    // Esperar un poco para asegurar que todo esté cargado
    setTimeout(() => {
        initializeCarousel();
        // testCarousel(); // Descomenta esta línea para probar
    }, 1000);
});

// También inicializar cuando se carga completamente la ventana
window.addEventListener('load', function() {
    console.log('🌐 Ventana cargada completamente');
    
    // Verificar si el carrusel ya está funcionando
    const slides = document.querySelectorAll('.hero-img');
    if (slides.length > 0 && !carouselInterval) {
        console.log('🔄 Reinicializando carrusel...');
        setTimeout(initializeCarousel, 500);
    }
});