
// Funcion para el menu responsive aplicado en medidas de mobil y tablets
$(document).ready(main);

var contador = 0;

function main(){
    $('.menu_bar').click(function(){
        if(contador==1){
            $('nav').animate({
               left:'0'
            });
            contador = 0;
        } else{
            $('nav').animate({
                left:'100%'
            });  
            contador = 1;          
        }
    }
 )};