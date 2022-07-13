function comparison(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = document.getElementById("num3").value;
    
    if(a > b && b > c){
        var r = document.getElementById("cresult").value = c +("<")+ b+ ("<")+ a;
    }else if (a > b && c > b && c < a){
        var r = document.getElementById("cresult").value = b +("<")+ c+ ("<")+ a; 
    }else if (a > b && c > a){
        var r = document.getElementById("cresult").value = b +("<")+ a + ("<")+ c;
    }else if (b > a && b > c && c < a ){
        var r = document.getElementById("cresult").value = c +("<")+ a + ("<")+ b;
    }else if (b > c && c > a){
        var r = document.getElementById("cresult").value = a +("<")+ c + ("<")+ b;
    }else{
        var r = document.getElementById("cresult").value = a +("<")+ b + ("<")+ c;
    }
}

function hello(){
    var selectValue = document.getElementById("list").value;
    var a = ("hello father")
    var b = ("hello mother")
    var c = ("hello sister")
    var d = ("hello brother")
    if (selectValue === "1"){
        var r = document.getElementById("hirt").value = a
    }else if (selectValue === "2"){
        var r = document.getElementById("hirt").value = b
    }else if (selectValue === "3"){
        var r = document.getElementById("hirt").value = c
    }else{
        var r = document.getElementById("hirt").value = d
    }
    
}
function chanle(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = document.getElementById("num3").value;
    var odd = 0;
    var event = 0;
    var d = ("There are ");
    var e = ("even number and");
    var f = ("odd number")
    if (a%2==0){
        event ++;
    }
    if(b%2==0){
        event ++;
    }if(c%2==0){
        event ++;
    }
    odd = 3 - event;
    var cr= document.getElementById("c").value = d+ event + e + odd + f;
}
function triangel(){
    var a = document.getElementById("numa").value;
    var b = document.getElementById("numb").value;
    var c = document.getElementById("numc").value;
    var can = ("isosceles triangle")
    var vuong = ("right triangle")
    var deu = ("equilateral triangle")
    var tu = ("obstu triangle")
    var none= ("do you thing it is a triangle?")
    
        if(a==b && b==c && c==a){
            var t = document.getElementById("triangle").value = deu;
        }else if (a==b && a!==c || a==c && a!==b ||b==a && b!==c ||b==c && b!==a){
            var t = document.getElementById("triangle").value = can;
        }
        else if(a*a == b*b + c*c || b*b==a*a+c*c || c*c==a*a+b*b){
            var t = document.getElementById("triangle").value = vuong;
        }else if(a*a > b*b+c*c || b*b > a*a+c*c || c*c > a*a+b*b){
            var t = document.getElementById("triangle").value = tu;
        }
        else{
            var t = document.getElementById("triangle").value = none;

        }
    

}