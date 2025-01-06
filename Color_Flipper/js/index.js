var colors = ["Black", "White", "Yellow", "Orange", "Green", "Blue", "Grey", "Violet", "Purple", "Peach"]



document.getElementById("my_button").addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomIndex];
    document.body.style.background = randomColor;
    document.getElementById("name_of_color").innerHTML = randomColor;
})

