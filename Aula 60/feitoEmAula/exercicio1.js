const format = require("pg-format");
const db = require("./db");

/*
1) Crie e exporte a conexão com o banco de dados "livraria" através do arquivo db/index.js.
Você deve obter as informações de conexão através de um arquivo .env.
Essa conexão será utilizada nos próximos exercícios. 
*/


(async () => {
    try{
        const res = await db.query("SELECT NOW()")
        console.log(res.rows)
    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
})();
