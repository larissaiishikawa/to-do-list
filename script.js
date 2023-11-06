let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7"); //caracter x
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function addElemento() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarefa").value;
    inputValue = inputValue.toUpperCase();
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1; // Adicione +1 porque os meses são base 0 (janeiro = 0)
    let ano = dataAtual.getFullYear();
    let data = dia + "/" + mes + "/" + ano; // Formato: DD/MM/AAAA
    let t = document.createTextNode(data + " - " + inputValue); // Adiciona data e texto
    li.appendChild(t);
    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
    } else {
        document.getElementById("itemLista").appendChild(li);
    }
    document.getElementById("tarefa").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function limparLista() {
    let lista = document.getElementById("itemLista");
    lista.innerHTML = ""; // Remove todos os elementos da lista
}

function adicionarComEnter(event) {
    if (event.key === "Enter") {
        addElemento();
    }
}
