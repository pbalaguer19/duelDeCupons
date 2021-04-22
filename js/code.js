var elementNum = parseInt(Math.random() * data.length);
var product = data[elementNum];
var finalPriceEuros;
var finalPricePercent;

document.getElementById("img").src = product["img"];
document.getElementById("product").innerHTML = product["name"];
document.getElementById("price").innerHTML = product["price"] + "€";
document.getElementById("url").href = product["url"];

updateRange();

function updateRange(){
    var range = parseInt(document.getElementById("range").value);
    document.getElementById("opcio1").innerHTML = range + "%";
    document.getElementById("opcio2").innerHTML = range + "€";

    finalPriceEuros = product["price"] - parseInt(range);
    finalPricePercent = product["price"] - (product["price"] * parseInt(range) / 100);

    if (finalPriceEuros < 0) finalPriceEuros = 0;
    if (finalPricePercent < 0) finalPricePercent = 0;
}

function euros(){
    if (finalPriceEuros < finalPricePercent) alert("Has escollit l'opció més barata!");
    if (finalPriceEuros == finalPricePercent) alert("Les dues opcions tenen el mateix preu final!");
    if (finalPriceEuros > finalPricePercent) alert("Ep! Has escollit l'opció més cara!");
}

function percent(){
    if (finalPriceEuros > finalPricePercent) alert("Has escollit l'opció més barata!");
    if (finalPriceEuros == finalPricePercent) alert("Les dues opcions tenen el mateix preu final!");
    if (finalPriceEuros < finalPricePercent) alert("Ep! Has escollit l'opció més cara!");
}

