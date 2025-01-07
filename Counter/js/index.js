var counter = 0;

document.getElementById("button_1").addEventListener("click", function() {
     counter = counter - 1;
     document.getElementById("number").innerHTML = counter;
     if (counter >= 0) {
        document.getElementById("number").style.color = "rgb(42, 102, 42)"; 
     } else {
        document.getElementById("number").style.color = "red";
    }
})

document.getElementById("button_2").addEventListener("click", function() {
     counter = 0;   
     document.getElementById("number").innerHTML = counter;
     document.getElementById("number").style.color = "rgb(42, 102, 42)";
})

document.getElementById("button_3").addEventListener("click", function() {
    counter = counter + 1;  
    document.getElementById("number").innerHTML = counter;
    if (counter >= 0) {
        document.getElementById("number").style.color = "rgb(42, 102, 42)"; 
     } else {
        document.getElementById("number").style.color = "red";
    }
})