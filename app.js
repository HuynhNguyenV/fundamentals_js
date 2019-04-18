function outer(){
    var b = 10;
    var c = 100;
    function inner(){
        var a = 20;
        console.log("a= " + a + " b= " + b);
        a++;
        b++;
    }
    return inner;
}

var x = outer();
var y = outer();

x();
x();
x();
y();


