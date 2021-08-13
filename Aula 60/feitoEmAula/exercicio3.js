const db = require("./db");
const format = require("pg-format");



let cliente = {nome:"Anna Júlia",email:"ana@email.com",telefone:"(47) 9 3333-2222",numero_documento:"123.456.789-10",tipo_pessoa:"PF",rua:"Ruazinha",numero:123,cidade:"Indaial",estado:"SC",cep:"1234"};

async function insereCliente(cliente){
    try{
        let dados_cliente = [[cliente.nome,cliente.email,cliente.telefone,cliente.numero_documento,cliente.tipo_pessoa]];
        querc = format("INSERT INTO clientes (nome,email,telefone,numero_documento,tipo_pessoa) VALUES %L RETURNING id",dados_cliente);
        insere = await db.query(querc);
        let dados_endereco = [[cliente.rua,cliente.numero,cliente.cidade,cliente.estado,cliente.cep,insere.rows[0].id]];
        console.log(dados_endereco);
        quere = format("INSERT INTO enderecos (rua,numero,cidade,estado,cep,id_cliente) VALUES %L RETURNING *",dados_endereco);
        insere2 = await db.query(quere);
    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}


async function mostraCliente(){
    try{
        const {rows} = await db.query('SELECT * FROM enderecos')
        console.log(rows)
    }
    catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}


async function deletarTodos(){
    try{
        await db.query('DELETE FROM clientes')
    }
    catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}

insereCliente(cliente)
