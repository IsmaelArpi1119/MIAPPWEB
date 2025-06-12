function mostrarPresentacion() {
    const nombre= document.getElementById("nombre").value;
    const edad= document.getElementById("edad").value;
    const artista= document.getElementById("artista").value;
    const comida= document.getElementById("comida").value;
    const musica= document.getElementById("musica").value;

    let generacion;

    // if(edad>=50){
    //     generacion="Baby Boomer";
    // } else if(edad>=43){
    //     generacion="Generacion X";
    // } else if(edad>=27){
    //     generacion="Milenial"
    // } else if(edad>=12){
    //     generacion="Generacion Z"
    // } else {
    //     generacion="Alpha"
    // }

    switch (true) {
    case (edad >= 50):
        generacion = "Baby Boomer";
        break;
    case (edad >= 43):
        generacion = "Generacion X";
        break;
    case (edad >= 27):
        generacion = "Milenial";
        break;
    case (edad >= 12):
        generacion = "Generacion Z";
        break;
    default:
        generacion = "Alpha";
}



const resultado=`
    <strong> Hola soy ${nombre} </strong>
    <br>
    Tengo ${edad} anos y pertenezco a la ${generacion} </strong>
    <br><br>
    Mi artista favorito es: <em>${artista}</em>
    Mi comida favorita es: <em>${comida}</em>
    Mi cancion favorita es: <em>${musica}</em>

`;

document.getElementById("resultado").innerHTML=resultado;
       
}