/*var caja = document.getElementById('caja');
console.log(caja);
caja.addEventListener('click', cambiacolor);
function cambiacolor() {
     caja.style.background = "red";
}*/

$("#caja").click(function () {
     $("#caja").css({"background": "red", "width":"400px", "height":"300px"});
});
