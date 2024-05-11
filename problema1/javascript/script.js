function getData() {
    const url = "../data.json";
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.response);
            console.log(datos);
        for(let item of datos) {
            console.log(item.region);
        }
        }
    }
}

function listaRegiones(data) {
    let body = "<option selected>Open this select menu</option>"
    for(item of data) {
        body += `<option value="1">´${item.region}</option>`;
    }
}
getData();