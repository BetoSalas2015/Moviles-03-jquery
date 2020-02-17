function insertBeforeHTML() {
     $("<div style='color: green;' >Este texto está insertado por el método insertBefore() </div> ").insertBefore($(divInsertBefore));
     $("#divInsertBefore").before("<div style='color: grey;'> Este texto fue insertado por el método before() </div>");
}
