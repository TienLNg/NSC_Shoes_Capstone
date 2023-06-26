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
  const boxProduct = document.getElementById("box-content");
  const content = listProduct.map((shoes) => {
    const { id, image, name, price, shortDescription, myParam } = shoes;

    return `
            <div class="col-3">
              <div class="card">
                <div class="small_card">
                  <i class="fa-solid fa-heart"></i>
                  <i class="fa-solid fa-share"></i>
                </div>
    
                <div class="image">
                  <a href="./detail.html?product=${id}"  ><img src="${image}"
                  /></a>
                </div>
    
                <div class="products_text">
                  <a href="./detail.html?product=${id}" >
                  <h2>${name}</h2>
                  </a>
                  
                  <p>${shortDescription}</p>
                  <h3>$${price}</h3>
    
                  <div class="products_star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <a href="./detail.html?product=${id}" class="btn" onclick="hienthiUI(${myParam})">Add To Cart</a>
                </div>
              </div>
            </div>`;
  });

  boxProduct.innerHTML = content.join("");
}
