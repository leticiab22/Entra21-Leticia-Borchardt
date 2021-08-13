const db = require("./db");
const format = require("pg-format");

/*Crie uma função insereEditoras(editoras) que recebe um vetor de editoras:
editora = {
    nome_gerente,
    telefone
}
e insere essas editoras no banco de dados.

Utilize essa função para criar 5 editoras.*/

let editoras = [{nome_gerente:"Paulo", telefone:"(47)98888-9999"}, 
                {nome_gerente:"Juliana Reis", telefone:"(55)70000-0000"},
                {nome_gerente:"João Pedro", telefone:"(48)56666-6666"}, 
                {nome_gerente:"Mariah", telefone:"(47)92288-0000"}, 
                {nome_gerente:"Antônia", telefone:"(00)10101-0101"}];

async function insereEditoras(editoras){
    try{
        let dados = []
        for (let i of editoras){
            let_nova_lista = [i.nome_gerente,i.telefone]
            dados.push(let_nova_lista)
        }
        insereEditora = format("INSERT INTO editoras (nome_gerente,telefone) VALUES %L RETURNING id",dados);
        ins = await db.query(insereEditora);
        console.log(ins.rows[0].id)

    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}

insereEditoras(editoras)