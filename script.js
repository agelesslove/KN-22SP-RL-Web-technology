// Перемикання теми
const themeToggleBtn = document.getElementById("themeToggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);

  themeToggleBtn.textContent = currentTheme === "dark" ? "🌞 Світла тема" : "🌙 Темна тема";
});

// Встановлення теми при завантаженні
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme);
  themeToggleBtn.textContent = savedTheme === "dark" ? "🌞 Світла тема" : "🌙 Темна тема";
});

// Обробка форми
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Будь ласка, заповніть усі поля!");
    return;
  }

  alert(`Дякуємо, ${name}, за повідомлення!`);
  console.log("Ім'я:", name);
  console.log("Email:", email);
  console.log("Повідомлення:", message);

  this.reset();
});

// Лічильник переглядів
window.addEventListener("load", () => {
  let views = localStorage.getItem("page_views");

  if (views) {
    views = parseInt(views) + 1;
  } else {
    views = 1;
  }

  localStorage.setItem("page_views", views);
  document.getElementById("viewCounter").textContent = `Переглядів сторінки: ${views}`;
});
// Спочатку приховуємо всі вкладки
document.querySelectorAll('.tabcontent').forEach(tab => {
  tab.style.display = 'none';
});

// Показуємо вкладку при натисканні на відповідну кнопку
function openTab(evt, tabName) {
  const tablinks = document.querySelectorAll(".tablink");
  const tabcontents = document.querySelectorAll(".tabcontent");

  // Приховуємо всі вкладки
  tabcontents.forEach(content => {
    content.style.display = "none";
  });

  // Виділяємо активну вкладку
  tablinks.forEach(link => {
    link.classList.remove("active");
  });

  // Показуємо вибрану вкладку
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Спочатку відкриваємо вкладку "Про мене" за замовчуванням
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".tablink.active").click();
});

// Додаємо обробники на вкладки
document.querySelectorAll(".tablink").forEach(link => {
  link.addEventListener("click", (event) => {
    openTab(event, link.dataset.target);
  });
});
// Покажемо/приховаємо секретну секцію при наведенні
document.querySelector('#secretSection').addEventListener('mouseenter', function() {
  this.style.display = 'block'; // Показати при наведенні
});

document.querySelector('#secretSection').addEventListener('mouseleave', function() {
  this.style.display = 'none'; // Приховати, коли курсор йде
});