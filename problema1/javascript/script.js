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

            //Ahora vamos a recoger las opciones
            
        }
    }
})

function showGraphic(value, idBox) {
    
    let graf = document.getElementById("box"+idBox);
    graf.innerHTML = `<canvas id='${idBox}'  class='opciones__lado' width='570'></canvas>`;
    let box = document.getElementById(idBox);
    let date = [];
    let info = [];
    for(let i = 10, index = 0; i < (data[value].confirmed.length); i=i+3, index++) {
        date[index] = data[value].confirmed[i].date;
        info[index] = data[value].confirmed[i].value;
    }
    const chartjs = new Chart(box, {
        type: 'line',
        data: {
            labels: date,
            datasets: [{
                label: "date",
                data: info,
            }]
        }
    })
}

function showRegions() {
   
    let index = 0;
    let body = '<option selected class="options">Open this select menu</option>'
    for(item of data) {
        body += `<option class="options" value="${index}">${item.region}</option>`;
        index++;
    }
    return body;
}


