function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
    const checkout = document.getElementById('checkoutSector');
    if (checkout) checkout.style.display = 'none';

    if (window.innerWidth > 900) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
        const checkout = document.getElementById('checkoutSector');
        if (checkout) checkout.style.display = 'none';
    }
}

function abrirCheckout(producto) {
    const checkout = document.getElementById('checkoutSector');
    const label = document.getElementById('itemSeleccionado');
    checkout.style.display = 'block';
    label.innerText = "Seleccionado: " + producto;
    checkout.scrollIntoView({ behavior: 'smooth' });
}

function enviarInformacion() {
    // LINK DE TU QR DE WHATSAPP
    const baseLink = "https://wa.me/qr/VMZA3UJHUCOTO1"; 
    
    const item = document.getElementById('itemSeleccionado').innerText;
    const nombre = document.getElementById('nombre').value;
    const cp = document.getElementById('cp').value;
    const ciudad = document.getElementById('ciudad').value;
    const provincia = document.getElementById('provincia').value;
    const tel = document.getElementById('telefono').value;

    if(!nombre || !cp || !ciudad || !provincia || !tel) {
        alert("Por favor, completa todos los campos de envío.");
        return;
    }

    // Estructura del mensaje
    const mensaje = "💎 *NUEVO PEDIDO - PURO DROPSHIPPING* 💎\n\n" +
                    "✨ *Producto:* " + item + "\n" +
                    "--------------------------------\n" +
                    "👤 *Cliente:* " + nombre + "\n" +
                    "📮 *CP:* " + cp + "\n" +
                    "🏙️ *Ciudad:* " + ciudad + "\n" +
                    "🗺️ *Provincia:* " + provincia + "\n" +
                    "📞 *Teléfono:* " + tel + "\n" +
                    "--------------------------------\n" +
                    "Espero su confirmación. Gracias!";

    // Para los links de QR, añadimos el texto como un parámetro de consulta
    const whatsappLink = baseLink + "?text=" + encodeURIComponent(mensaje);
    
    window.open(whatsappLink, '_blank');
}
