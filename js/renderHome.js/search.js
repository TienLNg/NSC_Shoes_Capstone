let searchKeyword = "";

document.getElementById("basic-addon2");
addEventListener("click", () => {
  const txt = document.getElementById("txt-search").value;

  searchKeyword = txt;
  renderUI();
});

renderUI;