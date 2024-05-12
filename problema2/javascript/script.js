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
            showGraphic(1,1)
        }
    }
})

function showGraphic( idBox) {
    let box = document.getElementById(idBox);
    let date = [];

    let dictionay = [];
    for(let index = 0; index < data.length; index++) {
        let temDic;
        temDic ={label: data[index].region}
        let values = [];
        for (let i = 6, indice = 0; indice < 65/3; i=i+2, indice++) {
            console.log(data[index].confirmed[i].value)
            values[indice] = data[index].confirmed[i].value;
        }
        temDic.data = values;
        dictionay[index] = temDic;
    }
    console.log("holas")
    console.log(dictionay);
    

    for(let i = 10, index = 0; i < (data[value].confirmed.length); i=i+2, index++) {
        date[index] = data[value].confirmed[i].date;
        info[index] = data[value].confirmed[i].value;
    }
    const chartjs = new Chart(box, {
        type: 'line',
        data: {
            labels: date,
            datasets: [{
                label: "date",
                data:  info
            },
            {
                label: "daqte",
                data:  info
            }    
            ]
        }
    })
}


