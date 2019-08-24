/*
Q1:
Check if jQuery is loaded
*/

    $(function (){
        if (jQuery) {

            console.log("link is here")
        }
    });


/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/

$("#back").click(function(){
    $("html , body").animate({scrollTop:0},0)
})

/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/
    $(document).ready(function(){
        $("#btn1").click(function(){
            $("#box").animate({
                height: '+=150px',
                width: '+=150px'
            });
        });
    });

$(document).ready(function(){
    $("#btn2").click(function(){
        $("#box").animate({
            height: '150px',
            width: '150px'
        });
    });
});
/*
Q4:
Learn how to fadein your boxes
*/
var num  =3000;
$(document).ready(function(){
    $("#btn3").click(function(){
        $("#div1").fadeToggle(3000);
        $("#div2").fadeToggle(6000);
        $("#div3").fadeToggle(2000);


    });
});

/*
Q5:
User must first accept then he or she can signup
*/

$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).is(":checked")){
            $("#submitbtn").attr("disabled", false)
        }else {
            $("#submitbtn").attr("disabled", true)

        }

    });
});
/*
Q6:
Let them print
*/
$(".printPage").click(function(){
    window.print()
})
/*
Q7:
Can username be too long? Yest it can - lets limit that
*/
$( document ).ready(function() {
    $('#textarea').attr('maxlength','20');

    var maxLength = 20;
    $('textarea').keyup(function() {
        var length = $(this).val().length;
        var length = maxLength-length;
        $('#rchars').text(length);
    });
});

/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
$("#bold p").css({fontWeight:"bold"});


/*
Q9:
Add new div to your website
*/

function new_div(){
    $("#text").after("<div>Hello World!</div>")
}
/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/
$("#btnclick").click(function(){
    $('ul').append('<li> <a href="#">MadHunter</a></li>');
});

/*
Q12:
Know what user puts into textbox
*/

$("#usertext").change(function(){
    var x=usertext.value;
    $("#usertext").after(x)
})
/*
Q13:
Change input value
*/

$("#button").prop({"value":"Orange Academy"});


// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 