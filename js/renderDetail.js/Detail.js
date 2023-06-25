function getProd() {
  axios
    .get("https://shop.cyberlearn.vn/api/Product/getbyid?id=1")
    .then(function (result) {
      // console.log(result)
      console.log(result.data.content);
      hienthiUI(result.data.content);
    })
    .catch(function (error) {
      // thất bại (reject)
      console.log(error);
    });
}

function hienthiUI(listProduct) {
  const boxDetail = document.getElementById("Detail");
  const content = listProduct.map((shoes) => {
    const { image, name, price, size, description } = shoes;
    return ` <div class="container">
              <div class="row"> 
                <div class="col-12 col-lg-7 mb-lg-0 mb-4">
                    <div class="detail__left">
                        <div class="row">
                            <div class="col-2">
                                <img src="./img/shoes1.png" alt="c" class="img-fluid p-3">
                                <img src="./img/shoes2.png" alt="c" class="img-fluid p-3">
                                <img src="./img/shoes3.png" alt="c" class="img-fluid p-3">
                                <img src="./img/shoes4.png" alt="c" class="img-fluid p-3">
                                <img src="./img/shoes5.png" alt="c" class="img-fluid p-3">
                            </div>
                            <div class="col-10">
                                <img src="${image}" alt="#" class="img-fluid p-3">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-5">
                    <div class="detail__right">
                        <h2 class="mb-0">${name}</h2>
                        <span class="price-item">$${price}</span>
                        <div class="select-size">
                            <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"
                                checked>
                            <label class="btn btn-secondary me-2" for="option1">${size}</label>
                            <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
                        </div>
                        <div class="num-select my-3">
                            <div class="input-group mb-3">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
                                <input type="text" class="form-control text-center p-0" value="1">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                            </div>
                        </div>
                        <button type="submit" class="mb-4 text-uppercase fw-bolder btn-add-card">
                            <span class="text-uppercase c fw-bolder">Thêm vào giỏ</span>
                        </button>
                    </div>

                </div>
            </div>
            <div class="describe my-3"><span>MÔ TẢ : ${description}"</span></div>
            <p></p>

        </div> `;
  });
  boxDetail.innerHTML = content.join("");
}
