const resultView = {
    render :()=>{
        const root = document.getElementById ('root');
        const tableresult = document.createElement ("table");
        tableresult.setAttribute("id", "resultTable");
        tableresult.className = "table table-borderless";
        tableresult.innerHTML = `
        <thead>
        <tr>
        <th = scope="col">#</th>
        <th = scope="col">Nome</th>
        <th = scope="col">Idade</th>
        <th = scope="col">Login</th>
        <th = scope="col">Senha</th>
        </tr>
        </thead>
        <tbody id="user-resul"></tbody>
        `;
        root.appendChild(tableresult);
    }
// update : (paramss)
}
export {resultView}