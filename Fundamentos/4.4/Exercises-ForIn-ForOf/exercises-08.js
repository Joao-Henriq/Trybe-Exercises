let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};
leitor.livrosFavoritos[1] = {}
for (let i in leitor.livrosFavoritos){
    if (i > 1) break
    if(leitor.livrosFavoritos){
        leitor.livrosFavoritos[1].titulo = 'Harry Potter e o Prisioneiro de Azkaban',
        leitor.livrosFavoritos[1].autor = 'JK Rowling',
        leitor.livrosFavoritos[1].editora = 'Rocco';
    }
}

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);