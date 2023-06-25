function getProduct() {
  axios
    .get("https://shop.cyberlearn.vn/api/Product")

    .then(function (result) {
      // console.log(result.data.content);
      hienthiUI(result.data.content);
    })
    .catch(function (error) {
      // thất bại (reject)
      console.log(error);
    });
}

function hienthiUI(listProduct) {
  const boxProduct = document.getElementById("Products");
  const content = listProduct.map((shoes) => {
    const { image, name, price, description } = shoes;
    return ` 
    <div class="container">
      <h1>Products</h1>

      <div class="box">
        <div class="row">
          <div class="col-3">
            <div class="card">
              <div class="small_card">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-share"></i>
              </div>

              <div class="image">
                <a href="http://127.0.0.1:5501/detail.html" target="_blank"
                  ><img src="${image}"
                /></a>
              </div>

              <div class="products_text">
                <h2>${name}</h2>
                <p>${description}</p>
                <h3>$${price}</h3>

                <div class="products_star">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <a href="#" class="btn">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    `;
  });

  boxProduct.innerHTML = content.join("");
}
