var arr = [];
function func(_this) {
    _this.style.backgroundColor = "red";
    arr.push(_this);
    console.log(arr);
    if(arr.length > 2) {
        var removed = arr.shift();
        console.log(removed);
        removed.style.backgroundColor = "blue";
    }  
}