
function CartItem(id,name,price,size,image,quantity){
    this.id=id;
    this.name=name;
    this.price=price;
    this.size=size;
    this.image=image;
    this.quantityOrder=quantity;
    this.total=0;
// pt
this.tinhTongTien=function(){
   return this.total=this.price*this.quantityOrder;
}
}



