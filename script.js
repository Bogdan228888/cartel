// ==== PRODUCTS DATA ====
const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 699,
    image: "phone.png",
    description: "High-performance smartphone with 5G, 128GB storage, and triple camera."
  },
  {
    id: 2,
    name: "Laptop",
    price: 1199,
    image: "laptop.png",
    description: "Powerful laptop for professionals and gamers with 16GB RAM and RTX GPU."
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 249,
    image: "watch.png",
    description: "Stylish smartwatch with health tracking, notifications, and long battery life."
  },
  {
    id: 4,
    name: "KeyBoard",
    price: 399,
    image: "keyboard.png",
    description: "The Professional Gaming Mechanical Keyboard."
  },
  {
    id: 5,
    name: "System unit",
    price: 1399,
    image: "pc.png",
    description: "Premium Style. Optimized Airflow. Easy Build."
  },
  {
    id: 6,
    name: "Mouse",
    price: 499,
    image: "mouse.png",
    description: "Comfort. Reliability. Simplicity." 
  },
  {
    id: 7,
    name: "Headphones",
    price: 499,
    image: "headphones.png",
    description: "Immersive Sound. Complete Silence. All Day Comfort." 
  },
  {
    id: 8,
    name: "Microphone",
    price: 199,
    image: "microphone.png",
    description: "Studio-Quality Sound. Effortless Setup. Perfect for Creators." 
  }
];

// ==== RENDER PRODUCTS ====
const productList = document.getElementById("product-list");
if (productList) {
  products.forEach(product => {
    const item = document.createElement("article");
    item.classList.add("product-item");
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <p class="product-text">${product.name}</p>
      <p class="product-price">$${product.price}</p>
    `;
    item.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "product.html";
    });
    productList.appendChild(item);
  });
}

// ==== SCROLL TO PRODUCTS ====
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
