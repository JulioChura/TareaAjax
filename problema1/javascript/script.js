let data;
document.addEventListener('DOMContentLoaded', function() {
    const url = "../data.json";
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.response);
            console.log(data);
                
        }
    }
})
