const API_URL = "https://backend-api-1-t9qm.onrender.com/products";

fetch(API_URL)
  .then(res => {
    if (!res.ok) {
      throw new Error("HTTP error " + res.status);
    }
    return res.json();
  })
  .then(data => {
    console.log("DATA FROM API:", data);

    const container = document.getElementById("products");
    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = `<p class="text-center text-muted">Chưa có sản phẩm</p>`;
      return;
    }

    data.forEach(p => {
      container.innerHTML += `
        <div class="col-md-4 col-lg-3 mb-4">
          <div class="product-card">
            <div class="product-name">${p.name}</div>
            <div class="product-price">${Number(p.price).toLocaleString()} ₫</div>
            <button class="btn btn-buy mt-3">Mua ngay</button>
          </div>
        </div>
      `;
    });
  })
  .catch(err => {
    console.error("FETCH ERROR:", err);
    document.getElementById("products").innerHTML =
      `<p class="text-danger text-center">Không tải được dữ liệu</p>`;
  });
