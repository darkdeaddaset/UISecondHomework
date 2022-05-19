function validate(){
    var a = document.coef.a.value;
    var b = document.coef.b.value;
    var c = document.coef.c.value;

    if (isNaN(a) || isNaN(b) || isNaN(c)){
        error(a,b,c);
    } else if (a==0){
        nullA();
    } else {
        var result = d(a,b,c);
        console.log(result);
    }
}

function d(a, b, c){
    var error = document.getElementById("error");
    error.innerHTML = "";

    result = {}
    result.equation = "a="+a+"\nb="+b+"\nc="+c;

    var d = Math.pow(b,2) - 4 * a * c;
    result.d = "D=" + d;

    if (d == 0){
        var x = -b / (2 * a);
        result.x = "x=" + x;    
        createNo(result);
    } else if (d < 0){
        result.x = "Корней нет!";
        createNo(result);
    } else {
        x1 = (-b + Math.sqrt(d))/(2 * a);
        x2 = (-b - Math.sqrt(d))/(2 * a);

        result.x1 = "x1=" + x1;
        result.x2 = "x2=" + x2;
        createAnswer(result);
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

    row.addEventListener("click", e => {
        var temp = row.rowIndex;
        document.getElementById('roots').deleteRow(temp);
    });
}

function createNo(result){
    var table = document.getElementById('roots');
    var row = table.insertRow();

    var equation = row.insertCell();
    var d = row.insertCell();
    var x = row.insertCell();

    equation.appendChild(document.createTextNode(result.equation));
    d.appendChild(document.createTextNode(result.d));
    x.appendChild(document.createTextNode(result.x));


    row.addEventListener("click", e => {
        var temp = row.rowIndex;
        document.getElementById('roots').deleteRow(temp);
    });
}

function reset(){
    var temp = document.getElementById("coef");
    temp.reset();
}

function error(a,b,c){
    var error = document.getElementById("error");

    if (isNaN(a)){
        error.innerHTML = "А не число";
    } else if (isNaN(b)){
        error.innerHTML = "B не число";
    } else if (isNaN(c)){
        error.innerHTML = "C не число";
    }
}

function nullA(){
    var error = document.getElementById('error')
    error.innerHTML = "Уравнение не квадратное!";
}