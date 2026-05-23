document.addEventListener("DOMContentLoaded", function () {

  const cartContainer = document.getElementById("cart-items");
  const cartTotalDisplay = document.getElementById("cart-subtotal");
  const checkoutButton = document.getElementById("checkout-btn");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];


  function updateCartCount() {

    const count = cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    document.querySelectorAll(".cart-count").forEach(el => {
      el.textContent = count;
    });

  }



  function updateCartTotal() {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    cartTotalDisplay.textContent = total.toFixed(2);
  }



  function renderCart() {
    cartContainer.innerHTML = "";



    if (cart.length === 0) {

      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotalDisplay.textContent = "0";
      updateCartCount();

      return;
    }



    cart.forEach((item, index) => {

      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-img" />
        <div class="cart-details">

          <h2>${item.name}</h2>

          <p>
            ₹${item.price} × ${item.quantity} = 
            ₹${item.price * item.quantity}
          </p>

          <div class="qty-controls">
            <button class="qty-btn minus">−</button>
            <span class="qty">${item.quantity}</span>
            <button class="qty-btn plus">+</button>
          </div>
        </div>

        <button class="remove-btn">
          Remove
        </button>
      `;



      itemDiv.querySelector(".minus").addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity--;

        } else {

          cart.splice(index, 1);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });



      itemDiv.querySelector(".plus").addEventListener("click", () => {
        item.quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });



      itemDiv.querySelector(".remove-btn").addEventListener("click", () => {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });




      cartContainer.appendChild(itemDiv);

    });


    updateCartTotal();
    updateCartCount();

  }



  renderCart();




  checkoutButton.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Your cart is empty!");

      return;
    }



    let totalAmount = 0;

    cart.forEach(item => {
      totalAmount += item.price * item.quantity;
    });



    var options = {
      key: "rzp_test_SsPXaTSqREdLMA",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Rejuvenate",
      description: "Purchase from Rejuvenate",



      handler: function (response) {

        alert("Payment Successful!");
        localStorage.removeItem("cart");
        window.location.reload();
      },



      theme: {
        color: "#d4af37"
      }

    };
    var rzp1 = new Razorpay(options);
    rzp1.open();

  });

});
