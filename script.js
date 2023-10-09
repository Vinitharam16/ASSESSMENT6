var res = fetch("https://restcountries.com/v2/all")
res.then((data) => data.json()).then((value) => bar(value))

var container = document.createElement("div")
container.className = "container"
var row = document.createElement("div")
row.className = "row"
var div = document.createElement("div")


container.append(row);
row.append(div);




function bar(value) {
    for(var i = 0; i < value.length; i++ ){
        row.innerHTML += `
        <div class = "col-md-4">
        <div class="card mb-3" style="max-width: 18rem;">
        <div class="card-header bg-dark header">${value[i].name}</div>
        <div class="card-body">
        <img src="${value[i].flags.png}" class="img-fluid" alt="Responsive image" style="width:auto; height:160px;">
        <p class="card-text">Capital: ${value[i].capital}</p>
        <p class="card-text">Region: ${value[i].region}</p>
        <p class="card-text">Country code: ${value[i].alpha3Code}</p>
        <a href="https://openweathermap.org/" class="btn btn-outline-light" role="button" target="_blank">Click for Weather</a>
        </div>
        </div>
        </div>
        `
        // console.log(`Country Name:${data1[i].name.common},Capital:${data1[i].capital} Flags:${data1[i].flags.png} Timezone: ${data1[i].timezones}`);
    }
    console.log(value);
    document.body.append(container);
}