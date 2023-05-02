console.log("aplicacion calculadora")

function sumar(){
    const forma = document.getElementById("forma");
     let operandoA = forma["operandoA"];
     let operandoB = forma["operandoB"];
     let resultado= parseInt(operandoA.value) + parseInt(operandoB.value);
     if(isNaN(resultado))
     resultado="faltan los numeros";    
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    console.log(resultado)
}

function multiplicar(){
    const forma = document.getElementById("forma");
     let operandoA = forma["operandoA"];
     let operandoB = forma["operandoB"];
     let resultado= parseInt(operandoA.value) * parseInt(operandoB.value);
     if(isNaN(resultado))
     resultado="faltan los numeros";    
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    console.log(resultado)
}