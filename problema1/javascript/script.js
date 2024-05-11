var data;
document.addEventListener('DOMContentLoaded', function() {
    const url = "../data.json";
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.response);
            console.log(data);
            let section1 = document.getElementById('regions1');
            let section2 = document.getElementById('regions2');
            section1.innerHTML = showRegions();
            section2.innerHTML = showRegions();
            
        }
    }
})

function showRegions() {
    let body = "<option selected>Open this select menu</option>"
    for(item of data) {
        body += `<option value="1">´${item.region}</option>`;
    }
    return body;
}

console.log(data);






function mostrarGrafico(datos) {

}
