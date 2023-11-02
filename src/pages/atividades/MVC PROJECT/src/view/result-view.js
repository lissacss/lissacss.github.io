const resultView = {
  build: () => {
    const root = document.getElementById("root");
    const tableResult = document.createElement("table");
    tableResult.setAttribute("id", "resultTable");
    tableResult.className = "table table-borderless table-hover";
    tableResult.innerHTML = `
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Idade</th>
              <th scope="col">Login</th>
              <th scope="col">Senha</th>
            </tr>
        </thead>
        <tbody id="users-result">
       
        </tbody>
    `;
    root.appendChild(tableResult);
  },
  update: (params) => {
    const tRBody = document.getElementById("users-result");
    tRBody.innerHTML = ``;
    for (let i = 0; i < params.length; i++) {
      const newLine = document.createElement("tr")
      newLine.innerHTML = `
        <th scope="row">#${i+1}</th>            
        <td class="text-success"><strong>${params[i].getNome()}</strong></td>            
        <td><strong>${params[i].getIdade()}</strong></td>            
        <td class="text-primary fst-italic"><strong>${params[i].getLogin()}</strong></td>            
        <td><input value="${params[i].getSenha()}" disabled type="password"></input></td>            
      `
      tRBody.appendChild(newLine)
    }
  },
};
export { resultView };
