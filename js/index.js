$(document).ready(function() {
var x = 'x';
var o = 'o';
var count = 0;
var o_win = 0;
var x_win = 0;
function liReset() {
    $("#game li").text("+");
    $("#game li").removeClass('disable')
    $("#game li").removeClass('o')
    $("#game li").removeClass('x')
    $("#game li").removeClass('btn-primary')
    $("#game li").removeClass('btn-danger')
};
function ticTacLogic(arg) {
    var index0 = $("#one"),
        index1 = $("#two"),
        index2 = $("#three"),
        index3 = $("#four"),
        index4 = $("#five"),
        index5 = $("#six"),
        index6 = $("#seven"),
        index7 = $("#eight"),
        index8 = $("#nine");

        if (   $(index0).hasClass(arg)
                &&  $(index1).hasClass(arg)
                &&  $(index2).hasClass(arg) ||
                    $(index3).hasClass(arg)
                &&  $(index4).hasClass(arg)
                &&  $(index5).hasClass(arg) ||
                    $(index6).hasClass(arg)
                &&  $(index7).hasClass(arg)
                &&  $(index8).hasClass(arg) ||
                    $(index0).hasClass(arg)
                &&  $(index3).hasClass(arg)
                &&  $(index6).hasClass(arg) ||
                    $(index1).hasClass(arg)
                &&  $(index4).hasClass(arg)
                &&  $(index7).hasClass(arg) ||
                    $(index2).hasClass(arg)
                &&  $(index5).hasClass(arg)
                &&  $(index8).hasClass(arg) ||
                    $(index0).hasClass(arg)
                &&  $(index4).hasClass(arg)
                &&  $(index8).hasClass(arg) ||
                    $(index2).hasClass(arg)
                &&  $(index4).hasClass(arg)
                &&  $(index6).hasClass(arg)
            )
            if (arg == "o") {
                return "o";
            }else{
                return "x";
            }
};

$("#game li").click(function(){
    if (ticTacLogic(o) == "o"){
        alert("O has won the game. Start a new game")
        liReset();
    }
    else if (ticTacLogic(x) == "x"){
        alert("X has won the game. Start a new game")
        liReset();
    }
    else if (count == 9){
        alert("Its a tie. It will restart.")
        liReset();
    	count = 0
    }
    else if ($(this).hasClass("disable")){
        alert("Already selected")
    }
    else if (count%2 == 0){
        count++
        $(this).text(o)
        $(this).addClass("disable o btn-primary")
        var user_o = ticTacLogic(o);
          if (user_o == "o"){
             alert("O wins")
             count = 0
             o_win++
             $("#o_win").text(o_win)
         }
     }
    else{
        count++
        $(this).text(x)
        $(this).addClass("disable x btn-danger")
        var user_x = ticTacLogic(x);
          if (user_x == "x"){
             alert("X wins")
             count = 0
             x_win++
             $("#x_win").text(x_win)
         }
        }

   });
   $("#reset").click(function () {
        liReset();
	    count = 0
  });

});
