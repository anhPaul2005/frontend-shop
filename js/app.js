const API_URL = "https://backend-api-1-t9qm.onrender.com/products";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("product-list");

    if (!data || data.length === 0) {
      list.innerHTML = "<p class='text-center'>Không có sản phẩm</p>";
      return;
    }

    list.innerHTML = "";

    data.forEach(p => {
      list.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="product-card">
            <div class="product-name">${p.name}</div>
            <div class="product-price">
              ${Number(p.price).toLocaleString()} ₫
            </div>
            <button class="btn btn-buy w-100">Mua ngay</button>
          </div>
        </div>
      `;
    });
  })
  .catch(err => {
    document.getElementById("product-list").innerHTML =
      "<p class='text-danger text-center'>Lỗi tải dữ liệu</p>";
    console.error(err);
  });
