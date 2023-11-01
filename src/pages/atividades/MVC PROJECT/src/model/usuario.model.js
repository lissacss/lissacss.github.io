class Usuario {
 constructor(){
  this.nome = "";
  this.idade = 0;
  this.login = "";
  this.senha = "";
 } 
 constructor(nome, idade, login, senha){
  this.nome = nome;
  this.idade = idade;
  this.login = login;
  this.senha = senha;
 } 
 getNome(){
  return this.nome;
 }
 setNome(nome){
  this.nome = nome;
 }
 getIdade(){
  return this.login;
 }
 setIdade(login){
  this.login = login;
 }
 getLogin(){
  return this.login;
 }
 setLogin(login){
  this.login = login;
 }
} 
export {Usuario}