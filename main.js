var wynik = document.getElementById("wynik");
var button = document.getElementById("los");
button.addEventListener("click", function () {
    var x = Math.floor(Math.random() * cytaty.length);
    document.getElementById("wynik").innerHTML = cytaty[x];
});
var red = document.getElementById("red");
red.addEventListener("click", function () {
    document.body.style.background = "linear-gradient(to right, #cb356b, #bd3f32)"
});
var blue = document.getElementById("blue");
blue.addEventListener("click", function () {
    document.body.style.background = "linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)"
});
var green = document.getElementById("green");
green.addEventListener("click", function () {
    document.body.style.background = "linear-gradient(to right, #11998e, #38ef7d)"
});
var yellow = document.getElementById("yellow");
yellow.addEventListener("click", function () {
    document.body.style.background = "linear-gradient(to right, #cac531, #f3f9a7)"
});
var grey = document.getElementById("grey");
grey.addEventListener("click", function () {
    document.body.style.background = "linear-gradient(to right, #d3cce3, #e9e4f0)"
});
var normal = document.getElementById("normal");
normal.addEventListener("click", function () {
    document.body.style.background = "linear-gradient(to right, #FFFFFF, #ECE9E6)"
});

var mala = document.getElementById("mala");
mala.addEventListener("click", function () {
    wynik.style.fontSize = "18px"
});
var srednia = document.getElementById("srednia");
srednia.addEventListener("click", function () {
    wynik.style.fontSize = "22px"
});
var duza = document.getElementById("duza");
duza.addEventListener("click", function () {
    wynik.style.fontSize = "28px"
});
