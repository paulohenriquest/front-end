function fecharTarefa(li){
    let span  = document.createElement("SPAN");
    let botao = document.createTextNode(" ❌");

    span.className = "fechar";
    span.appendChild(botao);
    li.appendChild(span);

    span.onclick = () => span.parentElement.style.display = "none";
}

document.querySelectorAll('li').forEach(fecharTarefa);
document.querySelector('ul').addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
});

function adicionar(){
    let li = document.createElement('LI');
    let tarefa_value = document.tarefas.tarefa.value;
    let tarefa_text = document.createTextNode(tarefa_value);

    li.appendChild(tarefa_text);
    document.querySelector('ul').appendChild(li);
    document.tarefas.tarefa.value = "";
    fecharTarefa(li);
}

    let nome = prompt(' Qual o seu nome? ');
    let identificacao = document.getElementById("identificacao");
    tarefas.innerHTML += nome;
