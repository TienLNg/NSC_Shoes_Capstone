const cart = new ListItem();
getLocalStorage()
function setLocalStorage() {
    localStorage.setItem("DSSP", JSON.stringify(cart.mangSP));
}
function getLocalStorage() {
    let arr = JSON.parse(localStorage.getItem("DSSP"));
    if (arr !== null) {
      
        cart.mangSP = arr;
        let slsp = cart.mangSP.length;
        document.getElementById("slsp").innerHTML=slsp;
        renderCart(cart.mangSP);
       
    }
}

function plusOrder(id) {
    let quantityOrder = document.getElementById("quantityOrder"+id).value;
    document.getElementById("quantityOrder"+id).value = Number(quantityOrder) + 1;
    renderTotal(id);
   

}
function minusOrder(id) {
    let quantityOrder = document.getElementById("quantityOrder"+id).value;
    if (Number(quantityOrder) > 1) {
        document.getElementById("quantityOrder"+id).value = Number(quantityOrder) - 1;

    }
    renderTotal(id);
}


function renderCart(mangSP) {
    let content = "";
    let total=0
    mangSP.map(function(sp) {
        let str = `<div class="row align-items-center">
        <div class="col-3 col-md-2 ">
            <img src="${sp.image}" alt="redshoe" class="img-fluid p-3">
        </div>
        <div class="col-9 col-md-4">
            <p>
            ${sp.name}</p>
            <span class="item--size">${sp.size}</span>
        </div>
        <div class="col-md-2 col-6">
            <div class="num-select my-3">
                <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon"
                        onclick="minusOrder(${sp.id})">-</button>
                    <input id="quantityOrder${sp.id}" type="text" class="form-control text-center p-0"
                        value="${sp.quantityOrder}">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                        onclick="plusOrder(${sp.id})">+</button>
                </div>
            </div>
        </div>
        <div class="col-md-2 col-6 text-center">
            <span class="m-0" id="price${sp.id}">${sp.price}</span><span>$</span>
        </div>
        <div class="col-md-2 col-12 text-center">
            <p>Thành tiền</p>
            <p class="num--total" id="total${sp.id}">${sp.total}$</p>
            <button class="btn" onclick="xoaSP('${sp.id}')"><i class="fa fa-trash-alt"></i></button>
        </div>
    </div>`;
    total+=sp.total;
    content += str;
    });
    document.getElementById("total-pay").innerHTML=total;
    document.getElementById("cart--table").innerHTML = content;
}

//xoa sp
function xoaSP(id) {
    cart.xoaSP(id);
    setLocalStorage();
    let slsp = cart.mangSP.length;
    document.getElementById("slsp").innerHTML=slsp;
    renderCart(cart.mangSP);

}

function renderTotal(id){
            let quantity=document.getElementById("quantityOrder"+id).value;
            let price=document.getElementById("price"+id).innerText;
            let total=quantity*price;
            document.getElementById("total"+id).innerHTML=total+"$";
            let totalPay=Number(document.getElementById("total-pay").innerText);
            renderTotalPay()
           
}
function renderTotalPay(){
    let total=0;
cart.mangSP.map(function(sp){
    let quantity=document.getElementById("quantityOrder"+sp.id).value;
    let price=document.getElementById("price"+sp.id).innerText;
    let totalItem=quantity*price;
    total+=totalItem;
});
document.getElementById("total-pay").innerHTML=total;
}


function renderProductRelate(data) {
    let content = "";
    content = `<div class="container">
    <div class="row mt-1 mt-md-5">
        <div class="col-6 col-lg-3 px-2 my-3">
            <div class="card">
                <img src="${data[15].image}" class="card-img-top img-fluid p-3" alt="product1">
                <div class="card-body">
                    <h5 class="card-title">${data[15].name}</h5>
                    <p class="card-text">${data[15].price}$</p>
                </div>
            </div>
        </div>
        <div class="col-6 col-lg-3 px-2 my-3">
            <div class="card">
                <img src="${data[16].image}" class="card-img-top p-3" alt="product1">
                <div class="card-body">
                    <h5 class="card-title">${data[16].name}</h5>
                    <p class="card-text">${data[16].price}$</p>
                </div>
            </div>
        </div>
        <div class="col-6 col-lg-3 px-2 my-3">
            <div class="card">
                <img src="${data[17].image}" class="card-img-top p-3" alt="product1">
                <div class="card-body">
                    <h5 class="card-title">${data[17].name}</h5>
                    <p class="card-text">${data[17].price}$</p>
                </div>
            </div>
        </div>
        <div class="col-6 col-lg-3 px-2 my-3">
            <div class="card">
                <img src="${data[18].image}" class="card-img-top p-3" alt="product1">
                <div class="card-body">
                    <h5 class="card-title">${data[18].name}</h5>
                    <p class="card-text">${data[18].price}$</p>
                </div>
            </div>
        </div>

    </div>
</div>`;
    document.getElementById("product-relative_list").innerHTML = content;
}



axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Product",
})
    .then(function (response) {
       
        renderProductRelate(response.data.content);
    }).catch(function (err) {
      
    });

