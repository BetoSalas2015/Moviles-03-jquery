function insertAfterHTML() {
     $("<div style='color: green;' >Este texto está insertado por el método insertAfter() </div> ").insertAfter($(divInsertAfter));
     $("#divInsertAfter").after("<div style='color: grey;'> Este texto fue insertado por el método after() </div>");
}
