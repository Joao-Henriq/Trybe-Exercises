import random

numero_de_tentativas = 3

word = random.choice(["trigo", "tigres", "tristes"])

scrambled_word = "".join(random.sample(word, len(word)))

while numero_de_tentativas > 0:
    letra_digitada = input('Digite somente uma letra')
    if len(letra_digitada) > 1:
        print('Infelizmente você tentou burlar as regras do jogo, reinicie para jogar novamente')
        break
    if  not scrambled_word.__contains__(letra_digitada):
        numero_de_tentativas -= 1
        if numero_de_tentativas == 0:
            print(f"Você perdeu a palavra correta era: {scrambled_word}")
        print(f"Você errou e tem somente {numero_de_tentativas} tentativas.")
    
    if  scrambled_word.__contains__(letra_digitada):
        print("Você acertou a letra \n")
