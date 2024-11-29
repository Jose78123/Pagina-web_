// Funcionalidad para las miniaturas
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remover clase active de todas las miniaturas
            thumbnails.forEach(t => t.classList.remove('active'));
            // Agregar clase active a la miniatura seleccionada
            this.classList.add('active');
            // Actualizar imagen principal
            mainImage.src = this.src;
        });
    });

    // Funcionalidad para opciones de color
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Funcionalidad para botones de compra
    const buyButton = document.querySelector('.buy-button');
    const cartButton = document.querySelector('.cart-button');

    buyButton.addEventListener('click', function() {
        alert('Redirigiendo al proceso de compra...');
    });

    cartButton.addEventListener('click', function() {
        alert('Producto agregado al carrito');
    });

    // Funcionalidad para ver medios de pago
    const paymentLink = document.querySelector('.payment-link');
    paymentLink.addEventListener('click', function(e) {
        e.preventDefault();
        const paymentMethods = document.querySelector('.payment-methods');
        paymentMethods.scrollIntoView({ behavior: 'smooth' });
    });

    // Mostrar/ocultar características del producto
    const moreInfoLink = document.querySelector('.more-info');
    moreInfoLink.addEventListener('click', function(e) {
        e.preventDefault();
        const description = document.querySelector('.product-description p');
        description.style.maxHeight = description.style.maxHeight ? null : '1000px';
    });
});