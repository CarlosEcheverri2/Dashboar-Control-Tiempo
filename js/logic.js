const $selector = document.querySelector(".selector")
let dataJson


const paint =  (res,time) => {
    console.log("entre")
    console.log(time)
    $contenido = document.querySelectorAll(".contenido")
    let conteo = 0
    /*debemos de montar un case validando el nombre de la clase*/

    switch(time){
        case "daily":
            res.forEach(item => {
                let contenedor = $contenido[conteo]
                conteo ++
                contenedor.children[0].innerHTML = `${item.title}`
                contenedor.children[1].innerHTML = `${item.timeframes.daily.current} hrs`
                contenedor.children[2].innerHTML = `Last week - ${item.timeframes.daily.previous} hrs`
            });
        break
        
        case "weekly":
            res.forEach(item => {
                let contenedor = $contenido[conteo]
                conteo ++
                contenedor.children[0].innerHTML = `${item.title}`
                contenedor.children[1].innerHTML = `${item.timeframes.weekly.current} hrs`
                contenedor.children[2].innerHTML = `Last week - ${item.timeframes.weekly.previous} hrs`
            });
        break

        case "monthly":
            res.forEach(item => {
                let contenedor = $contenido[conteo]
                conteo ++
                contenedor.children[0].innerHTML = `${item.title}`
                contenedor.children[1].innerHTML = `${item.timeframes.monthly.current} hrs`
                contenedor.children[2].innerHTML = `Last week - ${item.timeframes.monthly.previous} hrs`
            });
        break
    }
    
}

const changePaint = (e) =>{
    let clase = e.target
    console.log("pase")
    paint (dataJson,clase.className)
}

fetch("data.json").then(
    (res) => {
        if(res.ok){
            return res.json()
        }
        else{
            Promise.reject(res)
        }
    } 
).then(
    (res)=>{
        const ini = "daily"
        paint(res,ini)
        dataJson = res
    }
).catch( 
    (res) => {
        console.log("algo salio mal")
    } 
)

$selector.addEventListener("click",changePaint)



