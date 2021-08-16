const { DataTypes, Sequelize} = require("sequelize")
const { hashSync, compare, compareSync } = require("bcrypt")
const sequelize = require("../database");

const Usuario = sequelize.define("Usuario", {
    id: {
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV4
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue("senha", hashSync(value, 10))
        }
    }
});
// }, {
//     tableName: "usuarios",
//     underscored: true
// });

(async () => {
    
    try {
        // Criando a tabela Usuarios
        await Usuario.sync({ force: true });
        console.log('Tabela criada com sucesso!');

        // Inserindo um usuário
        const pedro = await Usuario.create({
            nome: "Pedro",
            email: "pedro@gmail.com",
            senha: "123456"
        })
        console.log("Usuário criado com sucesso!");
        console.log(pedro.toJSON())

        // Modificar o pedro
        pedro.email = "pedrao@email.com"
        await pedro.save()
        console.log("Email do pedro foi atualizado");

        // Remover o pedro
        await pedro.destroy()
        console.log("Pedro foi removido com sucesso!");

        // Inserindo vários usuários 
        const usuarios = await Usuario.bulkCreate([
            {
                nome: "Pedro",
                email: "pedro@gmail.com",
                senha: "123456"
            },
            {
                nome: "José",
                email: "jose@email.com",
                senha: "123456"
            }
        ])
        console.log("Usuários inseridos com sucesso!");
        usuarios.forEach(usuario => console.log(usuario.toJSON()))

        // Comparando a senha
        console.log(compareSync("12346", usuarios[0].toJSON().senha))
    } catch (err) {
        console.log('Ocorreu algum erro ao criar a tabela', err);
    } finally {
        sequelize.close()
    }
})();