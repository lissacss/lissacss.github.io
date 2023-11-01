import { viewController } from "./view/viewController.js";
import { Usuario } from "./model/usuario.model.js";

let data = [];

const saveData = (event) => {
  event.preventDefault();
  const newData = new Usuario(
    nome.value,
    idade.value,
    login.value,
    senha.value
  );
  data.push(newData);

  viewController.update(data, new Usuario("",0,"",""));
};

const controller = {
  iniciar: () => {
    viewController.build();
    const form = document.getElementById("signForm");
    form.addEventListener("submit", saveData);
  },
};

export { controller };
