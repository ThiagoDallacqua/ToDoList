/**
 * Created by thiago on 25/10/16.
 */

var width = screen.width;
var height = screen.height;

$("input[type='text']").css("display", "none");

if(width < 1024){

    $("ul").on("click", "li", function () { //will add the event to all possible li's, indifferently if they exist at the first load of the page or not

        var text = $(this).text();
        $(this).html("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>" +
            "<span id='completedMobile'><i class='fa fa-check' aria-hidden='true'></i></span>" + text + "</li>");
        $(this).toggleClass("completed");
    });

}else{



    $("ul").on("click", "li", function () { //will add the event to all possible li's, indifferently if they exist at the first load of the page or not

        $(this).toggleClass("completed");
    });
}

$("ul").on("click", "li span", function (event) {


    $(this).parent().fadeOut(500, function () { //remove the li which contains the referred span

        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {

    if(event.which === 13){

        var todoText = $(this).val();

        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");

        $(this).val("");
    }
});

$(".fa-plus").click(function () {

    if($("input[type='text']").css("display") === "none"){

        $(this).css({

            animationName: "faPlus",
            animationDuration: "0.2s",
            animationTimingFunction: "linear",
            animationDelay: "0",
            animationIterationCount: "1"
        });
    }else{

        $(this).css({

            animationName: "faPlusInverse",
            animationDuration: "0.2s",
            animationTimingFunction: "linear",
            animationDelay: "0",
            animationIterationCount: "1"
        });
    }

    $("input[type='text']").fadeToggle("fast");
});