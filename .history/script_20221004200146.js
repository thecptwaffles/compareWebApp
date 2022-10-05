var output = document.getElementById("cool")

function returnText() {
    let start = document.getElementById("userInput").value;
    let end = document.getElementById("userInputCompare").value;

    if (start == end) {
        output.innerHTML = "Same"
    } else {
        output.innerHTML = "Not The Same!"
    }
}