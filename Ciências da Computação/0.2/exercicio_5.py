def divisible_by_3(number):
  if number % 3 == 0:
     return 'Fizz'
  return number

def divisible_by_5(number):
    if number % 5 == 0:
     return 'Buzz'
    return number

def divisible_by_3_and_5(number):
    if (number % 3 and number % 5) == 0:
     print('FizzBuzz')
     return 'FizzBuzz'
    print(number)
    return number

divisible_by_3_and_5(4)

# Solução da trybe

# def fizzbuzz(n):
#     numbers = []
#     for number in range(1, n + 1):
#         if number % 15 == 0:
#             numbers.append("FizzBuzz")
#         elif number % 3 == 0:
#             numbers.append("Fizz")
#         elif number % 5 == 0:
#             numbers.append("Buzz")
#         else:
#             numbers.append(number)
#     return numbers