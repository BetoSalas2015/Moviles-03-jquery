$(document).ready(function () {
     $("#btntoggle").click(function () {
          $("p").toggle("slow",function () {
               alert("Llamado despues de que el elemento ha cambiado");
          });
     });
});
