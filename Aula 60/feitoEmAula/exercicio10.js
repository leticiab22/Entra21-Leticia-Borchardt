const db = require("./db");
const format = require("pg-format");

/* 
10) Crie uma função livrosPorEditora(id_editora) que retorna todos os livros 
fornecidos por uma editora.
*/

async function livrosPorEditora(id_editora) {
    try {
        const { rows } = await db.query("SELECT * FROM livros WHERE id_editora = $1;", [id_editora]);

        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        db.end();
    }    
}

const id_editora = "87487156-1943-4bb1-863e-ac67f6ba7504";

livrosPorEditora(id_editora)
    .then(result => console.log(result));