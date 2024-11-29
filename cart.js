// Inicializar carrito desde el almacenamiento local
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Elementos del contador del carrito
const cartCount = document.getElementById('cart-count');

// Función para actualizar el contador del carrito
function updateCartCount() {
    const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);
    cartCount.textContent = `(${totalItems})`; // Actualiza el texto del contador con el número total de productos
}

// Función para agregar un producto al carrito
function addToCart(event) {
    const button = event.target;
    const product = {
        id: button.getAttribute('data-id'),
        name: button.getAttribute('data-name'),
        price: parseFloat(button.getAttribute('data-price')),
        quantity: 1,
        image: button.getAttribute('data-image')
    };

    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;  // Si ya existe, aumentar la cantidad
    } else {
        cart.push(product);  // Si no existe, añadir el producto
    }

    // Guardar el carrito actualizado en el almacenamiento local
    localStorage.setItem("cart", JSON.stringify(cart));

    // Actualizar el contador del carrito
    updateCartCount();
}

// Asignar la función de agregar al carrito a todos los botones con la clase "cart"
const addToCartButtons = document.querySelectorAll('.cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Inicializar el contador del carrito cuando se carga la página
updateCartCount();

// Función para redirigir a la página del carrito
document.getElementById('go-to-cart').addEventListener('click', function() {
    // Redirige a la página de carrito
    window.location.href = 'carrito.html';  // Ajusta la URL si es necesario
});
