function setGetText() {
     alert("Antes de Cambiar el texto es: " + $("#divContent").text());
     $("#divContent").text("El texto ha cambiado");
     alert("Después de Cambiar el contenidos es: " + $("#divContent").text());
}
