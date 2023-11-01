const formNewUser = {
    build:()=>{
       const root = document.getElementById('root');
       const formTemplate = document.createElement('form');
       formTemplate.className = 'form-control';
       formTemplate.setAttribute("id","signForm");
       formTemplate.innerHTML = `
        <h3 class="mt-2 mb-4"> Cadastro de novo usuário </h3>

       <label for="nome" class="form-label">Nome</label>
        <input class="form-control" type="text" id="nome">
       
       <label for="idade" class="form-label">Idade</label>
        <input class="form-control" type="number" id="idade">
       
       <label for="login" class="form-label">Login</label>
        <input class="form-control" type="text" id="login">
       
       <label for="senha" class="form-label">Senha</label>
        <input class="form-control" type="password" id="senha">

        <button type="submit" class="btn btn-primary mt-4"> Salvar </button>
       `
       root.appendChild(formTemplate);
    },
}
export {formNewUser}