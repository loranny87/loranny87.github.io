// Función para agregar productos al carrito
function addToCart(nombre, precio) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Obtener carrito o crear uno vacío
    cart.push({ nombre, precio }); // Agregar el libro al carrito
    localStorage.setItem("cart", JSON.stringify(cart)); // Guardar en LocalStorage
    alert(`${nombre} ha sido añadido al carrito.`); // Mostrar mensaje al usuario
}

// Función para mostrar los productos en carrito.html
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Obtener carrito
    let cartItems = document.getElementById("cart-items"); // Lista donde se mostrarán los productos

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio} `;
        
        // Botón para eliminar producto del carrito
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.onclick = function () {
            removeFromCart(index);
        };

        li.appendChild(deleteBtn);
        cartItems.appendChild(li);
    });
});

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Eliminar el producto del carrito
    localStorage.setItem("cart", JSON.stringify(cart)); // Guardar cambios
    location.reload(); // Recargar la página para actualizar la lista
}

// Función para vaciar el carrito
function clearCart() {
    localStorage.removeItem("cart"); // Eliminar el carrito de LocalStorage
    alert("Carrito vaciado.");
    location.reload(); // Recargar la página para reflejar los cambios
}


// Función para actualizar el contador del carrito
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
}

// Llamamos la función cuando cargue la página
document.addEventListener("DOMContentLoaded", updateCartCount);

// Modificamos la función addToCart para que actualice el contador
function addToCart(nombre, precio) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ nombre, precio });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount(); // Actualizar el contador
    alert(`${nombre} ha sido añadido al carrito.`);
}

