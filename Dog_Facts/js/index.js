document.getElementById("get-fact").addEventListener("click", function() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://192.168.0.41:8080/api/facts?number=1", false);
    request.send();
    var responseJson = JSON.parse(request.responseText);
    var facts = responseJson.facts;
    document.getElementById("fact").innerHTML = facts[0];
    
})