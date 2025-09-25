document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const productCards = document.querySelectorAll(".product-card");
  const detailContainer = document.getElementById("product-detail");

  // =========================
  // 🔍 Tìm kiếm sản phẩm (chỉ chạy ở trang watch.html)
  // =========================
  if (searchInput && productCards.length > 0) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase().trim();

      productCards.forEach(card => {
        const titleEl = card.querySelector(".product-name");
        const title = titleEl ? titleEl.textContent.toLowerCase() : "";
        card.style.display = title.includes(query) ? "block" : "none";
      });
    });

    // 👉 Xử lý click card + Buy Now → prowatch.html?id=...
    productCards.forEach(card => {
      const id = card.getAttribute("data-id");

      // click toàn bộ card
      card.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn")) return; // tránh trùng Buy Now
        window.location.href = `prowatch.html?id=${id}`;
      });

      // click nút Buy Now
      const buyBtn = card.querySelector(".btn");
      if (buyBtn) {
        buyBtn.addEventListener("click", (e) => {
          e.preventDefault();
          window.location.href = `prowatch.html?id=${id}`;
        });
      }
    });
  }

  // =========================
  // 🛒 Hiển thị chi tiết sản phẩm (chỉ chạy ở trang prowatch.html)
  // =========================
  if (detailContainer) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    // 👉 Danh sách sản phẩm
    const products = [
      { id: 1, name: "Tissot Classic 1", price: "$450", image: "../images/ts1.webp" },
      { id: 2, name: "Tissot Classic 2", price: "$480", image: "../images/ts2.webp" },
      { id: 3, name: "Tissot PRX 1", price: "$520", image: "../images/ts3.webp" },
      { id: 4, name: "Tissot PRX 2", price: "$550", image: "../images/ts4.webp" },
      { id: 5, name: "Tissot Seastar 1", price: "$600", image: "../images/ts5.webp" },
      { id: 6, name: "Tissot Seastar 2", price: "$650", image: "../images/ts6.webp" },
      { id: 7, name: "Tissot Heritage 1", price: "$700", image: "../images/ts7.webp" },
      { id: 8, name: "Tissot Heritage 2", price: "$720", image: "../images/ts8.webp" },
      { id: 9, name: "Tissot Chrono 1", price: "$780", image: "../images/ts9.webp" },
      { id: 10, name: "Tissot Chrono 2", price: "$800", image: "../images/ts10.webp" },
      { id: 11, name: "Tissot Gold 1", price: "$950", image: "../images/ts11.jpg" },
      { id: 12, name: "Tissot Gold 2", price: "$1000", image: "../images/ts12.jpg" },
      { id: 13, name: "Tissot Pocket 1", price: "$1100", image: "../images/ts13.jpg" },
      { id: 14, name: "Tissot Pocket 2", price: "$1150", image: "../images/ts14.jpg" },
      { id: 15, name: "Tissot Sport 1", price: "$500", image: "../images/ts15.jpg" },
      { id: 16, name: "Tissot Sport 2", price: "$530", image: "../images/ts16.jpg" },
      { id: 17, name: "Tissot Limited 1", price: "$1500", image: "../images/ts17.jpg" },
      { id: 18, name: "Tissot Limited 2", price: "$1600", image: "../images/ts18.jpg" },
      { id: 19, name: "Tissot Exclusive 1", price: "$2000", image: "../images/ts19.jpg" },
      { id: 20, name: "Tissot Exclusive 2", price: "$2200", image: "../images/ts20.jpg" }
    ];

    const product = products.find(p => p.id === id);

    if (product) {
      detailContainer.innerHTML = `
        <div class="detail-card">
          <img src="${product.image}" alt="${product.name}">
          <div class="info">
            <h2>${product.name}</h2>
            <p class="price">${product.price}</p>
            <p class="desc">This is a high-quality ${product.name} watch.</p>
            <button id="addToCartBtn" class="btn">Add to Cart</button>
            <a href="watch.html" class="btn back-btn">⬅ Back</a>
          </div>
        </div>
      `;

      // === Xử lý nút Add to Cart ===
      const addToCartBtn = document.getElementById("addToCartBtn");
      addToCartBtn.addEventListener("click", () => {
        // Lưu sản phẩm chọn vào localStorage (chỉ 1 sản phẩm)
        localStorage.setItem("selectedProduct", JSON.stringify(product));

        // chuyển sang checkout page
        window.location.href = "checkout.html";
      });
    } else {
      detailContainer.innerHTML = `<p>❌ Product not found.</p>`;
    }
  }
});