// Load tasks when page opens 
window.onload = function () {
  loadTasks();
  displayProducts(products);
};

// Add new task
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "delete";
  delBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
    saveTasks();
  };

  li.onclick = () => {
    li.classList.toggle("done");
    saveTasks();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
  saveTasks();
}

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.childNodes[0].textContent.trim(),
      done: li.classList.contains("done")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  saved.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.className = "delete";
    delBtn.onclick = (e) => {
      e.stopPropagation();
      li.remove();
      saveTasks();
    };

    if (task.done) li.classList.add("done");
    li.onclick = () => {
      li.classList.toggle("done");
      saveTasks();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Search tasks
function searchTask() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll("#taskList li").forEach(li => {
    const text = li.childNodes[0].textContent.toLowerCase();
    li.style.display = text.includes(search) ? "flex" : "none";
  });
}

// Highlight search input
function highlightSearch() {
  const input = document.getElementById("searchInput");
  input.classList.add("highlight");
  setTimeout(() => {
    input.classList.remove("highlight");
  }, 1000);
}

// Products data
const products = [
  { name: "Designer Silk Saree", category: "saree", price: 1499, rating: 4.8, image: "assets/saree.jpg" },
  { name: "Branded Blue Jeans", category: "jeans", price: 1299, rating: 4.6, image: "assets/jeans.jpg" },
  { name: "White Cotton T-Shirt", category: "tshirt", price: 499, rating: 4.4, image: "assets/t-shirt.jpg" },
  { name: "Cottan Kurta", category: "kurta", price: 1000, rating: 4.4, image: "assets/Kurta.jpg" },
  { name: "Branded Shoes", category: "shoes", price: 2500, rating: 4.1, image: "assets/Shoes.jpg" },
  { name: "Analog Watch", category: "watch", price: 3000, rating: 4.4, image: "assets/Watch.jpg" },
  { name: "Bangles", category: "bangles", price: 100, rating: 4.2, image: "assets/Bangles.jpg" },
  { name: "Monkey Cap", category: "monkeycap", price: 250, rating: 4.3, image: "assets/monkeycap.jpg" },
  { name: "Jacket", category: "jacket", price: 600, rating: 4.5, image: "assets/jacket.jpg" },
  { name: "Charger", category: "charger", price: 800, rating: 4.6, image: "assets/charger.jpg" },
  { name: "Notebook", category: "notebook", price: 100, rating: 4.1, image: "assets/notebook.jpg" },
  { name: "Socks", category: "socks", price: 130, rating: 4.0, image: "assets/socks.jpg" },
  { name: "Blazer", category: "blazer", price: 5000, rating: 4.4, image: "assets/blazer.jpg" },
  { name: "Medicine", category: "medicine", price: 1200, rating: 4.7, image: "assets/medicine.jpg" },
  { name: "Bracelet", category: "bracelet", price: 100, rating: 4.1, image: "assets/bracelet.jpg" },
  { name: "Smart Phone", category: "mobile", price: 100000, rating: 4.6, image: "assets/mobile.jpg" },
  { name: "Ear Rings", category: "earring", price: 2000, rating: 4.0, image: "assets/earring.jpg" },
  { name: "Top", category: "top", price: 180, rating: 2.6, image: "assets/top.jpg" },
  { name: "Study Lamp", category: "studylight", price: 1000, rating: 4.4, image: "assets/studylight.jpg" },
  { name: "Powder", category: "powder", price: 200, rating: 4.2, image: "assets/powder.jpg" },
  { name: "Skin Care", category: "skincare", price: 1050, rating: 4.5, image: "assets/skincare.jpg" },
  { name: "Belt", category: "belt", price: 150, rating: 3.3, image: "assets/belt.jpg" },
  { name: "Luggage", category: "luggage", price: 4000, rating: 4.8, image: "assets/luggage.jpg" },
  { name: "Wallet", category: "wallet", price: 400, rating: 4.3, image: "assets/wallet.jpg" },
  { name: "School Bag", category: "schoolbag", price: 1000, rating: 4.7, image: "assets/bag.jpg" },
  { name: "Goggles", category: "goggles", price: 180, rating: 4.0, image: "assets/goggles.jpg" },
  { name: "Hand Bag", category: "handbag", price: 1200, rating: 4.4, image: "assets/handbag.jpg" },
  { name: "Jewellery", category: "jewellery", price: 10090, rating: 4.8, image: "assets/jewellery.jpg" },
  { name: "Flip Flop", category: "sleeper", price: 200, rating: 3.9, image: "assets/sleeper.jpg" },
  { name: "Funky Shirts", category: "shirts", price: 530, rating: 4.2, image: "assets/shirts.jpg" }
];

// Display products
function displayProducts(list) {
  const container = document.getElementById("productGrid");
  container.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h4>${p.name}</h4>
      <p>Price: ₹${p.price}</p>
      <p>Rating: ⭐ ${p.rating}</p>
    `;
    container.appendChild(card);
  });
}

// Filter products by category
function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

// Sort products
function sortProducts() {
  const sortBy = document.getElementById("sortFilter").value;
  const sorted = [...products].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "name") return a.name.localeCompare(b.name);
  });
  displayProducts(sorted);
}

// Toggle light/dark theme
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('themeToggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
});