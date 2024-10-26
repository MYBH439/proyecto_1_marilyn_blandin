console.log("hola mundoo");
let btn = document.getElementById("boton");
let p = document.createElement("p");
let pid= document.getElementById("p");
let mensaje;

btn.addEventListener("click", (e) => {
    for(let cont=1 ; cont<=20; cont++){
        if (cont%2 === 0){
            mensaje = document.createTextNode(("el numero" + cont + "es parr"));
            p.appendChild(mensaje);
        }else{
          mensaje = document.createTextNode(("el numero" + cont + "es imparr"));
          p.appendChild(mensaje);
        }

        document.body.insertBefore(p, pid);
        }
})
