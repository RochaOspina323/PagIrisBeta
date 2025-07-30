// Carrusel SIMPLE que funciona inmediatamente
console.log('🎠 Carrusel SIMPLE iniciado');

// Variables globales
let slideIndex = 0;
let slideTimer;

// Función para cambiar slide
function changeSlide() {
    const images = document.querySelectorAll('.hero-img');
    const indicators = document.querySelectorAll('.indicator');
    
    if (images.length === 0) {
        console.log('❌ No hay imágenes del carrusel');
        return;
    }
    
    // Remover clase active de todas las imágenes
    images.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    // Mostrar imagen actual
    if (images[slideIndex]) {
        images[slideIndex].classList.add('active');
        console.log('✅ Mostrando imagen:', slideIndex + 1);
    }
    
    if (indicators[slideIndex]) {
        indicators[slideIndex].classList.add('active');
    }
    
    // Incrementar índice para la próxima imagen
    slideIndex = (slideIndex + 1) % images.length;
}

// Función para ir a slide específico
function goToSlide(index) {
    slideIndex = index;
    changeSlide();
    resetTimer();
}

// Función para slide siguiente
function nextSlide() {
    changeSlide();
    resetTimer();
}

// Función para slide anterior
function previousSlide() {
    const images = document.querySelectorAll('.hero-img');
    slideIndex = (slideIndex - 2 + images.length) % images.length;
    changeSlide();
    resetTimer();
}

// Función para iniciar timer
function startTimer() {
    slideTimer = setInterval(changeSlide, 4000); // Cambiar cada 4 segundos
    console.log('⏰ Timer iniciado - cambio cada 4 segundos');
}

// Función para parar timer
function stopTimer() {
    if (slideTimer) {
        clearInterval(slideTimer);
        console.log('⏸️ Timer pausado');
    }
}

// Función para reiniciar timer
function resetTimer() {
    stopTimer();
    setTimeout(startTimer, 1000);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM listo - iniciando carrusel simple');
    
    setTimeout(function() {
        const images = document.querySelectorAll('.hero-img');
        console.log('🖼️ Imágenes encontradas:', images.length);
        
        if (images.length > 0) {
            // Mostrar primera imagen
            slideIndex = 0;
            changeSlide();
            
            // Iniciar rotación automática
            startTimer();
            
            // Configurar eventos de hover
            const carousel = document.querySelector('.hero-carousel');
            if (carousel) {
                carousel.onmouseenter = stopTimer;
                carousel.onmouseleave = startTimer;
                console.log('🖱️ Eventos de hover configurados');
            }
            
            console.log('✅ Carrusel simple funcionando');
        } else {
            console.log('❌ No se encontraron imágenes del carrusel');
        }
    }, 500);
});

// Hacer funciones globales
window.goToSlide = goToSlide;
window.nextSlide = nextSlide;
window.previousSlide = previousSlide;