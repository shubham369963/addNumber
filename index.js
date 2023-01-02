var v1 = document.getElementById("boxone");
var v2 = document.getElementById("boxtwo");
var v3 = document.getElementById("ans");
var v4;
function  fun() {
    v4 = Number(v1.value)+Number(v2.value);
    v3.innerText = v4;
}

