const btnDelete = document.querySelectorAll('.btn-delete')

if (btnDelete) {
    const btnArray = Array.from(btnDelete);
    btnArray.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (!confirm('¿Estas seguro que deseas eliminar?')) {
                e.preventDefault();
            }
        });
    });
}

$(document).ready(function () {
    
    

})

function asignarSigno(){
         var date = document.getElementById("date").value;
         var arrayFecha = date.split("-");
        switch (parseInt(arrayFecha[1])){
            case 1: 
                if(parseInt(arrayFecha[2]) > 20){
                    document.getElementById("signo").value = "Acuario"
                }else{
                    document.getElementById("signo").value= "Capricornio"
                }
                break;
            case 2:
                if(parseInt(arrayFecha[2]) > 19){
                    document.getElementById("signo").value = "Piscis"
                }else{
                    document.getElementById("signo").value= "Acuario"
                }
                break;
            case 3:
                if(parseInt(arrayFecha[2]) > 20){
                    document.getElementById("signo").value = "Aries"
                }else{
                    document.getElementById("signo").value= "Piscis"
                }
                break;
            case 4:
                if(parseInt(arrayFecha[2]) > 20){
                    document.getElementById("signo").value = "Tauro"
                }else{
                    document.getElementById("signo").value= "Aries"
                }
                break;
            case 5:
                if(parseInt(arrayFecha[2]) > 20){
                    document.getElementById("signo").value = "Geminis"
                }else{
                    document.getElementById("signo").value= "Tauro"
                }
                break; 
            case 6:
                if(parseInt(arrayFecha[2]) > 21){
                    document.getElementById("signo").value = "Cancer"
                }else{
                    document.getElementById("signo").value= "Geminis"
                }
                break;
            case 7:
                if(parseInt(arrayFecha[2]) > 22){
                    document.getElementById("signo").value = "Leo"
                }else{
                    document.getElementById("signo").value= "Cancer"
                }
                break;
            case 8:
                if(parseInt(arrayFecha[2]) > 23){
                    document.getElementById("signo").value = "Virgo"
                }else{
                    document.getElementById("signo").value= "Leo"
                }
                break;
            case 9:
                if(parseInt(arrayFecha[2]) > 22){
                    document.getElementById("signo").value = "Libra"
                }else{
                    document.getElementById("signo").value= "Virgo"
                }
                break;
            case 10:
                if(parseInt(arrayFecha[2]) > 22){
                    document.getElementById("signo").value = "Escorpio"
                }else{
                    document.getElementById("signo").value= "Libra"
                }
                break;
            case 11:
                if(parseInt(arrayFecha[2]) > 22){
                    document.getElementById("signo").value = "Sagitario"
                }else{
                    document.getElementById("signo").value= "Escorpio"
                }
                break;
            case 12:
                if(parseInt(arrayFecha[2]) > 21){
                    document.getElementById("signo").value = "Capricornio"
                }else{
                    document.getElementById("signo").value= "Sagitario"
                }
                break;
                        
        }
}

function verificarCampos() {
    var elements = document.querySelectorAll("#form-encuesta select")
    var contador = 0;
    for (var i = 0, element; element = elements[i++];) {
        if (element.value == 0){
            $("#"+element.id).addClass('border border-danger');
            contador++;
        }
    }
    
    if(contador==0){
        $("#btnConfirmar").click();
    }else{
        alertify.error('Elija alguna opcion en los campos marcados con color rojo.');
    }
}