
document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.getElementById("cart-icon");
  const cartPanel = document.getElementById("cart-panel");
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  const vaciarBtn = document.getElementById("vaciar-btn");
  const addButtons = document.querySelectorAll(".add-to-cart");

  let carrito = [];

  cartIcon.addEventListener("click", () => {
    cartPanel.style.display = cartPanel.style.display === "block" ? "none" : "block";
  });

  vaciarBtn.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
  });

  addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const nombre = btn.getAttribute("data-name");
      const precio = parseFloat(btn.getAttribute("data-price"));
      carrito.push({ nombre, precio });
      actualizarCarrito();
    });
  });

  function actualizarCarrito() {
    cartItems.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.nombre} - $${item.precio}`;

      const eliminarBtn = document.createElement("button");
      eliminarBtn.textContent = "❌";
      eliminarBtn.onclick = () => {
        carrito.splice(index, 1);
        actualizarCarrito();
      };

      li.appendChild(eliminarBtn);
      cartItems.appendChild(li);
      total += item.precio;
    });

    cartCount.textContent = carrito.length;
    cartTotal.textContent = total.toFixed(2);
  }

  // Filtros
  const genreFilter = document.getElementById("genre-filter");
  const searchInput = document.getElementById("search-input");

  genreFilter.addEventListener("change", filtrarLibros);
  searchInput.addEventListener("input", filtrarLibros);

  function filtrarLibros() {
    const genre = genreFilter.value.toLowerCase();
    const textoBusqueda = searchInput.value.toLowerCase();
    const libros = document.querySelectorAll(".book");

    libros.forEach(libro => {
      const titulo = libro.getAttribute("data-title").toLowerCase();
      const genero = libro.getAttribute("data-genre").toLowerCase();

      const coincideGenero = genre === "todos" || genero === genre;
      const coincideBusqueda = titulo.includes(textoBusqueda);

      libro.style.display = coincideGenero && coincideBusqueda ? "block" : "none";
    });
  }
});



  const cartPanel = document.getElementById("cart-panel");
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartIcon = document.getElementById("cart-icon");

  let carrito = [];

  cartIcon.addEventListener("click", () => {
    cartPanel.style.display = cartPanel.style.display === "block" ? "none" : "block";
  });

  function actualizarCarrito() {
    cartItems.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.nombre} - $${item.precio}`;

      const btn = document.createElement("button");
      btn.textContent = "❌";
      btn.onclick = () => {
        carrito.splice(index, 1);
        actualizarCarrito();
      };

      li.appendChild(btn);
      cartItems.appendChild(li);
      total += item.precio;
    });

    cartCount.textContent = carrito.length;
    cartTotal.textContent = total.toFixed(2);
  }

  function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio: parseFloat(precio) });
    actualizarCarrito();
  }

  // ENLAZAR TODOS LOS BOTONES DE CADA LIBRO
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const nombre = button.getAttribute("data-name");
      const precio = button.getAttribute("data-price");
      agregarAlCarrito(nombre, precio);
    });
  });

  function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
  }


