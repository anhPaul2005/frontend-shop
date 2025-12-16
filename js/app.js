
fetch("https://backend-api-1-t9qm.onrender.com/products")
.then(res => res.json())
.then(data => {
  let html = "";
  data.forEach(p => {
    html += `
    <div class="col-md-4">
      <div class="card mb-3">
        <div class="card-body">
          <h5>${p.name}</h5>
          <p>${p.price} $</p>
        </div>
      </div>`;
  });
  document.getElementById("products").innerHTML = html;
});
