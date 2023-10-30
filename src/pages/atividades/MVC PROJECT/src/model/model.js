class Usuario {
    constructor(){
        this.nome = "";
        this.idade = 0;
        this.login = "";
        this.senha = "";
    }
    constructor( nome, idade, login, senha){
        this.nome = nome;
        this.idade = idade;
        this.login = login;
        this.senha = senha
    }
    
    setNome(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
    setLogin(login){
        this.login = login;
    }
    getLogin(){
        return this.login;
    }
    setSenha(senha){
        this.senha = senha;
    }
    getSenha(){
        return this.senha;
    }
}
export {Usuario}