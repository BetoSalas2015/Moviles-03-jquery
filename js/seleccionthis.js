$(".cajas").click(function () {
     $(this).css({
          "background": "green"
     });
});

$("#boton").click(function () {
     $("[type='text']").css({"background":"red"});
});

var usuario = "";
var password = "";
$("#boton").click(function () {
     usuario = $("[type='text']").val();
     password = $("[type='password']").val();
     console.log(usuario + " " + password);
});
