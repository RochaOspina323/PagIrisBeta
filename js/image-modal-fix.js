// CORRECCIÓN ESPECÍFICA PARA MODAL DE IMAGEN
(function() {
    'use strict';
    
    console.log('🖼️ Iniciando corrección del modal de imagen');
    
    // Función para crear el modal si no existe
    function ensureImageModalExists() {
        let modal = document.getElementById('imageModal');
        
        if (!modal) {
            console.log('⚠️ Modal de imagen no encontrado, creándolo...');
            
            const modalHTML = `
                <div id="imageModal" class="image-modal" style="
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    z-index: 4000;
                ">
                    <div class="image-modal-content" style="
                        position: relative;
                        width: 95%;
                        max-width: 1200px;
                        height: 95%;
                        margin: 2.5% auto;
                        background: white;
                        border-radius: 15px;
                        overflow: hidden;
                        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                        display: flex;
                        flex-direction: column;
                    ">
                        <button class="close-image-modal" onclick="closeImageModal()" style="
                            position: absolute;
                            top: 15px;
                            right: 20px;
                            background: rgba(139, 90, 150, 0.9);
                            color: white;
                            border: none;
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            font-size: 20px;
                            cursor: pointer;
                            z-index: 10;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        ">&times;</button>
                        
                        <div class="image-modal-header" style="
                            background: #8B5A96;
                            color: white;
                            padding: 15px 20px;
                            text-align: center;
                        ">
                            <h3 id="imageModalTitle" style="
                                margin: 0;
                                font-size: 1.5rem;
                                font-weight: 600;
                            ">Imagen</h3>
                        </div>
                        
                        <div class="image-modal-body" style="
                            flex: 1;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 10px;
                            overflow: auto;
                            background: #f8f9fa;
                        ">
                            <img id="imageModalImg" src="" alt="" class="modal-image" style="
                                width: 100%;
                                height: 100%;
                                object-fit: contain;
                                border-radius: 8px;
                                background: white;
                                padding: 10px;
                                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                                cursor: zoom-in;
                            ">
                        </div>
                    </div>
                </div>
            `;
            
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            modal = document.getElementById('imageModal');
            console.log('✅ Modal de imagen creado');
        }
        
        return modal;
    }
    
    // Función para abrir el modal de imagen
    function openImageModal(imageSrc, title) {
        console.log('📸 Abriendo modal:', title);
        
        const modal = ensureImageModalExists();
        const modalImg = document.getElementById('imageModalImg');
        const modalTitle = document.getElementById('imageModalTitle');
        
        if (!modal || !modalImg || !modalTitle) {
            console.error('❌ Error: elementos del modal no encontrados');
            return;
        }
        
        // Configurar el modal
        modalTitle.textContent = title;
        modalImg.src = imageSrc;
        modalImg.alt = title;
        
        // Mostrar el modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Configurar eventos
        setupModalEvents(modal, modalImg);
        
        console.log('✅ Modal abierto:', imageSrc);
    }
    
    // Función para cerrar el modal
    function closeImageModal() {
        console.log('❌ Cerrando modal');
        
        const modal = document.getElementById('imageModal');
        if (!modal) return;
        
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Limpiar imagen
        const modalImg = document.getElementById('imageModalImg');
        if (modalImg) {
            modalImg.src = '';
            modalImg.style.transform = 'scale(1)';
        }
        
        // Remover eventos
        removeModalEvents(modal, modalImg);
        
        console.log('✅ Modal cerrado');
    }
    
    // Función para configurar eventos del modal
    function setupModalEvents(modal, modalImg) {
        // Cerrar con Escape
        const handleKeydown = (e) => {
            if (e.key === 'Escape') closeImageModal();
        };
        
        // Cerrar al hacer clic fuera
        const handleOutsideClick = (e) => {
            if (e.target === modal) closeImageModal();
        };
        
        // Zoom en imagen
        const handleImageClick = () => {
            if (modalImg.style.transform === 'scale(2)') {
                modalImg.style.transform = 'scale(1)';
                modalImg.style.cursor = 'zoom-in';
            } else {
                modalImg.style.transform = 'scale(2)';
                modalImg.style.cursor = 'zoom-out';
            }
        };
        
        document.addEventListener('keydown', handleKeydown);
        modal.addEventListener('click', handleOutsideClick);
        modalImg.addEventListener('click', handleImageClick);
        
        // Guardar referencias para poder removerlas
        modal._handleKeydown = handleKeydown;
        modal._handleOutsideClick = handleOutsideClick;
        modalImg._handleImageClick = handleImageClick;
    }
    
    // Función para remover eventos del modal
    function removeModalEvents(modal, modalImg) {
        if (modal._handleKeydown) {
            document.removeEventListener('keydown', modal._handleKeydown);
        }
        if (modal._handleOutsideClick) {
            modal.removeEventListener('click', modal._handleOutsideClick);
        }
        if (modalImg && modalImg._handleImageClick) {
            modalImg.removeEventListener('click', modalImg._handleImageClick);
        }
    }
    
    // Hacer funciones globales
    window.openImageModal = openImageModal;
    window.closeImageModal = closeImageModal;
    
    // Inicializar cuando el DOM esté listo
    function init() {
        console.log('🚀 Inicializando modal de imagen');
        ensureImageModalExists();
        
        // Verificar que las imágenes existan
        const images = ['img/Fotos-Index/TyC.png', 'img/Fotos-Index/Guia-Medidas.png'];
        images.forEach(src => {
            const img = new Image();
            img.onload = () => console.log('✅ Imagen verificada:', src);
            img.onerror = () => console.error('❌ Error cargando imagen:', src);
            img.src = src;
        });
    }
    
    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // También ejecutar cuando la ventana se cargue
    window.addEventListener('load', init);
    
    console.log('🖼️ Script de corrección del modal de imagen cargado');
})();