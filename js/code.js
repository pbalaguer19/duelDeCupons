var elementNum;
var product;
var finalPriceEuros;
var finalPricePercent;

getRandomElement();

function getRandomElement(){
    elementNum = parseInt(Math.random() * data.length);
    product = data[elementNum];

    document.getElementById("img").src = product["img"];
    document.getElementById("product").innerHTML = product["name"];
    document.getElementById("price").innerHTML = product["price"] + "€";
    document.getElementById("url").href = product["url"];

    updateRange();
}

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

    if (finalPriceEuros < finalPricePercent) cheapestOption(finalPriceEuros);
    if (finalPriceEuros == finalPricePercent) equalOption(finalPriceEuros);
    if (finalPriceEuros > finalPricePercent) equalOption(finalPriceEuros, finalPricePercent);
}

function percent(){
    if (finalPriceEuros > finalPricePercent) cheapestOption(finalPricePercent);
    if (finalPriceEuros == finalPricePercent) equalOption(finalPricePercent);
    if (finalPriceEuros < finalPricePercent) mostExpensiveOption(finalPricePercent, finalPriceEuros);
}

function cheapestOption(price){
    document.getElementById("exampleModalLabel").innerHTML = "Has escollit l'opció més barata!"
    document.getElementById("modalBody").innerHTML = "El preu final són " + (Math.round(price * 100) / 100) + "€"
}

function equalOption(price){
    document.getElementById("exampleModalLabel").innerHTML = "Les dues opcions tenen el mateix preu final!"
    document.getElementById("modalBody").innerHTML = "El preu final són " + (Math.round(price * 100) / 100) + "€"
}

function mostExpensiveOption(price, cheapest){
    document.getElementById("exampleModalLabel").innerHTML = "Has escollit l'opció més cara!"
    document.getElementById("modalBody").innerHTML = "El preu final són " + (Math.round(price * 100) / 100) + "€ i amb l'altre descompte el preu final era " + cheapest + "€."
}