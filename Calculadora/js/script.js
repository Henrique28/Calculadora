

function calcular(tipo, valor){


    if(tipo == "valor"){
        
        document.getElementById("resul").value += valor

    }else if (tipo == "acao"){
        
        if(valor == "c"){

            document.getElementById("resul").value = ''
        }
        
        if (valor == "/" || valor == "*" || valor == "-" || valor == "+" || valor == "." ){

            document.getElementById("resul").value += valor
        }

        if (valor == "="){
            var valorCampo = eval(document.getElementById("resul").value)
            document.getElementById("resul").value = valorCampo
        }

    }    

}