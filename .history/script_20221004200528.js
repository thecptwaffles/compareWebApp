var output = document.getElementById("cool")

function returnText() {
    let start = document.getElementById("userInput").value;
    let end = document.getElementById("userInputCompare").value;

    if (start == end) {
        output.innerHTML = "Same"
        output.style.color = "green";
    } else {
        output.innerHTML = "Not The Same!"
        output.style.color = "red"
    }
}