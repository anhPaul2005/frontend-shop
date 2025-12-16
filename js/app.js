fetch("https://backend-api.onrender.com/products")
  .then(res => res.json())
  .then(data => {
    let html = "";
    data.forEach(p => {
      html += `
        <div class="col-md-4 col-lg-3 mb-4">
          <div class="product-card">
            <div class="product-name">${p.name}</div>
            <div class="product-price">${p.price.toLocaleString()} ₫</div>
            <button class="btn btn-buy mt-3">Mua ngay</button>
          </div>
        </div>
      `;
    });
    document.getElementById("products").innerHTML = html;
  })
  .catch(err => console.error(err));
