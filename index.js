
$(".l1").on({
mouseover : function()
{
    $(this).css("top","-6px");    
$(this).css("color","red");
$(this).addClass("top-links");
    
},
mouseleave :  function()
{  
    if ($(document).scrollTop() >850)
     {
        $(this).css("top","6px");   
    $(this).css("color","white");
    $(this).removeClass("top-links");
}//if
else{
    $(this).css("top","6px");   
    $(this).css("color","blue");
    $(this).removeClass("top-links");

}
}//leave fn

});//main


$(window).scroll(function() {
    if 
    ($(document).scrollTop() >800) {
     $(".navbar").addClass("bg-dark");
     $(".l1").css("color","white");
    } 
   else
    {
        $(".navbar").removeClass("bg-dark");
        $(".l1").css("color","blue");
    }

});


  function  scrollDark(){
    if 
    ($(document).scrollTop() >800) {
     $(".navbar").addClass("bg-dark");
     $(".l1").css("color","white");
    }
}

//contact card animation
$( ".card-body1").on({

mouseenter: function()
{
        $(this).css("color","cornflowerblue");
        $(this).addClass("border");
  
        $(this).css({"border-color": "black", 
                    "border-weight":"1px", 
                    "border-style":"solid"
                     });

},

mouseleave: function()

{
$(this).css("color","black");
$(this).removeClass("border");
$(this).css({"border-color": "white", 
"border-weight":"1px", 
"border-style":"solid"
});


    }

});