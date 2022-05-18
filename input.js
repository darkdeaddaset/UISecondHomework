function validate(){
    var a = document.coef.a.value;
    var b = document.coef.b.value;
    var c = document.coef.c.value;

    if (isNaN(a) || isNaN(b) || isNaN(c)){
        console.log("Error");
    } else{
        var result = d(a,b,c);
        console.log(result);
        createAnswer(result);
    }
}

function d(a, b, c){
    result = {}
    result.equation = "a="+a+"\nb="+b+"\nc="+c;

    if (a == -1){
        a = a * (-1);
        b = b * (-1);
        c = c * (-1);
    }

    var d = Math.pow(b,2) - 4 * a * c;
    result.d = "D=" + d;

    if (d == 0){
        var x = -b / (2 * a);
        result.x = "x=" + x;    
        return result;
    }
    if (d < 0){
        result.x = "Корней нет!";
        return result;
    } else {
        x1 = (-b + Math.sqrt(d))/(2 * a);
        x2 = (-b - Math.sqrt(d))/(2 * a);

        result.x1 = "x1=" + x1;
        result.x2 = "x2=" + x2;
        return result;
    }
}

function createAnswer(result){
    var table = document.getElementById('roots');
    var row = table.insertRow();

    var equation = row.insertCell();
    var d = row.insertCell();
    var x1 = row.insertCell();
    var x2 = row.insertCell();

    equation.appendChild(document.createTextNode(result.equation));
    d.appendChild(document.createTextNode(result.d));
    x1.appendChild(document.createTextNode(result.x1));
    x2.appendChild(document.createTextNode(result.x2));

    equation.addEventListener("click", e =>{
        equation.remove();
    });

    d.addEventListener("click", e =>{
        d.remove();
    });

    x1.addEventListener("click", e =>{
        x1.remove();
    });

    x2.addEventListener("click", e =>{
        x2.remove();
    });
}

function reset(){
    var temp = document.getElementById("coef");
    temp.reset();
}