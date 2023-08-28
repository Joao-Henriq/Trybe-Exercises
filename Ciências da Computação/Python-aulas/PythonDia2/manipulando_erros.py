# print(10 * (1/0))

# print(4 + spam * 3)

 # Tratamento de opções usamos try e except

while True:
    try:
        x = int(input("Digite um numero inteiro: "))
        break
    except ValueError:
        # 'ValueError' é a exceção que ocorre quando a função int() recebe um
        # valor que não pode ser traduzido para número inteiro
        print("Oops, Esse nao era um numero interio tente novamente")
    

# Lidando com erros enquanto manipulamos arquivos 

try: 
    with open("arquivo.txt", "r") as file:
        print(file.read())
except FileNotFoundError:
    # será executado caso haja a exceção 'FileNotFoundError'
    print("Arquivo inexistente")
else:
    print("Arquivo manipulado e fechado com sucesso")
finally:
    # será sempre executado, independentemente de erro
    print("Fim da tentativa de ler o arquivo")