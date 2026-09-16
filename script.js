let wordInput = document.getElementById("word-input")
let word = document.getElementById("word")
let bg = document.getElementById("background-color")
let textX = document.getElementById("text-x")
let textY = document.getElementById("text-y")
let textSize = document.getElementById("text-size")
let tateX = document.getElementById("tate-x")
let tateY = document.getElementById("tate-y")
let tateSize = document.getElementById("tate-size")
let tate = document.getElementById("tate")

function updateText(word, wordInput){
    word.textContent = wordInput.value
}
wordInput.addEventListener("input", function () {
  updateText(word, wordInput);
})

bg.addEventListener("input", function () {
    document.body.style.backgroundColor = bg.value})

textX.addEventListener("input", function () {
    word.style.position = "absolute";
    word.style.left = textX.value + "px";
});

textY.addEventListener("input", function () {
    word.style.position = "absolute";
    word.style.top = textY.value + "px";
});

textSize.addEventListener("input", function () {
    word.style.fontSize = textSize.value + "px";
});

// 5. Tate image position & size
tateX.addEventListener("input", function () {
    tate.style.position = "absolute";
    tate.style.left = tateX.value + "px";
});

tateY.addEventListener("input", function () {
    tate.style.position = "absolute";
    tate.style.top = tateY.value + "px";
});

tateSize.addEventListener("input", function () {
    tate.style.width = tateSize.value + "px";
});