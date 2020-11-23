$(document).ready(function(){

    if($("#first-row img:last-of-type").html() === "<img id='f-five' src='./assets/4tB6jJkw.jpeg'>"){
        $("#arrows #left-arrow").css({"opacity": "0.5"})
    } 

    $("#arrows #right-arrow").click(function(){

        $("#first-row img:last-of-type").hide().prependTo("#first-row").fadeIn(600);
        $("#first-row img").css({"margin": "0 4px"});

        $("#second-row img:last-of-type").hide().prependTo("#second-row").fadeIn(600);
        $("#second-row img").css({"margin": "0 3px"});

        $("#arrows #left-arrow").css({"opacity": "1"});
       
    });

    $("#arrows #left-arrow").click(function(){

        $("#first-row img:first-of-type").hide().appendTo("#first-row").fadeIn(600);
        $("#first-row img").css({"margin": "0 4px"});

        $("#second-row img:first-of-type").hide().appendTo("#second-row").fadeIn(600);
        $("#second-row img").css({"margin": "0 3px"});
       
    });

    $("#angle-br-left").mouseenter(function(){
        $("#angle-br-left").css({
            "background-color": " rgba(124, 128, 128, 0.8)",
            "cursor": "pointer",
            "left": "-4vw",
            "transition": "all 0.2s"
        });
    });

    $("#angle-br-left").mouseleave(function(){
        $("#angle-br-left").css({
            "background-color": " rgba(124, 128, 128, 0.2)",
            "cursor": "pointer",
            "left": "-7vw",
            "transition": "all 0.2s"
        });
    });

    $("#angle-br-right").mouseenter(function(){
        $("#angle-br-right").css({
            "background-color": " rgba(124, 128, 128, 0.8)",
            "cursor": "pointer",
            "left": "94vw",
            "transition": "all 0.2s"
        });
    });

    $("#angle-br-right").mouseleave(function(){
        $("#angle-br-right").css({
            "background-color": " rgba(124, 128, 128, 0.2)",
            "cursor": "pointer",
            "left": "96vw",
            "transition": "all 0.2s"
        });
    });

});
