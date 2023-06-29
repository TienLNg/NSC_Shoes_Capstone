axios
  .get("https://shop.cyberlearn.vn/api/Product/getAllCategory")

  .then(function (result) {
    console.log(result.data.content);
    renderUI(result.data.content);
    renderlistCategory(result.data.content);
    activeCategory(result.data.content);
  })
  .catch(function (error) {
    // thất bại (reject)
    console.log(error);
  });

//   window.setCategory = setCategory;

  let activeCategory = "all";

function  renderUI (content) {
    const listFoodbyCategory = getListFoodbyCategory(activeCategory);
  
    const listCategory = getListCategory(content);
    renderlistCategory(listCategory);
  
  };


const setCategory = (category) => {
    activeCategory = category;
  
    // console.log("[typeCategory]", activeCategory);
    renderUI();
  };


function getListFoodbyCategory (category, listProduct) {
    if (category === "all") return listProduct;
  
    //lọc lấy ra những item thoả mãn điều kiện return về true
    const newListProduct = listProduct.filter((shoes) => {
      //bắt buộc có return
      return shoes.category === category; //điều kiện
    });
    return newListProduct;
  }; 
    


function getListCategory(listProduct) {
    const listCategory = [];
  
    for (const shoes of listProduct) {
     
      const isExist = listCategory.includes(shoes.category);
      
      if (isExist === false) {
        listCategory.push(shoes.category);
      }
    }
    return listCategory;
  };

function renderlistCategory(listCategory) {
  const isActive = (category) => {
    return category.toLowerCase() === activeCategory.toLowerCase();
  };
  const contentCategory = ["all", ...listCategory].map((category) => {
    return ` <a onclick="setCategory('${category}')"
    style="text-transform: capitalize;" class="dropdown-item ${
      isActive(category) ? "active" : ""
    }" id="category-${category}-tab" type="button" >${category}</a>`;
  });

  document.getElementById("category").innerHTML = contentCategory.join('');
}
