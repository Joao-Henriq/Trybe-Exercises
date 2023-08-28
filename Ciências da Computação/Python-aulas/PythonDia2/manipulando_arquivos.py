with open("arquivo.txt", "w") as file:
    file.write("nome idade\n")

    file.write("Maria 45\n")
    file.write("Miguel 33\n")
    more_persons = ['João 21\n', 'Pedro 33\n', 'Thiago 4\n']
    file.writelines(more_persons)

with open("arquivo.txt", "r") as file: 
    content = file.read()
    print(content)

with open("arquivo.txt", "w") as file:
    msg_array = ["Olá \n", "mundo\n", "belo\n", "do\n", "python\n"]
    file.writelines(msg_array)

with open("arquivo.txt", "r") as file:
    # content = file.read()
    # print(content)
    for line in file:
        print(line)
