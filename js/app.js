const API_URL = "https://backend-api-1-t9qm.onrender.com/products";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("product-list");
    list.innerHTML = "";

    data.forEach(p => {
      list.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="product-card">
            <div class="product-name">${p.name}</div>
            <div class="product-price">${Number(p.price).toLocaleString()} ₫</div>
            <button class="btn btn-buy">Mua ngay</button>
          </div>
        </div>
      `;
    });
  })
  .catch(() => {
    document.getElementById("product-list").innerHTML =
      "<p class='text-center text-danger'>Không tải được dữ liệu</p>";
  });
