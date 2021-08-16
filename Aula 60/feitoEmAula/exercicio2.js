const db = require("./db");
const format = require("pg-format");

/*
2) Faça um script que crie as seguintes tabelas no banco de dados:

clientes(id, nome, email, telefone, numero_documento, tipo_pessoa, pontos)
enderecos(id, rua, numero, cidade, estado, cep, id_cliente)
livros(isbn, nome_autor, assunto, quantidade_estoque, preco, id_editora)
compras(id_cliente, id_livro, data, valor)
editoras(id, nome_gerente, telefone)

Os identificadores devem ser do tipo UUID 
*/

(async () => {
    try {
        await db.query(`
    CREATE TABLE IF NOT EXISTS clientes (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        nome text NOT NULL,
        email text NOT NULL UNIQUE,
        telefone text NOT NULL UNIQUE,
        numero_documento text NOT NULL UNIQUE,
        tipo_pessoa text NOT NULL,
        pontos integer 
    );

    CREATE TABLE IF NOT EXISTS enderecos (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        rua text NOT NULL,
        numero integer NOT NULL,
        cidade text NOT NULL,
        estado text NOT NULL,
        cep text NOT NULL,
        id_cliente uuid NOT NULL REFERENCES clientes
    );

     CREATE TABLE IF NOT EXISTS editoras (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        nome_gerente text NOT NULL,
        telefone text NOT NULL
    );

    CREATE TABLE IF NOT EXISTS livros (
        isbn UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        nome_autor text NOT NULL,
        assunto text NOT NULL,
        quantidade_estoque integer NOT NULL,
        preco numeric NOT NULL CHECK (preco > 0),
        id_editora uuid NOT NULL REFERENCES editoras
    );

    CREATE TABLE IF NOT EXISTS compras (
        id_cliente uuid NOT NULL REFERENCES clientes,
        id_livro uuid NOT NULL REFERENCES livros,
        data timestamp DEFAULT NOW(),
        valor numeric NOT NULL,
        PRIMARY KEY (id_cliente, id_livro, data)
    );`);
    
        console.log("Tabelas criadas com sucesso!");
    } catch (error) {
        console.log(error.message);
    } finally {
        db.end();
    }
})();

