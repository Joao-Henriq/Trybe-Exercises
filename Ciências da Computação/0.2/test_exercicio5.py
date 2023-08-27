from exercicio_5 import divisible_by_3, divisible_by_5, divisible_by_3_and_5

def test_is_number_divisible_by_3():
    'Se o numero for divisível por 3 retorna Fizz'
    assert divisible_by_3(3) == 'Fizz'

def test_is_number_divisible_by_5():
    'Se o numero for divisível por 5 retorna Buzz'
    assert divisible_by_5(5) == 'Buzz'



def test_is_number_divisible_by_3_and_5():
    'Se o numero for divisível por 3 e por 5 retorna FizzBuzz'
    assert divisible_by_3_and_5(15) == 'FizzBuzz'

# Solução da trybe

# def test_fizzbuzz_should_return_list_of_numbers():
#     assert fizzbuzz(2) == [1, 2]


# def test_fizzbuzz_divisible_by_three_should_be_fizz():
#     assert fizzbuzz(3)[-1] == "Fizz"


# def test_fizzbuzz_divisible_by_five_should_be_buzz():
#     assert fizzbuzz(5)[-1] == "Buzz"


# def test_fizzbuzz_divisible_by_five_and_three_should_be_fizzbuzz():
#     assert fizzbuzz(15)[-1] == "FizzBuzz"
