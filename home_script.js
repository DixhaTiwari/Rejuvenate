document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => fadeObserver.observe(el));

  
  const scrollSections = document.querySelectorAll('.fade-scroll-section');
  const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-scroll-visible');
      } else {
        entry.target.classList.remove('fade-scroll-visible');
      }
    });
  }, { threshold: 0.3 });
  scrollSections.forEach(section => scrollObserver.observe(section));

  const videoBox = document.getElementById("videoBox");
  if (videoBox) {
    const video = document.createElement("video");
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.borderRadius = "12px";
    video.style.display = "block";

    const source = document.createElement("source");
    source.setAttribute("src", "./videos/kintsugi.mp4");
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);
    videoBox.innerHTML = "";
    videoBox.appendChild(video);
  }

 
  const languageSelect = document.querySelector("select");
  if (languageSelect) {
    languageSelect.addEventListener("change", (e) => {
      changeLanguage(e.target.value);
    });
  }
});



const languageData = {
  en: {
    siteTitle: "REJUVENATE",
    navHome: "Home",
    navBlog: "Blog",
    navShop: "Shop",
    navContact: "Contact",
    navAbout: "About",
    navPhilosophy: "Philosophy",
    mainTitle: "REJUVENATE",
    mainTagline: "Inspired by KINTSUGI",
    mainSubtext: "~Broken is Beautiful~",
    artisanHeading: "The Artisan Model",
    artisanText: "Our artisans bring diverse skills under one roof, crafting with tradition and innovation.",
    artisanLink: "More About Our Philosophy →",
    productGallery: "Product Gallery",
    productGalleryText: "We blend traditional craftsmanship with modern design to give broken things new life. This is not just restoration—it's rebirth.",
    exploreProducts: "Explore Products",
    ourChannel: "Our Channel",
    channelTagline: "Beautifying Broken Pottery.",
    watchOnYoutube: "Watch on YouTube",
    footerTagline: "Where broken becomes beautiful.",
    subscribeBtn: "Subscribe",
    languageLabel: "Language:",
    blogHeroHeading: "Rejuvenate – The Art of Kintsugi",
    blogHeroText: "Experience the philosophy in motion — where broken becomes beautiful.",
    meetArtisans: "Meet the Artisans Behind the Gold",
    meetArtisansText: "Discover the passionate souls who breathe life into broken pottery...",
    visitArtisan: "Visit Artisan Website",
    artisansStory: "These artisans are not just creators —",
    artisansStoryText: "— they are storytellers. Every piece they touch carries scars...",
    embraceFlaws: "\"Embracing Flaws, Creating Beauty\"",
    embraceText: "Kintsugi teaches us that imperfections are not weaknesses...",
    contactHeading1: "We'd love to hear from you!",
    contactHeading2: "Drop us a message below.",
    inquiryFormTitle: "Inquiry Form",
    inquiryFormDesc: "Discover the passionate souls who breathe life into broken pottery...",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message",
    formSubmit: "Submit",
    newsletterPlaceholder: "Subscribe to our newsletter",
    shopHeading: "Your Shopping Starts Here",
    product1Title: "Green Ceramic Plate",
    product1Desc: "Elegant | Handcrafted",
    product1Price: "MRP: ₹299",
    product2Title: "Luxury Cup",
    product2Desc: "Eco-friendly",
    product2Price: "MRP: ₹199",
    product3Title: "Recycled Plates",
    product3Desc: "Stylish | Sustainable",
    product3Price: "MRP: ₹599",
    product4Title: "Silver Blue Bowl",
    product4Desc: "Recycled",
    product4Price: "MRP: ₹489",
    product5Title: "China Bone Plate",
    product5Desc: "Minimal | Matte Finish",
    product5Price: "MRP: ₹499",
    product6Title: "Gloss Green Bowl",
    product6Desc: "Rustic | Handmade",
    product6Price: "MRP: ₹399",
    product7Title: "Golden Crack Blue Plate",
    product7Desc: "Eco | Biodegradable",
    product7Price: "MRP: ₹199",
    product8Title: "Flower Vase",
    product8Desc: "Simple | Chic Design",
    product8Price: "MRP: ₹249",
    product9Title: "Elegant Cup",
    product9Desc: "Artisan | Hand-painted",
    product9Price: "MRP: ₹749",
    product10Title: "Kintsugi Bowl",
    product10Desc: "Inspired | Gold Crack Design",
    product10Price: "MRP: ₹1299",
    product11Title: "Handcrafted Flower Vase",
    product11Desc: "Healing | Gold Embroidered",
    product11Price: "MRP: ₹349",
    product12Title: "Rose Gold Plate",
    product12Desc: "Minimalist | Beautiful",
    product12Price: "MRP: ₹549",
    addToCart: "Add to Cart"
  },
  hin: {
    siteTitle: "पुनर्जीवित करें",
    navHome: "होम",
    navBlog: "ब्लॉग",
    navShop: "दुकान",
    navContact: "संपर्क करें",
    navAbout: "हमारे बारे में",
    navPhilosophy: "दर्शन",
    mainTitle: "पुनर्जीवित करें",
    mainTagline: "किन्त्सुगी से प्रेरित",
    mainSubtext: "~टूटा भी सुंदर है~",
    artisanHeading: "शिल्पकार मॉडल",
    artisanText: "हमारे शिल्पकार परंपरा और नवाचार के साथ काम करते हैं।",
    artisanLink: "हमारे दर्शन के बारे में और जानें →",
    productGallery: "उत्पाद गैलरी",
    productGalleryText: "हम पारंपरिक शिल्प को आधुनिक डिज़ाइन के साथ मिलाते हैं।",
    exploreProducts: "उत्पाद देखें",
    ourChannel: "हमारा चैनल",
    channelTagline: "टूटी हुई मिट्टी की सुंदरता।",
    watchOnYoutube: "यूट्यूब पर देखें",
    footerTagline: "जहां टूटा हुआ सुंदर बनता है।",
    subscribeBtn: "सब्सक्राइब करें",
    languageLabel: "भाषा:",
    blogHeroHeading: "पुनर्जीवित करें – किन्त्सुगी की कला",
    blogHeroText: "दर्शन को गति में अनुभव करें — जहाँ टूटा सुंदर बन जाता है।",
    meetArtisans: "स्वर्ण के पीछे के शिल्पकारों से मिलिए",
    meetArtisansText: "उन आत्माओं को जानें जो टूटी हुई मिट्टी में जान डालते हैं...",
    visitArtisan: "शिल्पकार वेबसाइट पर जाएं",
    artisansStory: "ये सिर्फ कारीगर नहीं —",
    artisansStoryText: "ये कहानी कहने वाले हैं। हर टुकड़ा जो ये छूते हैं, उसमें आत्मा होती है...",
    embraceFlaws: "\"कमियों को अपनाना, सुंदरता बनाना\"",
    embraceText: "किंत्सुगी सिखाता है कि दोष कमजोरी नहीं हैं...",
    contactHeading1: "हम आपसे सुनना चाहेंगे!",
    contactHeading2: "हमें नीचे संदेश भेजें।",
    inquiryFormTitle: "पूछताछ फ़ॉर्म",
    inquiryFormDesc: "उन आत्माओं को जानें जो टूटी हुई मिट्टी में जान डालते हैं...",
    formName: "आपका नाम",
    formEmail: "आपका ईमेल",
    formMessage: "आपका संदेश",
    formSubmit: "भेजें",
    newsletterPlaceholder: "हमारा न्यूज़लेटर सब्सक्राइब करें",
    shopHeading: "आपकी खरीदारी यहां से शुरू होती है",
    product1Title: "हरा सिरेमिक प्लेट",
    product1Desc: "शानदार | हस्तनिर्मित",
    product1Price: "एमआरपी: ₹299",
    product2Title: "लक्ज़री कप",
    product2Desc: "पर्यावरण के अनुकूल",
    product2Price: "एमआरपी: ₹199",
    product3Title: "पुनर्नवीनीकरण प्लेट्स",
    product3Desc: "स्टाइलिश | टिकाऊ",
    product3Price: "एमआरपी: ₹599",
    product4Title: "सिल्वर ब्लू कटोरा",
    product4Desc: "पुनर्नवीनीकरण",
    product4Price: "एमआरपी: ₹489",
    product5Title: "चाइना बोन प्लेट",
    product5Desc: "न्यूनतम | मैट फिनिश",
    product5Price: "एमआरपी: ₹499",
    product6Title: "ग्लॉस ग्रीन बाउल",
    product6Desc: "ग्रामीण | हस्तनिर्मित",
    product6Price: "एमआरपी: ₹399",
    product7Title: "गोल्डन क्रैक ब्लू प्लेट",
    product7Desc: "इको | बायोडिग्रेडेबल",
    product7Price: "एमआरपी: ₹199",
    product8Title: "फूलदान",
    product8Desc: "सरल | सुंदर डिज़ाइन",
    product8Price: "एमआरपी: ₹249",
    product9Title: "एलिगेंट कप",
    product9Desc: "कलात्मक | हस्त चित्रित",
    product9Price: "एमआरपी: ₹749",
    product10Title: "किंत्सुगी बाउल",
    product10Desc: "प्रेरित | सुनहरे दरार डिज़ाइन",
    product10Price: "एमआरपी: ₹1299",
    product11Title: "हस्तनिर्मित फूलदान",
    product11Desc: "उपचार | सुनहरा कढ़ाई",
    product11Price: "एमआरपी: ₹349",
    product12Title: "रोज़ गोल्ड प्लेट",
    product12Desc: "सरलता | सुंदर",
    product12Price: "एमआरपी: ₹549",
    addToCart: "कार्ट में जोड़ें"
  }
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (languageData[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = languageData[lang][key];
      } else {
        el.textContent = languageData[lang][key];
      }
    }
  });

  const newsletterInput = document.querySelector(".newsletter-email");
  if (newsletterInput && languageData[lang].newsletterPlaceholder) {
    newsletterInput.placeholder = languageData[lang].newsletterPlaceholder;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  
  const fadeElements = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => fadeObserver.observe(el));

  
  const scrollSections = document.querySelectorAll('.fade-scroll-section');
  const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-scroll-visible');
      } else {
        entry.target.classList.remove('fade-scroll-visible');
      }
    });
  }, { threshold: 0.3 });
  scrollSections.forEach(section => scrollObserver.observe(section));


  const videoBox = document.getElementById("videoBox");
  if (videoBox) {
    const video = document.createElement("video");
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.borderRadius = "12px";
    video.style.display = "block";

    const source = document.createElement("source");
    source.setAttribute("src", "./videos/kintsugi.mp4");
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);
    videoBox.innerHTML = "";
    videoBox.appendChild(video);
  }

 
  const languageSelect = document.querySelector("select");
  if (languageSelect) {
    languageSelect.addEventListener("change", (e) => {
      changeLanguage(e.target.value);
    });
  }
});


