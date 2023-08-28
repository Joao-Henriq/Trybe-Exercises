characters_file = open("meu-personagens-favoritos.txt", mode='w') # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.

characters_file.write('Tio patinhas\n')
characters_file.write('Neo\n')
characters_file.write('Homem Aranha\n')

print('Batman', file=characters_file)

more_characters = ['Sandman\n', 'Ash\n']

characters_file.writelines(more_characters)

characters_file.close()
