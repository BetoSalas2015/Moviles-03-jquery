function makeArray() {
     var obj =  $("li");
     var nuevoArreglo = $.makeArray(obj);
     nuevoArreglo.reverse();
     $("ul").html(nuevoArreglo);
}