let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


function updateCartCount() {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElement = document.querySelector('#cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}


function addToCart(id, name, price) {
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }

  updateLocalStorage();
  updateCartCount();
  alert(`${name} added to cart!`);
}


function updateLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
  });
}


document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      addToCart(id, name, price);
    });
  });

  
  const fadeElements = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => fadeObserver.observe(el));

  
  const scrollSections = document.querySelectorAll('.fade-scroll-section');
  const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-scroll-visible');
      } else {
        entry.target.classList.remove('fade-scroll-visible');
      }
    });
  }, { threshold: 0.3 });
  scrollSections.forEach(section => scrollObserver.observe(section));

  
  const videoBox = document.getElementById("videoBox");
  if (videoBox) {
    const video = document.createElement("video");
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.borderRadius = "12px";
    video.style.display = "block";

    const source = document.createElement("source");
    source.setAttribute("src", "./videos/kintsugi.mp4");
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);
    videoBox.innerHTML = "";
    videoBox.appendChild(video);
  }

  
  const languageSelect = document.querySelector("select");
  if (languageSelect) {
    languageSelect.addEventListener("change", (e) => {
      changeLanguage(e.target.value);
    });
  }
});


if (window.location.pathname.includes("cart.html")) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';

    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      totalEl.textContent = '0';
      return;
    }

    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Subtotal: ₹${itemTotal}</p>
        <button onclick="removeFromCart('${item.id}')">Remove</button>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });

    totalEl.textContent = total.toFixed(2);
  }

  window.removeFromCart = function(id) {
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    location.reload(); 
  };

  document.addEventListener('DOMContentLoaded', renderCart);
}


  const form = document.getElementById('contactForm');
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      alert("Thank you for your message! We'll be in touch soon.");
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  });

  function placeOrder() {
    alert("Thank you for your order!");
    localStorage.removeItem("cart"); 
    window.location.href = "thankyou.html"; 
  }

  document.addEventListener("DOMContentLoaded", () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const placeOrderBtn = document.querySelector("button");

  if (cartItems.length === 0) {
    placeOrderBtn.disabled = true;
    placeOrderBtn.style.backgroundColor = "#ccc";
    placeOrderBtn.style.cursor = "not-allowed";
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalSpan = document.getElementById("cart-total");

  
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotalSpan.textContent = "0";
    return;
  }

  let total = 0;

  
  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
      <span>${item.name}</span>
      <span>₹${item.price}</span>
    `;

    cartItemsContainer.appendChild(itemDiv);

    total += parseFloat(item.price);
  });

  
  cartTotalSpan.textContent = total.toFixed(2);
});


