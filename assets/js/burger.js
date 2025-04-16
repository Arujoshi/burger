const navLinks = document.querySelectorAll('.center-nav a');
const sections = document.querySelectorAll('section[id]'); // Assuming each section has a 'section' tag

// Function to change the active link based on scroll position
function setActiveLink() {
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
}

// Event listener for scroll
window.addEventListener('scroll', setActiveLink);

// Event listener for clicking on the links
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    // Smooth scroll to section
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 50, // Adjust for fixed header (if you have one)
      behavior: 'smooth'
    });
  });
});


// Call initially to set active link based on the initial scroll position
setActiveLink();




const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.querySelector('.center-nav');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarLinks.classList.toggle('active');
});




const burgerImages = document.querySelectorAll(".burger img");
const toggleImages = document.querySelectorAll(".burger-toggle img");
let currentIndex = 0;

toggleImages[currentIndex].classList.add("active");

burgerImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    toggleImages.forEach((toggleImg) => toggleImg.classList.remove("active"));
    toggleImages[currentIndex].classList.add("active");
    toggleImages[currentIndex].src = burgerImages[index].src;
    currentIndex = (currentIndex + 1) % toggleImages.length;
  });
});

function createStars() {
  const starsContainer = document.getElementById("stars");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * windowWidth}px`;
    star.style.top = `${Math.random() * windowHeight}px`;
    starsContainer.appendChild(star);
  }
}

window.addEventListener("load", createStars);


const sr = ScrollReveal({
  origin:'top',
  distance:'80px',
  duration:2500,
  delay:400,
  // reset:true
})

sr.reveal('.navbar, #about-hero')
sr.reveal('.burger',{origin:'bottom'})
sr.reveal('.story-container h2, .mission-content, .address',{origin:'left'})
sr.reveal('.story-content, .mission-container h2',{origin:'right'})
// sr.reveal('.follow__data, .follow__content-1 img',{interval:100})


const menuData = {
  burgers: [
    { name: "Crispy Veg Burger", price: "$5.99", image: "menuburger1.jpeg" },
    { name: "Korean Spicy Paneer Burger", price: "$7.99", image: "menuburger2.jpeg" },
    { name: "Veg Makhani Burst Burger", price: "$4.99", image: "menuburger3.jpeg" },
    { name: "Korean Spicy Chicken Burger", price: "$9.99", image: "menuburger4.jpeg" },
    { name: "Crispy Chicken", price: "$8.99", image: "menuburger5.jpeg" },
    { name: "Crispy Veg Double Patty", price: "$6.99", image: "menuburger6.jpeg" },
  ],
  fries: [
    { name: "Peri Peri Fries", price: "$2.99", image: "snack1.jpeg" },
    { name: "Saucy Fries", price: "$3.99", image: "snack3.jpeg" },
    { name: "Boneless Wings", price: "$5.99", image: "snack2.jpeg" },
    { name: "Crunchy Chicken", price: "$6.99", image: "snack4.jpeg" },
    { name: "Korean Spicy Chicken", price: "$8.99", image: "snack5.jpeg" },
    { name: "Chicken Pizza Puff", price: "$9.99", image: "snack6.jpeg" },
  ],
  beverages: [
    { name: "Coca Float", price: "$2.99", image: "drinks1.jpeg" },
    { name: "Thums Up", price: "$2.99", image: "drinks3.jpeg" },
    { name: "Sprite", price: "$2.49", image: "drinks4.jpeg" },
    { name: "Fanta", price: "$2.49", image: "drinks2.jpeg" },
    { name: "Chocolate Thick Shake", price: "$4.99", image: "drinks5.jpeg" },
    { name: "Berry Thick Shake", price: "$5.49", image: "drinks6.jpeg" },
    { name: "Mango Thick Shake", price: "$6.49", image: "drinks7.jpeg" },
    { name: "Schweppes Water Bottle", price: "$2.99", image: "drinks8.jpeg" },
  ]
};

const buttons = document.querySelectorAll(".tab-button");
const menuContainer = document.getElementById("menu-items");

function displayMenu(category) {
  const items = menuData[category];
  menuContainer.innerHTML = items.map(item => `
    <div class="menu-card">
      <img src="assets/img/${item.image}" alt="${item.name}">
      <h4>${item.name}</h4>
      <span>${item.price}</span>
    </div>
  `).join('');
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".tab-button.active").classList.remove("active");
    button.classList.add("active");
    displayMenu(button.getAttribute("data-category"));
  });
});

// Display default tab
displayMenu("burgers");