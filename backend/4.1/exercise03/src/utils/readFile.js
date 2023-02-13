const fs = require('fs').promises;
const path = require('path');

const readFile = async () => {
  try {
    const myPath = path.resolve(__dirname, '../movie.json');
    const readArchive = await fs.readFile(myPath, 'utf-8');
    const movie = await JSON.parse(readArchive);
    return movie;
  } catch (error) {
    console.error(`Erro ao ler o arquivo}`);
  }
  
};
readFile();
module.exports = readFile;
