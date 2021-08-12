const db = require("./db");
const format = require("pg-format");

/*Crie uma função insereCliente(cliente) que recebe o objeto cliente:
{
    nome,
    email,
    telefone,
    numero_documento,
    tipo_pessoa,
    rua,
    numero,
    cidade,
    estado,
    cep
}

E insere esse objeto como um registro no banco de dados. 
(Deve inserir o registro na tabela clientes e na tabela enderecos).

Utilize essa função para criar 1 cliente.
*/

async function insereCliente(cliente) {
    try {
        const res = await pool.query(`
        INSERT INTO
        clientes (nome, email, telefone, numero_documento, tipo_pessoa)
        VALUES
        ($1, $2, $3, $4, $5)
        RETURNING *;`,
        ["Maria Clara", "mariaclara@email.com", "(47) 9 9999-9999", "111.222.333-44", "PF"]);
        console.log(res.rows[0]);
        } catch (error) {
        console.log(error.message);
        } finally {
         pool.end();
        }
    

        // try {
        //     const funcionarios = [
        //         ["joão", "joão@email.com", "(47) 9 8888-8888"],
        //         ["maria", "maria@email.com", "(47) 9 7777-7777"]
        //     ];
    
        //     const query = format("INSERT INTO funcionarios (nome, email, telefone) VALUES %L RETURNING *", funcionarios);
    
        //     const res = await pool.query(query);
    
        //     console.log(res.rows);
        // } catch (error) {
        //     console.log(error.message);
        // } finally {
        //     pool.end();
        // }
}