document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Recoger los datos del formulario
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                frequency: formData.get('frequency'),
                acceptedPrivacy: formData.get('privacy') === 'on'
            };

            // Aquí normalmente enviarías los datos a tu servidor
            // Por ahora, simularemos una respuesta exitosa
            try {
                // Simular envío al servidor
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Mostrar mensaje de éxito
                showNotification('¡Gracias por suscribirte! Revisa tu email para confirmar la suscripción.', 'success');
                
                // Limpiar el formulario
                this.reset();
            } catch (error) {
                showNotification('Hubo un error al procesar tu suscripción. Por favor, intenta de nuevo.', 'error');
            }
        });
    }
});

function showNotification(message, type) {
    // Crear el elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Añadir al DOM
    document.body.appendChild(notification);
    
    // Mostrar con animación
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Eliminar después de 5 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
} 