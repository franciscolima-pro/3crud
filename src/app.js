//import {openDb} from "./configDB.js";
//import { createTable, insert, showAll, showone, updat, delet } from "./controller/pessoa.js";

import express from 'express';
const app = express();
app.use(express.json()); //para definir o body e  eu poder receber apenas ele da requisição

import router from './routes.js';
app.use(router);

//openDb(); //Executando o banco de dados


// app.get("/pessoas", async function(req, res){ //mostrar todas os cadastros
//     let all = await showAll();
//     res.json(all)
// })

// app.get("/pessoa", async function(req, res){ //mostra um cadastro 
//     let one = await showone(req.body.id);
//     res.json(one)
// })

// app.post("/pessoa", function(req, res){ //Adiciona dados 
//     //console.log(req.body); //Preciso que retorne apenas o body da requisição
//     insert(req.body);
//     res.json({
//         "statusCode": 200,
//         "msg":"Worked!"
//     })
// })

// app.put("/pessoa", function(req, res){ //Atualiza dados
//     //console.log(req.body); //Preciso que retorne apenas o body da requisição
//     if(req.body && !req.body.id){
//         res.json({ //response in json
//             "statusCode": 400,
//             "msg":"Informe um ID"
//         })
//     }else{
//         updat(req.body);
//         res.json({
//             "status code": 200,
//             "msg":"Worked!"
//         })
//     }
// })

// app.delete("/pessoa", async function(req, res){ //Deleta dados 
//     let one = await delet(req.body.id);
//     res.json(one)
// })

app.listen(3000, ()=> console.log("API Working!")) //o que indica se o app está funcionando