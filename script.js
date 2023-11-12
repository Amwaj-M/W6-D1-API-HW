

function apiFun() {
    fetch('https://rickandmortyapi.com/api/character',{
        method:"get"
    })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            for(let i = 0 ; i < data.results.length; i++) {
                let get_data=document.getElementById("get-data")
                let cont = document.createElement("div");
                cont.className = "card"; 
                cont.innerHTML =
                `<h3>${data.results[i].name}</h3>
                <img src="${data.results[i].image}" alt="${data.results[i].name}">`;

                get_data.appendChild(cont)
            }
        })
        .catch((err)=> console.log(`the err is ${err}`))
    }
    apiFun()


  
