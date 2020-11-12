$(document).ready(function(){

    $("#first-row img:last-of-type").attr("title", "Current picture in focus");
    $("#second-row .ch:last-of-type").attr("title", "Current picture in focus");
    
    // Adding functionality when right arrow button is clicked
    
    $("#arrow-right").click(function(){ 

        var firstLast = $("#first-row img:last-of-type");

        firstLast.animate({left: "200px", opacity: "0"}, 300);

        setTimeout(function(){
            $(firstLast).prependTo("#first-row");
            firstLast.animate({left: "-100px", opacity: "0"});
            firstLast.animate({left: "0px", opacity: "1"});
            
            firstLast.css({
                width: "120px",
                height: "140px"
            });
            
            $("#first-row img:last-of-type").css({width: "150px", height: "160px"});
        }, 300);

        var secondLast = $("#second-row .ch:last-of-type");

        secondLast.animate({left: "200px", opacity: "0"}, 300);

        setTimeout(function(){
            $(secondLast).prependTo("#second-row");
            secondLast.animate({left: "-100px", opacity: "0"});
            secondLast.animate({left: "0px", opacity: "1"});
            
            secondLast.css({
                width: "120px",
                height: "140px"
            });
        
            $("#second-row .ch:last-of-type").css({width: "150px", height: "160px"});
        }, 300);

    });

    // Adding functionality when left arrow button is clicked
    
    $("#arrow-left").click(function(){
        var first = $("#first-row img:first-child");
        
        first.animate({right: "200px", opacity: "0"}, 300);

        setTimeout(function(){
            first.animate({right: "-200px", opacity: "0"});
            first.animate({right: "0px", opacity: "1"});
            
            $(first).appendTo("#first-row");
            
            $("#first-row img").css({
                width: "120px",
                height: "140px"}
            );
        
            $("#first-row img:last-of-type").css({width: "150px", height: "160px"});
        }, 300);

        var secondLast = $("#second-row .ch:first-child");

        secondLast.animate({right: "200px", opacity: "0"}, 300);

        setTimeout(function(){
            secondLast.animate({right: "-200px", opacity: "0"});
            secondLast.animate({right: "0px", opacity: "1"});
            
            $("span").before($(secondLast));
            
            $("#second-row .ch").css({
                width: "120px",
                height: "140px"
            });
            
            $("#second-row .ch:last-of-type").css({width: "150px", height: "160px"});
        }, 300);

    });

    // Provide information in which direction the images are going, when hovering over arrow buttons

    $("#right").css({opacity: "0"});
    $("#left").css({opacity: "0"});

    $("#arrow-left").mouseover(function(){
        $("#left").css({display: "inline-block",
            position: "relative", 
            right: "0.1em", 
            top: "2em",
            opacity: "1",
            transition: "opacity 0.5s linear",
        });
    });

    $("#arrow-left").mouseleave(function(){
        $("#left").css({opacity: "0"});
    });

    $("#arrow-right").mouseover(function(){
        $("#right").css({display: "inline-block",
            position: "relative", 
            left: "1.2em", 
            top: "2em",
            opacity: "1",
            transition: "opacity 0.5s linear",
        });
    });

    $("#arrow-right").mouseleave(function(){
        $("#right").css({opacity: "0"});
    });  

});