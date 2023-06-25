let checkValid = new Validation();



function register() {

  let hoTen = document.getElementById("hoTen").value;
  let sdt = document.getElementById("sdt").value;
  let email = document.getElementById("email").value;
  let mk = document.getElementById("password").value;
  let mkConfirm = document.getElementById("passwordConfirm").value;
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let gender = true;
  if (male) {
    gender = true;
  } else {
    gender = false;
  };

  let check = true;
  // check hoten
  check &= checkValid.checkEmpty(hoTen, "txtHoTen", "Họ tên không được để trống") && checkValid.checkHoten(hoTen, "txtHoTen", "Họ tên phải là các kí tự chữ");
  // check sdt 
  check &= checkValid.checkEmpty(sdt, "txtSDT", "Số điện thoại không được để trống") && checkValid.checkSdt(sdt, "txtSDT", "Số điện thoại phải là kí tự số độ dài 9-10 kí tự");
  // check email 
  check &= checkValid.checkEmpty(email, "txtEmail", "Email không được để trống") && checkValid.checkEmail(email, "txtEmail", "Email không hợp lệ");
  //check gender
  check &= checkValid.checkGender(male, female, "txtGender", "Giới tính không được để trống");
  //check mat khau
  check &= checkValid.checkEmpty(mk, "txtMk", "Mật khẩu không được để trống") && checkValid.checkMk(mk, "txtMk", "Mật khẩu phải chứa ít nhất 1 kí tự số,1 kí tự hoa và 1 kí tự đặc biệt, độ dài tối thiểu 6 kí tự");
  // check lap lai mat khau
  check &= checkValid.checkEmpty(mkConfirm, "txtMkConfirm", "Mật khẩu lặp lại không được để trống") && checkValid.checkMkConfirm(mkConfirm, mk, "txtMkConfirm", "Mật khẩu lặp lại không chính xác");
  if (check) {
    let user = new User(email, mk, hoTen, gender, sdt);
    axios({
      method: "post",
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      data: user
    }).then(function (resolve) {
      alert("Bạn đã đăng ký tài khoản thành công");
      resetForm();
    }).catch(function (err) {
      document.getElementById("txtEmail").style.display = "block";
      document.getElementById("txtEmail").innerHTML = err.response.data.message;
    });
    
  }


}
function resetForm() {
  document.getElementById("form-register").reset();
}
