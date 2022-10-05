var output = document.getElementById("cool")

function returnText() {
    let start = document.getElementById("userInput").value;
    let end = document.getElementById("userInputCompare").value;

    if (start == end) {
        output.innerHTML = "Same"
        output.style.color = "#69b00b";
    } else {
        output.innerHTML = "Not The Same!"
        output.style.color = "#b00b"
    }
}