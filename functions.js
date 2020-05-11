
function novoElemento() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("VOCÊ DEVE ESCREVER ALGO!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

// CRIA BOTÃO CLOSE E FAZ ELE FECHAR

  var close = document.getElementsByClassName("close");
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Remover");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// ORDEM ALFABÉTICA

function OrdenaLista() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementsByTagName('LI');
  switching = true;
  while (switching) {
    switching = false;

    for (i = 0; i < (list.length - 1); i++) {
      shouldSwitch = false;

      if (list[i].innerHTML.toLowerCase() > list[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      list[i].parentNode.insertBefore(list[i + 1], list[i]);
      switching = true;
    }
  }
}

// SALVA ÚLTIMO INPUT ESCRITO EM LOCALSTORAGE

function salvaNome(){

var myInput = document.getElementById('myInput').value;
localStorage.setItem('myInput', myInput);

}

if(localStorage.myInput){
  document.getElementById('myInput').value = localStorage.myInput;
}

// MOSTRA AVISO

function alertaAviso() {
  var x = document.getElementById("avisin");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// FECHAR AVISO

function fechaAviso(){
  var x = document.getElementById("avisin");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// FECHAR MODAL

function fechaModal(){
  var x = document.getElementById("modal");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
