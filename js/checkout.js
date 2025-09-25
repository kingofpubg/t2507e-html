document.addEventListener("DOMContentLoaded", () => {
  const productDetails = document.getElementById("product-details");
  const paymentForm = document.getElementById("paymentForm");

  // Lấy sản phẩm từ localStorage
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  if (selectedProduct && productDetails) {
    productDetails.innerHTML = `
      <div class="product-box">
        <h3>${selectedProduct.name}</h3>
        <img src="${selectedProduct.image}" alt="${selectedProduct.name}">
        <p>Giá: <strong>${selectedProduct.price}</strong></p>
      </div>
    `;
  } else if (productDetails) {
    productDetails.innerHTML = `<p style="color:red; text-align:center;">❌ Không tìm thấy sản phẩm.</p>`;
  }

  // Xử lý submit form thanh toán
  if (paymentForm) {
    paymentForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const address = document.getElementById("address").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const method = document.getElementById("paymentMethod").value;

      if (!fullname || !address || !phone) {
        alert("⚠ Vui lòng điền đầy đủ thông tin!");
        return;
      }

      if (!selectedProduct) {
        alert("❌ Không có sản phẩm để thanh toán!");
        return;
      }

      alert(`✅ Thanh toán thành công!
      
Cảm ơn ${fullname} đã mua hàng.
Sản phẩm: ${selectedProduct.name}
Tổng tiền: ${selectedProduct.price}
Phương thức: ${method}`);

      // Xóa sản phẩm khỏi localStorage sau khi thanh toán
      localStorage.removeItem("selectedProduct");

      // Quay về trang danh sách
      window.location.href = "watch.html";
    });
  }
});