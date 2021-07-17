let tarefas = [];
function Tarefa(nome,categoria,realizada){
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
}

let tarefa1 = new Tarefa('Comprar leite','compras',false);
let tarefa2 = new Tarefa('Escutar chimbinha','lazer',true);

tarefas.push(tarefa1);
tarefas.push(tarefa2);

const insereTarefaNaPagina = (tarefaAtual) =>{
    const li = document.createElement("li");
    li.classList.add('item-tarefa');
    li.classList.add(`categoria-${tarefaAtual.categoria}`);
    li.innerHTML = tarefaAtual.nome;
    if(tarefaAtual.realizada)
    li.classList.add('marcado');

    li.addEventListener('click', (e) => {
    e.target.classList.toggle("marcado");

    const nomeMarcado = e.target.innerHTML;

    if(tarefaAtual.nome === nomeMarcado)
    tarefaAtual.realizada = !tarefaAtual.realizada;

   
    tarefaAtual.realizada


    });

    document.querySelector("#lista-tarefas").appendChild(li);
};

for(let tarefaAtual of tarefas){
    insereTarefaNaPagina(tarefaAtual);
}

const CriarTarefa =() =>{
    const nome = document.getElementById("nova-tarefa-nome").value;
    const categoria = document.getElementById("nova-tarefa-categoria").value;

    let tarefaNova = new Tarefa(nome,categoria,false);
    tarefas.push(tarefaNova);

    insereTarefaNaPagina(tarefaNova);

    document.getElementById("nova-tarefa-nome").focus();

};

document.getElementById("filtros").addEventListener("change", (event) => {
    const selected = event.target.value;
    console.log(selected);
    document.querySelector("#lista-tarefas").innerHTML ='';
    
    for(let tarefaAtual of tarefas) {
        if(selected ==='') {
            insereTarefaNaPagina(tarefaAtual);
        }
        else if(tarefaAtual.categoria === selected) {
            insereTarefaNaPagina(tarefaAtual);
        }

    }  
});

document.getElementById("incluir-nova-tarefa").addEventListener('click', CriarTarefa);

document.getElementById("nova-tarefa-nome").addEventListener('keyup', (e) => { if(e.key === 'Enter') adicionarTarefa(); });
