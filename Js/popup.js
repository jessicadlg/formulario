// funcion para que abra la ventana de popup en cada imagen
$(document).ready(function(){
   
   $("#abrir").click(function(){
        $(".popup").show();
    });
    $("#cerrar").click(function(){
        $(".popup").hide();
    }); 
    
    $("#abrir2").click(function(){
        $(".popup2").show();
    });
    $("#cerrar2").click(function(){
        $(".popup2").hide();
    }); 
    
    $("#abrir3").click(function(){
        $(".popup3").show();
    });
    $("#cerrar3").click(function(){
        $(".popup3").hide();
    }); 
});