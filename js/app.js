const API_URL = "https://backend-api-1-t9qm.onrender.com/products";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("product-list");
    list.innerHTML = "";

    if (!data || data.length === 0) {
      list.innerHTML = "<p class='text-center'>Không có sản phẩm</p>";
      return;
    }

    data.forEach((p, i) => {
      list.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="product-card">
            <img 
              src="https://picsum.photos/400/300?random=${i}" 
              class="product-img"
              alt="${p.name}"
            >
            <div class="product-body">
              <div class="product-name">${p.name}</div>
              <div class="product-price">
                ${Number(p.price).toLocaleString()} ₫
              </div>
              <button class="btn-buy">Mua ngay</button>
            </div>
          </div>
        </div>
      `;
    });
  })
  .catch(() => {
    document.getElementById("product-list").innerHTML =
      "<p class='text-danger text-center'>Không kết nối được backend</p>";
  });
