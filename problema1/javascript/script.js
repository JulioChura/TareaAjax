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
    console.log(data)
    let box = document.getElementById(idBox);
    
    var date = [];
    for(let i = 0, index = 0; index < (data[value].confirmed.length)/5; i=i+5, index++) {
        date[index] = data[value].confirmed[i];
    }
    console.log(date)

    const ages = [42,21];

    const chartjs = new Chart(box, {
        type: 'bar',
        data: {
            labels: date,
            datasets: [{
                label: 'date',
                data: ages
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


