def how_many_numbers_are_par(numbers: list[int]):
    for number in numbers:
        if(number % 2 == 0):
            print(f'{number} é par\n')
        else:
            print(f'{number} não é par')

how_many_numbers_are_par([1,2,3,4,5,6])

def conta_pares(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + conta_pares(n-1)
    else:
        return conta_pares(n-1)
    
def highest_integer_number(numbers: list[int]):
    if len(numbers) <= 1:
        return numbers
    elif numbers[-1:0:-1] < numbers[]