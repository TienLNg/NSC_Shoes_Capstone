function ListItem(){
    this.mangSP=[];
    //pt
this.themSP=function(item){
this.mangSP.push(item);
}
this.timIndex = function (ma) {
    return this.mangSP.findIndex(function (sp) {
        return sp.id === ma;
    })
};
this.xoaSP = function (ma) {
    let indexFind = this.timIndex(ma);
    if (indexFind > -1) {
        this.mangSP.splice(indexFind, 1);
    }
};
this.checkDup=function(ma){
 return this.mangSP.some(function(val){
        return val.id===ma;
    })    
}
}
