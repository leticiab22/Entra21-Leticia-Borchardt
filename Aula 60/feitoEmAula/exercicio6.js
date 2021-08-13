const db = require("./db");
const format = require("pg-format");


/*6) Crie uma função insereLivros(livros) que recebe um vetor de livros:
livro = {
    isbn,
    nome_autor,
    assunto,
    preco,
    quantidade_estoque,
    id_editora
}
e insere esses livros no banco de dados.

Utilize essa função para criar 5 livros.*/

let livros = [
    {nome_autor:"Stephen King", 
    assunto:"Suspense", 
    preco:50.00, 
    quantidade_estoque:11}, 

    {nome_autor:"J.K. Rowling", 
    assunto:"Aventura", 
    preco:35.00, 
    quantidade_estoque:4},

    {nome_autor:"J.R.R. Tolkien", 
    assunto:"Aventura/Suspense", 
    preco:70.00, 
    quantidade_estoque:7}, 

    {nome_autor:"John Green", 
    assunto:"Romance", 
    preco:15.00, 
    quantidade_estoque:20}, 

    {nome_autor:"George Orwell", 
    assunto:"Ficção Científica", 
    preco:55.00, 
    quantidade_estoque:16}
];

async function insereLivros(livros){
    try{
        let dados = []
        for (let i of livros){
            let_nova_lista = [i.nome_autor,i.assunto,i.preco,i.quantidade_estoque]
            dados.push(let_nova_lista)
        }
        insereLivro = format("INSERT INTO livros (nome_autor,assunto,preco,quantidade_estoque) VALUES %L RETURNING isbn",dados);
        ins = await db.query(insereLivro);
        console.log(ins.rows[0].id)

    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}

insereLivros(livros)