const db = require("./db");
const format = require("pg-format");

/*
11) Crie uma função obtemComprasPorData(data) que retorna todas as compras 
efetuadas na data informada. */


async function obtemComprasPorData(data) {
    try {
        const { rows } = await db.query("SELECT * FROM compras WHERE DATE(data) = $1", [data]); 

        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        db.end();
    }
}

const data = "2021-08-16";
obtemComprasPorData(data)
    .then(result => console.log(result));