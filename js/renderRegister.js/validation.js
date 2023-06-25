function Validation() {
    this.checkEmpty = function (value, spanID, mess) {
        if (value === "") {
            domID(spanID).style.display = "block";
            domID(spanID).innerHTML = mess;
            return false;
        }
        domID(spanID).style.display = "none";
        return true;
    };
    this.checkHoten = function (value, spanID, mess) {
        let pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (value.match(pattern)) {
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).style.display = "block";
        domID(spanID).innerHTML = mess;
        return false;
    },
        this.checkEmail = function (value, spanID, mess) {
            let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (value.match(pattern)) {
                domID(spanID).style.display = "none";
                return true;
            }
            domID(spanID).style.display = "block";
            domID(spanID).innerHTML = mess;
            return false;
        };
    this.checkMk = function (value, spanID, mess) {
        let pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{6,}$/;
        if (value.match(pattern)) {
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).style.display = "block";
        domID(spanID).innerHTML = mess;
        return false;
    };
    this.checkMkConfirm= function(value,mk,spanID,mess){
        if(value!==mk){
            domID(spanID).style.display = "block";
            domID(spanID).innerHTML = mess;
            return false;
        }
        domID(spanID).style.display = "none";
        return true;
    };
    this.checkSdt = function (value, spanID, mess) {
        let pattern = /^[0-9]{9,10}$/;
        if (value.match(pattern)) {
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).style.display = "block";
        domID(spanID).innerHTML = mess;
        return false;
    };
    this.checkGender=function(value1,value2,spanID,mess){
        if(value1==false&&value2==false){
        domID(spanID).style.display = "block";
        domID(spanID).innerHTML = mess;
        return false;
        }
        domID(spanID).style.display = "none";
        return true;
    }
}



function domID(id) {
    return document.getElementById(id);
}