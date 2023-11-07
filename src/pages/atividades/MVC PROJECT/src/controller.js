import { viewController } from "./view/viewController.js";
import { Usuario } from "./model/usuario.model.js";

let data = [];
const submitType = {NEW:0,UPDATE:1};
let submitState = submitType.NEW;
let currentId = null;

const handleSubmit = (event) =>{
  event.preventDefault();
  //RECEBENDO OS DADOS DOS INPUTS
  const user = new Usuario(nome.value, idade.value, login.value, senha.value);
  //CHECAR O TIPO DE SUBMIT
  if (submitState == submitType.NEW) {
    //VAMOS ADICIONAR UM NOVO USUÁRIO
    addUser(user);
  } else if (submitState == submitType.UPDATE){
    //VAMOS ATUALIZAR UM USUÁRIO EXISTENTE
    updateUser(user);
    btnSub,inertext = "NEW"
  }
  // ATUALIZAR COMPONENTES HTML: TABELA E FORMULÁRIO
  viewController.update(data, new Usuario("",null,"",""))
}

//ADICIONAR NOVO USUARIO
const addUser = (newUser) =>{
  data.push(newUser); 
}
//ATUALIZAR USUARIO SELECIONADO
const updateUser = (index, userToUpdate) =>{
  data[index] = userToUpdate;
}

//DELETAR USUÁRIO SELECIONADO
const deletUser = (index) =>{
  data.splice(index,1)
}

//AÇÃO PARA BOTÃO ESQUERDO
const clickEsquerdo = (event) =>{
  const currentId = event.target.closest('tr').id.split("")[4];
  alert(`Clicou com o botão esquerdo, e o ${data[currentId].getNome().toUpperCase()} será carregado para edição`)
}
//AÇÃO PARA BOTÃO DIREITO
const clickDireito = (event) =>{
  event.preventDefault();
  if (event.button == 2) {
    const currentId = event.target.closest('tr').id.split("")[4];
    alert(`Clicou com o botão direito, e o ${data[currentId].getNome().toUpperCase()} será deletado`)
  }
}
const controller = {
  iniciar: () => {
    viewController.build();
    const form = document.getElementById('signForm');
    form.addEventListener('submit',handleSubmit);
    const userList = document.getElementById('users-result');
    //ADICIONADO ESCUTADOR PARA CLIQUE ESQUERDO DENTRO DA TABELA DE USUARIOS
    userList.addEventListener('click',clickEsquerdo)
    userList.addEventListener('contextmenu',clickDireito)
    
  },
};

export { controller };
