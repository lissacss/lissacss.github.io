const express = require('express');
const bodyParse = require('body-parser');

const app = express();


const server = {
    on: () =>{
    app.use(bodyParse.json());
    app.listen(bodyParse.urlencoded({extended: true}))

    app.use(express.static("/"))

    const port = process.env.PORT || 7000;

    app.use(express.static());
    app.listen(port, ()=>{
        console.log(`Server running at http://localhost:1234${port}`)
    })
}
};
 export {server }