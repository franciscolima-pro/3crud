import {openDb} from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoas (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}

export async function showAll(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Pessoas')
        .then(pessoas =>res.json(pessoas));
    })
}

export async function showone(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Pessoas WHERE id=?', [id])
        .then(pessoa=>res.json(pessoa));
    })
}

export async function insert(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Pessoas (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
    })
    res.json({
        "statusCode": 200
    })
}

export async function updat(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('UPDATE Pessoas SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id]);
    })
    res.json({
        "statusCode": 200
    })
}

export async function delet(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.run('DELETE FROM Pessoas WHERE id=?', [id]).then(res=>res);
    })
    res.json({
        "statusCode": 200
    })
}