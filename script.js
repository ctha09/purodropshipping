/**
 * Abre el modal correspondiente y bloquea el scroll de la página principal
 */
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Cierra el modal y restaura el scroll del body
 */
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

/**
 * Redirige al perfil de Instagram para concretar la compra
 */
function irAInstagram() {
    const instagramURL = "https://www.instagram.com/purodropshipping?igsh=MWFhZzd1czQ5YzBncQ==";
    window.open(instagramURL, '_blank');
}

/**
 * Cierra el modal si el usuario hace clic fuera del contenido blanco
 */
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
