
function saludar(){
    let respuesta = prompt("hola como estas ");
    if (respuesta == "bien"){
        alert("que bacano");
    }
    else {
        alert("que falla");
    } 
}
 // si no tienen parametros de entrada se copia asi const saludo=()=>{};
 // si tiene una sola variable de entrada es asi const saludio=num1=>{};
 //si tiene solo una varible y es una solo linea es asi const saludo=num1=> linea de codigo;
const saludar2=()=>{
    let respuesta = prompt("hola como estas ");
    if (respuesta == "bien"){
        alert("que bacano");
    }
    else {
        alert("que falla");
    } 

}
for (let i = 0;i<2; i++){
    saludar2() ;


}

