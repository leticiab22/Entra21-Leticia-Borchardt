const { sequelize, Usuario } = require("./db/models");

(async () => {
    try {
        await sequelize.sync({ force: true });

        await sequelize.authenticate();
        console.log('Conexão bem-sucedida!');


        // inserindo um usuário
        const pedro = await Usuario.create({
            nome: "Pedro",
            email: 'pedro@gmail.com',
            senha: '123456'
        });
        console.log('Usuário cadastrado com sucesso!');


        // inserindo um endereço
        await pedro.createEndereco({
            rua: "Rua 01",
            numero: 123
        });
        console.log('Endereço cadastrado com sucesso!');

        // inserindo um projeto
        await pedro.createProjeto({
            nome: "projeto 1",
            quantidadeHoras: 10
        });
        console.log("Projeto criado com sucesso!")

    } catch (error) {
        console.error("erro", error);
    } finally {
        sequelize.close();
    }
})();
