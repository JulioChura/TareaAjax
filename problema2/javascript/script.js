var data;
document.addEventListener('DOMContentLoaded', function() {
    const url = "../data.json";
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.response);
            console.log(data)
            showGraphic()
        }
    }
})

function showGraphic() {
    let box = document.getElementById('lienzo');
    let fechas = [];

    let nameRegion = [];
    
    let dictionary = [];
    for(let index = 0; index < data.length; index++) {
        if (data[index].region !== 'Lima' && data[index].region !== 'Callao') {
            let temDic = { label: data[index].region };
            let values = [];

            for (let i = 6, indice = 0; indice < 65 / 3; i = i + 2, indice++) {
                console.log(data[index].confirmed[i].value);
                values[indice] = data[index].confirmed[i].value;
                fechas[indice] = data[index].confirmed[i].date;
            }
            temDic.data = values;
            dictionary.push(temDic); 
            date = data[index].region;
        }
    }
    console.log(dictionary[3])
    console.log(fechas)

    const chartjs = new Chart(box, {
        type: 'line',
        data: {
            labels: fechas,
            
            datasets: [...dictionary]
        }
    })
}


