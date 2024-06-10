import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarTabela(nome, sobrenome ){
   const db = await open({
        filename: "./banco.db",
        driver: sqlite3.Database,  
    });

    db.run(`CREATE TABLE IF NOT EXISTS Usuarios (id PRIMARY KEY, nome TEXT, sobrenome TEXT)`);

    db.run('INSERT INTO Usuarios (nome, sobrenome) VALUES (?,?)', [nome, sobrenome])
}

criarTabela('Alan', 'Gabriel');