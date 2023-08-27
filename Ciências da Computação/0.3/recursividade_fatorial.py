
def soma_recursiva(n):
    if n == 0:
        return 0
    else:
        # print(n)
        return n + soma_recursiva(n-1)

soma_recursiva(4)

def fatorial(n):
    if n <= 1:
        # print('cheguei no n<=1')
        return 1
    else:
        # print(n)
        fat = n * fatorial(n-1)
        # print(fat)
        return fat
    
fatorial(7)

def countdown_recursive(n):
    if n == 0:
        # print("fim da contagem")
        return 0
    else:
        # print(n)
        return n - countdown_recursive(n-1)

countdown_recursive(4)

def coutdown_iterative(n):
    while n > 0:
        # print(n)
        n = n-1

    print('fim')

# coutdown_iterative(5)    

def iterative_factorial(n):
    fact = 1

    for i in range(1, n + 1):
        fact = fact * i

    print(fact)
    return fact

# iterative_factorial(5)

def fibonacci(num):  # nome da função e parâmetro
    if (num <= 1):  # condição de parada
        return num
    else:
        return fibonacci(num - 2) + fibonacci(num - 1)  # chamada de si mesma com um novo valor
