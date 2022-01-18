function imc(){
    let altura = parseFloat(document.getElementById("altura").value);
  
    let peso = parseFloat(document.getElementById("peso").value);
  
    let resultado = peso/(altura*altura);
  
    if(resultado < 18.5){(document.getElementById("resultado").innerHTML = ("Você está abaixo do peso"))}
  
    else if(resultado == 18.5 || resultado <= 24.9){
      (document.getElementById("resultado").innerHTML =
       ("Seu peso está normal"))
    }
  
    else if(resultado == 24.9 || resultado<= 30){
      (document.getElementById("resultado").innerHTML =
       ("Você está acima do peso ideal"))
    }
  
    else if(resultado > 30){ (document.getElementById("resultado").innerHTML =
       ("Você está obeso"))
  
    }
  }