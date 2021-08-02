// 1)
const { EOL } = require("os");
const os = require("os");
const fsPromises = require("fs/promises");
const path = require("path");

setInterval(async () => {
    const freeMemory = parseInt(os.freemem() / 1024 / 1024),
          totalMemory = parseInt(os.totalmem() / 1024 / 1024),
          usage = parseInt((freeMemory * 100) / totalMemory);
    
    const content = {
        freeMemory: `${freeMemory} MB`,
        totalMemory: `${totalMemory} MB`,
        usage: `${usage} %`
    }

    const contentInJSON = JSON.stringify(content) + EOL;

    try {
        await fsPromises.appendFile(path.resolve(__dirname, "log.txt"), contentInJSON);
        console.log("Log adicionado");
    } catch(err) {
        console.log(err.message);
    }
}, 5000);

//--------------------------------------------------------------------------------
// 2) nomes

const path = require("path");
const fsPromises = require("fs/promises");
const { EOL } = require("os");
(async () => {
    try {   
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        const nomes = data.toString("utf-8").split(EOL);
        const nomesComA = nomes.filter(nome => nome[0].toUpperCase() === "A");
        console.log(nomesComA);
    } catch (err) {
        console.log(err.message);
    }
})();

//-------------------------------------------------------------------------------
// 3) usersbyname

const fsPromises = require("fs/promises");
const path = require("path");

async function getUserByName(name) {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "users.json"));
        const users = JSON.parse(data.toString("utf-8"));
        
        const user = users.find(user => user.nome === name);

        return user
    } catch (err) {
        console.log(err.message);
    }
}

(async () => {
    const user = await getUserByName("Pedr");

    if (user) {
        console.log(`Usuário encontrado:\nnome: ${user.nome}\nidade: ${user.idade}\nemail: ${user.email}`);
    } else {
        console.log("Usuário não foi encontrado!");
    }
})();

//-------------------------------------------------------------------------------
// 4)

const path = require("path");
const fsPromises = require("fs/promises");
const { EOL } = require("os");
const chalk = require("chalk");

(async () => {
    try {   
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        const nomes = data.toString("utf-8").split(EOL);

        for (let nome of nomes) {
            switch (nome[0].toUpperCase()) {
                case "A":
                    console.log(chalk.red(nome));
                    break;
                case "C":
                    console.log(chalk.blue(nome));
                    break;
                case "D":
                    console.log(chalk.magenta(nome));
                    break;
                default:
                    console.log(nome);
            }
        }
        // const nomesComA = nomes.filter(nome => nome[0].toUpperCase() === "A");
        // const nomesComC = nomes.filter(nome => nome[0].toUpperCase() === "C");
        // const nomesComD = nomes.filter(nome => nome[0].toUpperCase() === "D");

        // nomesComA.forEach(nome => console.log(chalk.red(nome)));
        // nomesComC.forEach(nome => console.log(chalk.blue(nome)));
        // nomesComD.forEach(nome => console.log(chalk.magenta(nome)));
    } catch (err) {
        console.log(err.message);
    }
})();

//-------------------------------------------------------------------------------
// 5)

const fsPromises = require("fs/promises");
const fs = require("fs");
const path = require("path");

async function obterArquivos(folderPath) {
    try {
        const data = await fsPromises.readdir(folderPath);
        
        const files = data.filter(file => fs.statSync(path.resolve(folderPath, file)).isFile());

        console.log(files);
    } catch (err) {
        console.log(err);
    }
}

obterArquivos(__dirname);

//-------------------------------------------------------------------------------
// 6)

const fsPromises = require("fs/promises");
const path = require("path");

async function moveFiles(oldFolderPath, newFolderPath) {                    
    try {
        const files = await fsPromises.readdir(oldFolderPath);
        
        // Criando a pasta se ela não existir
        await fsPromises.mkdir(newFolderPath, { recursive: true }); 

        // Movendo os arquivos
        for (file of files) {
            await fsPromises.rename(path.resolve(oldFolderPath, file), path.resolve(newFolderPath, file));
            console.log(`O arquivo ${file} foi movido`);
        }         
    } catch (err) {
        console.log(err.message);
    } 
}

const oldFolderPath = "C:\\Users\\william.cirico\\Desktop\\projetoPesado",
      newFolderPath = "C:\\Users\\william.cirico\\Desktop\\novaPasta";

moveFiles(newFolderPath, oldFolderPath);

//-------------------------------------------------------------------------------
// 7)


const fsPromises = require("fs/promises");
const path = require("path");

async function moveEspecificFiles(oldFolderPath, newFolderPath, extension) {            
    // Criando a pasta se ela não existir
    try {
        const files = await fsPromises.readdir(oldFolderPath);
        
        await fsPromises.mkdir(newFolderPath, { recursive: true });  

        // Filtrando os arquivos com a mesma extensão    
        const especificFiles = files.filter(file => path.extname(path.resolve(oldFolderPath, file)) === extension);    
        // Movendo os arquivos
        for (file of especificFiles) {
            await fsPromises.rename(path.resolve(oldFolderPath, file), path.resolve(newFolderPath, file));
            console.log(`O arquivo ${file} foi movido`);
        }
    } catch (err) {
        console.log(err.message);
    } 
}

const oldFolderPath = "C:\\Users\\william.cirico\\Desktop\\projetoPesado",
      newFolderPath = "C:\\Users\\william.cirico\\Desktop\\novaPasta";

moveEspecificFiles(oldFolderPath, newFolderPath, ".txt");



 



