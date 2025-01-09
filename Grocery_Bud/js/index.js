var ingredientsList = [];

document.getElementById("ingredients-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var ingredient = document.getElementById("ingredients").value;
    if (ingredientsList.includes(ingredient) === false) {
        var ul = document.getElementById("ingredients-list");
        var individualIngredient = document.createElement("li");
        individualIngredient.setAttribute("id", "list-element")
        individualIngredient.textContent = ingredient;
        ul.appendChild(individualIngredient);
    }
    ingredientsList.push(ingredient);  
    document.getElementById("ingredients").value = "";
})



document.getElementById("clear-items").addEventListener("click", function() {
    ingredientsList = [];
    var ul = document.getElementById("ingredients-list");
    ul.innerHTML = '';
})
