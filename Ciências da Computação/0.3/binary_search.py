# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while start <= end: # os índices podem ser no máximo iguais, o início não pode ultrapassar o fim
        mid = (start + end) // 2 # encontro o meio

        if numbers[mid] == target: # se o elemento do meio for o alvo, devolve a posição do meio
            return mid
        
        if target < numbers[mid]: # se o elemento for menor, atualiza o índice do fim
            end = mid - 1
        else: # caso contrário, atualiza o índice do inicio
            start = mid + 1
    
    return -1 # Não encontrou? Retorna -1

numbers = [2, 3, 4, 10, 40, 100, 33, 645, 2, 3, 0, 9]
numbers_2 = [223, 123, 423, 110, 3, 1010, 334, 64, 11, 1, 4, 93]
target = 3

result = binary_search(numbers, target)
result_2 = binary_search(numbers_2, target)
print(f"Elemento encontrado na posição: {result}")
print(f"Elemento encontrado na posição: {result_2}")