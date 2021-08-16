const db = require("./db");
const format = require("pg-format");

/*7) Crie uma função obtemLivros(livros) que recebe como parâmetro um vetor com
identificadores de livros. Essa função deve retornar um vetor com todos os 
livros presentes no parâmetro.*/


async function obtemLivros(livros) {
    try {
        const { rows } = await db.query(format(`
            SELECT * FROM livros WHERE isbn IN (%L);
        `, livros));

        return rows;
    } catch (error) {
        console.log(error.message);
    } finally {
        db.end();
    }
}

const livros = ["29e81aae-7c62-4ab7-ab64-edf293f8d68f", "6a417f41-844a-4cad-9771-875186c583d9", 
"9013ad92-4e9f-4e8a-9d1c-0e006b3c5899", "ca0b4b1a-6a04-41bf-8c46-ee66e53b482f", "e24155c7-9321-4f3d-9945-6044185772d1"];

obtemLivros(livros)
    .then(result => console.log(result));

module.exports = obtemLivros;