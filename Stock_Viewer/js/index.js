document.getElementById("submit-button").addEventListener("click", getStockInformation)

function getStockInformation() {
    const symbol = document.getElementById("ticker-symbol").value;
    const responseJson = sendRequest(symbol); 
    if(responseJson.hasOwnProperty("error")) {
        alert(responseJson.error.message);
    } else {
        updateHTML(responseJson);
    }
    document.getElementById("ticker-symbol").value = "";
}


function sendRequest(symbol) {
    const request = new XMLHttpRequest();
    const api = "http://api.marketstack.com/v1/eod/latest?access_key=87af132a4335fbc7720bd4af398274d4&symbols=" + symbol;
    request.open("GET", api, false);
    request.send();
    const responseJson = JSON.parse(request.responseText);
    return responseJson;
}

function updateHTML(responseJson) {
    const open = responseJson.data[0].open;
    const high = responseJson.data[0].high;
    const low = responseJson.data[0].low;
    const companySymbol = responseJson.data[0].symbol;
    const exchange = responseJson.data[0].exchange;
    const date = responseJson.data[0].date;
    document.getElementById("open-p").innerHTML = open;
    document.getElementById("high-p").innerHTML = high;
    document.getElementById("low-p").innerHTML = low;
    document.getElementById("symbol-p").innerHTML = companySymbol;
    document.getElementById("exchange-p").innerHTML = exchange;
    document.getElementById("date-p").innerHTML = date.slice(0,10);
}

