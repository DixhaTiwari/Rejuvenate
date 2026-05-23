
document.addEventListener("DOMContentLoaded", () => {
  setupAddToCartButtons();
  updateCartCount();
  setupLanguageSwitcher(); 
  loadSavedLanguage();     
});


function setupAddToCartButtons() {
  const cartButtons = document.querySelectorAll(".add-to-cart");

  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      const name = button.dataset.name;
      const price = parseInt(button.dataset.price);
      const image = button.closest(".product-card").querySelector("img").src;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = cart.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ id, name, price, image, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      alert(`${name} added to cart!`);
    });
  });
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCountSpan = document.querySelector(".cart-count");
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (cartCountSpan) {
    cartCountSpan.textContent = totalCount;
  }
}


const translations = {
  en: {
    siteTitle: "REJUVENATE",
    shopHeading: "Your Shopping Starts Here",
    addToCart: "Add to Cart",
    siteName: "REJUVENATE",
    rights: "All rights reserved.",
    tagline: "Where broken becomes beautiful.",
    newsletterPlaceholder: "Subscribe to our newsletter",
    subscribeBtn: "Subscribe",
    languageLabel: "Language:",

    navHome: "Home",
    navBlog: "Blog",
    navShop: "Shop",
    navContact: "Contact",
    navAbout: "About",
    navPhilosophy: "Philosophy",

    
    product1Title: "Green Ceramic Plate",
    product1Desc: "Elegant | Handcrafted",
    product1Price: "MRP: ₹299",

   
  },
  hin: {
    siteTitle: "पुनर्यौवन",
    shopHeading: "आपकी खरीदारी यहाँ से शुरू होती है",
    addToCart: "कार्ट में जोड़ें",
    siteName: "पुनर्यौवन",
    rights: "सभी अधिकार सुरक्षित।",
    tagline: "जहां टूटा हुआ भी सुंदर होता है।",
    newsletterPlaceholder: "हमारे न्यूज़लेटर की सदस्यता लें",
    subscribeBtn: "सदस्यता लें",
    languageLabel: "भाषा:",

    navHome: "मुखपृष्ठ",
    navBlog: "ब्लॉग",
    navShop: "दुकान",
    navContact: "संपर्क करें",
    navAbout: "हमारे बारे में",
    navPhilosophy: "दर्शन",

    product1Title: "हरी सिरेमिक प्लेट",
    product1Desc: "आकर्षक | हस्तनिर्मित",
    product1Price: "एमआरपी: ₹299",

    
  }
};

function setupLanguageSwitcher() {
  const headerSelect = document.getElementById("lang-header");
  const footerSelect = document.getElementById("lang-footer");

  [headerSelect, footerSelect].forEach(select => {
    if (select) {
      select.addEventListener("change", (e) => {
        const lang = e.target.value;
        localStorage.setItem("preferredLanguage", lang);
        applyLanguage(lang);
        
        if (headerSelect && headerSelect.value !== lang) headerSelect.value = lang;
        if (footerSelect && footerSelect.value !== lang) footerSelect.value = lang;
      });
    }
  });
}

function loadSavedLanguage() {
  const lang = localStorage.getItem("preferredLanguage") || "en";
  applyLanguage(lang);

  const headerSelect = document.getElementById("lang-header");
  const footerSelect = document.getElementById("lang-footer");

  if (headerSelect) headerSelect.value = lang;
  if (footerSelect) footerSelect.value = lang;
}

function applyLanguage(lang) {
  const langData = translations[lang];

  if (!langData) return;

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (langData[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = langData[key];
      } else {
        el.textContent = langData[key];
      }
    }
  });
}

const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

