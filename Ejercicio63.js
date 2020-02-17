function animateDiv() {
     $("#divMsg").animate({width:'350px',height:'350px', opacity:'0.5', fontSize:'3em', left:'450px'},'slow', function () {
          alert("El método animate ha concluido");
     });
}
