let status = false;
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('product');

    axios
        .get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`)
        .then(function (result) {
            hienthiUI(result.data.content);
        })
        .catch(function (error) {
        });
}

function hienthiUI(listProduct) {
    const boxDetail = document.getElementById("Detail");


    const content = ` 
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
                                  <img id="img-product" src="${listProduct.image}" alt="#" class="img-fluid p-3">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-lg-5">
                      <div class="detail__right">
                          <h2 id="name-product" class="mb-0">${listProduct.name}</h2>
                          <span id="price-product" class="price-item d-inline">${listProduct.price}</span><span class="fw-bold">$</span>
                          <div class="select-size">
                          <input type="radio" class="btn-check" name="choose-size" id="option0" autocomplete="off" value="36" />
                          <label class="btn btn-secondary me-2 my-2" for="option0">36</label>
                          <input type="radio" 
                          class="btn-check" name="choose-size" id="option1.0" autocomplete="off" checked value="37" />
                          <label class="btn btn-secondary me-2 my-2" for="option1.0">37</label>
                          <input type="radio" 
                          <input type="radio" class="btn-check" name="choose-size" id="option1" autocomplete="off" checked value="38"/>
                          <label class="btn btn-secondary me-2 my-2" for="option1">38</label>
                          <input type="radio" class="btn-check" name="choose-size" id="option2" autocomplete="off" value="39" />
                          <label class="btn btn-secondary me-2 my-2" for="option2">39</label>
                          <input type="radio" class="btn-check" name="choose-size" id="option3" autocomplete="off" value="40"/>
                          <label class="btn btn-secondary me-2 my-2" for="option3">40</label>
                          <input type="radio" class="btn-check" name="choose-size" id="option4" autocomplete="off" value="41"/>
                          <label class="btn btn-secondary me-2 my-2" for="option4">41</label>
                          <input type="radio" class="btn-check" name="choose-size" id="option5" autocomplete="off" value="42"/>
                          <label class="btn btn-secondary me-2 my-2" for="option5">42</label>
                        </div>
                          <div class="num-select my-3">
                              <div class="input-group mb-3">
                                  <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="minusOrder()">-</button>
                                  <input type="text" class="form-control text-center p-0" value="1" id="quantityOrder">
                                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="plusOrder()">+</button>
                              </div>
                          </div>
                          <button type="submit" class="mb-4 text-uppercase fw-bolder btn-add-card" id="add-to-cart" onclick="themItem()">
                              <span class="text-uppercase c fw-bolder">Thêm vào giỏ</span>
                          </button>
                      </div>
  
                  </div>
              </div>
              <div class="describe my-3"><span>MÔ TẢ : ${listProduct.description}</span></div>
           `;

      boxDetail.innerHTML = content;


    // let content = "";
    // listProduct.map(function(shoes) {
    //     const { image, name, price, size, description } = shoes;
    //     return ` 
    //             <div class="row"> 
    //               <div class="col-12 col-lg-7 mb-lg-0 mb-4">
    //                   <div class="detail__left">
    //                       <div class="row">
    //                           <div class="col-2">
    //                               <img src="./img/shoes1.png" alt="c" class="img-fluid p-3">
    //                               <img src="./img/shoes2.png" alt="c" class="img-fluid p-3">
    //                               <img src="./img/shoes3.png" alt="c" class="img-fluid p-3">
    //                               <img src="./img/shoes4.png" alt="c" class="img-fluid p-3">
    //                               <img src="./img/shoes5.png" alt="c" class="img-fluid p-3">
    //                           </div>
    //                           <div class="col-10">
    //                               <img src="${image}" alt="#" class="img-fluid p-3">
    //                           </div>
    //                       </div>
    //                   </div>
    //               </div>
    //               <div class="col-12 col-lg-5">
    //                   <div class="detail__right">
    //                       <h2 class="mb-0">${name}</h2>
    //                       <span class="price-item">$${price}</span>
    //                       <div class="select-size">
    //                           <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"
    //                               checked>
    //                           <label class="btn btn-secondary me-2" for="option1">${size}</label>
    //                           <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
    //                       </div>
    //                       <div class="num-select my-3">
    //                           <div class="input-group mb-3">
    //                               <button class="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
    //                               <input type="text" class="form-control text-center p-0" value="1">
    //                               <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
    //                           </div>
    //                       </div>
    //                       <button type="submit" class="mb-4 text-uppercase fw-bolder btn-add-card">
    //                           <span class="text-uppercase c fw-bolder">Thêm vào giỏ</span>
    //                       </button>
    //                   </div>
  
    //               </div>
    //           </div>
    //           <div class="describe my-3"><span>MÔ TẢ : ${description}"</span></div>
    //           <p></p>;
  
    //        `;
    // })
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


const cart = new ListItem();


// set localstorage
function setLocalStorage() {
    localStorage.setItem("DSSP", JSON.stringify(cart.mangSP));
}
getLocalStorage();
function getLocalStorage() {
    let arr = JSON.parse(localStorage.getItem("DSSP"));
    if (arr !== null) {
        cart.mangSP = arr;
    }
}
function themItem() {
    status = JSON.parse(sessionStorage.getItem("status"));
    if (status == true) {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('product');
        let id = myParam;
        let name = document.getElementById("name-product").innerText;
        let price = document.getElementById("price-product").innerText;
        let setSize = document.getElementsByName("choose-size");
        let size = "";
        for (let i = 0; i < setSize.length; i++) {
            if (setSize[i].checked) {
                size = setSize[i].value;
                break;
            }
        }
        let image = document.getElementById("img-product").src;
        let quantity = document.getElementById("quantityOrder").value;
        

        let newItem = new CartItem(id, name, price, size, image, Number(quantity));
        newItem.tinhTongTien();
   
        if (cart.checkDup(newItem.id) == false || cart.checkDup(newItem.id) == undefined) {
            cart.themSP(newItem);

            setLocalStorage();
            alert("bạn đã thêm sản phẩm thành công")
        } else {
            alert("sản phẩm của bạn đã có trong giỏ hàng");
            let index = cart.timIndex(newItem.id);
            // let quantityAdd=cart.mangSP[index].quantityOrder;
            // cart.mangSP[index].quantityOrdeNUmr+=newItem.quantity;
            cart.mangSP[index].quantityOrder += Number(newItem.quantityOrder);
           
            cart.mangSP[index].total = cart.mangSP[index].quantityOrder * cart.mangSP[index].price;
            setLocalStorage();
        }
    } else {
        alert("vui lòng đăng nhập để thêm giỏ hàng");
    }






    // let size=setSize.filter(function(val){
    //     return val.checked==true;
    // })
    // console.log(size.value);
}

document.getElementById("btn-signin").addEventListener("click", function () {
    let email = document.getElementById("email-signin").value;
    let mk = document.getElementById("password-signin").value;
    const user = {
        "email": email,
        "password": mk
    }

    axios({
        method: "post",
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        data: user
    }).then(function (resolve) {
        alert("Bạn đã đăng nhập thành công");

        status = true;
        sessionStorage.setItem("status", JSON.stringify(status));
        resetForm();
    }).catch(function (err) {
        
        status = false;
        sessionStorage.setItem("status", JSON.stringify(status));
        document.getElementById("txtSignin").innerHTML = err.response.data.message
    });
})

function resetForm() {
    document.getElementById("form-signin").reset();
}