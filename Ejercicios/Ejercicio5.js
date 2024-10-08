function mayorQue(){

    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var number4 = document.getElementById("number4").value;
    var number5 = document.getElementById("number5").value;
    var number6 = document.getElementById("number6").value;
    var number7 = document.getElementById("number7").value;
    var number8 = document.getElementById("number8").value;
    var number9 = document.getElementById("number9").value;

    
    
    for(i = 1; i < 9; i++){
        var numbers = eval("number"+i)
        var mayor = Math.max(mayor, numbers)

    }

 window.alert(mayor);

}