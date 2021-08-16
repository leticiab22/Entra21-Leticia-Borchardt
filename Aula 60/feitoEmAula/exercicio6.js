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
    quantidade_estoque:11,
    id_editora:"05b40f6d-5de3-4dd4-9a4c-77b0e93dbf62"}, 

    {nome_autor:"J.K. Rowling", 
    assunto:"Aventura", 
    preco:35.00, 
    quantidade_estoque:4,
    id_editora:"87487156-1943-4bb1-863e-ac67f6ba7504"},

    {nome_autor:"J.R.R. Tolkien", 
    assunto:"Aventura/Suspense", 
    preco:70.00, 
    quantidade_estoque:7,
    id_editora:"8944e8de-e440-4a2b-9880-2adc6685b6f3"}, 

    {nome_autor:"John Green", 
    assunto:"Romance", 
    preco:15.00, 
    quantidade_estoque:20,
    id_editora:"8a1baa6b-e6a2-4c4f-a3c7-3c13cf0a1542"}, 

    {nome_autor:"George Orwell", 
    assunto:"Ficção Científica", 
    preco:55.00, 
    quantidade_estoque:16,
    id_editora:"c9c786c4-9c29-416d-b524-2dc8cc480a3e"}
];

async function insereLivros(livros){
    try{
        let dados = []
        for (let i of livros){
            let_nova_lista = [i.nome_autor,i.assunto,i.preco,i.quantidade_estoque, i.id_editora]
            dados.push(let_nova_lista)
        }
        insereLivro = format("INSERT INTO livros (nome_autor,assunto,preco,quantidade_estoque,id_editora) VALUES %L RETURNING isbn",dados);
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