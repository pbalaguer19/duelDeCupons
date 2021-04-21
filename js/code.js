var elementNum = parseInt(Math.random() * data.length);
var product = data[elementNum];

document.getElementById("img").src = product["img"];
document.getElementById("product").innerHTML = product["name"];
document.getElementById("price").innerHTML = product["price"] + "€";
document.getElementById("url").href = product["url"];

updateRange();

function updateRange(){
    var range = parseInt(document.getElementById("range").value);
    document.getElementById("opcio1").innerHTML = range + "%";
    document.getElementById("opcio2").innerHTML = range + "€";
}

