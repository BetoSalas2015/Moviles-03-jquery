$(document).ready(function () {
     $("#btnShow").click(function () {
          $("p").show("slow",function () {
               alert("Llamado despues de que el elemento se mostó");
          });
     });
});
