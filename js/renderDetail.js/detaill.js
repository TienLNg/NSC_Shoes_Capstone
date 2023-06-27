window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('product');
    console.log('params',myParam);

    axios
    .get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`)
    .then(function (result) {
      console.log(result.data.content);
      hienthiUI(result.data.content);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function hienthiUI(listProduct) {
    const boxDetail = document.getElementById("Detail");
  
   
      const content =` 
                <div class="row"> 
                  <div class="col-12 col-lg-7 mb-lg-0 mb-4">
                      <div class="detail__left">
                          <div class="row">
                              <div class="col-2">
                                  <img src="${listProduct.image}" alt="c" class="img-fluid p-3">
                                  <img src="${listProduct.image}" alt="c" class="img-fluid p-3">
                                  <img src="${listProduct.image}" alt="c" class="img-fluid p-3">
                                  <img src="${listProduct.image}" alt="c" class="img-fluid p-3">
                                  <img src="${listProduct.image}" alt="c" class="img-fluid p-3">
                              </div>
                              <div class="col-10">
                                  <img src="${listProduct.image}" alt="#" class="img-fluid p-3">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-lg-5">
                      <div class="detail__right">
                          <h2 class="mb-0">${listProduct.name}</h2>
                          <span class="price-item">$${listProduct.price}</span>
                          <div class="select-size">
                          <input type="radio" class="btn-check" name="options" id="option0" autocomplete="off" />
                          <label class="btn btn-secondary me-2 my-2" for="option0">36</label>
                          <input type="radio" 
                          class="btn-check" name="options" id="option1.0" autocomplete="off" checked />
                          <label class="btn btn-secondary me-2 my-2" for="option1.0">37</label>
                          <input type="radio" 
                          <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked />
                          <label class="btn btn-secondary me-2 my-2" for="option1">38</label>
                          <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
                          <label class="btn btn-secondary me-2 my-2" for="option2">39</label>
                          <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" />
                          <label class="btn btn-secondary me-2 my-2" for="option3">40</label>
                          <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" />
                          <label class="btn btn-secondary me-2 my-2" for="option4">41</label>
                          <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off" />
                          <label class="btn btn-secondary me-2 my-2" for="option5">42</label>
                        </div>
                          <div class="num-select my-3">
                              <div class="input-group mb-3">
                                  <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="minusOrder()">-</button>
                                  <input type="text" class="form-control text-center p-0" value="1" id="quantityOrder">
                                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="plusOrder()">+</button>
                              </div>
                          </div>
                          <button type="submit" class="mb-4 text-uppercase fw-bolder btn-add-card">
                              <span class="text-uppercase c fw-bolder">Thêm vào giỏ</span>
                          </button>
                      </div>
  
                  </div>
              </div>
              <div class="describe my-3"><span>MÔ TẢ : ${listProduct.description}</span></div>
           `;

      boxDetail.innerHTML = content;

  }

  function plusOrder() {
    let quantityOrder = Number(document.getElementById("quantityOrder").value);
    document.getElementById("quantityOrder").value = quantityOrder + 1
}
function minusOrder() {
    let quantityOrder = document.getElementById("quantityOrder").value;
    if (Number(quantityOrder) > 1) {
        document.getElementById("quantityOrder").value = Number(quantityOrder) - 1;
    }
}


