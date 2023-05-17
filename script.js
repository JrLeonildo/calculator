const v1 = document.querySelector('.valor1');
const v2 = document.querySelector('.valor2');
const exit = document.querySelector('.exit');
const button = document.querySelector('.button');

function operar(v1,v2){
  let opr = document.getElementsByName('operador');
  if(v1==0 || v2==0){
    const warning = exit.innerHTML = "[ERRO] Verifique os dados e tente novamente!";
    exit.style.color = "red"
    return warning
  }else{
    exit.style.color = "black"
    if(opr[0].checked){
      const result = Number(v1)+Number(v2);
      return result;
    }else if(opr[1].checked){
      const result = Number(v1)-Number(v2);
      return result;
    }else if(opr[2].checked){
      const result = Number(v1)*Number(v2);
      return result;
    }else{
      const result = Number(v1)/Number(v2);
      return result;
    }
  }
}

const start = () => {
  const result = operar(v1.value, v2.value);
  exit.innerHTML = `O resultado da operação é: ${result}`
}

button.addEventListener("click", start);