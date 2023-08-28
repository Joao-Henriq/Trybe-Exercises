import pytest

from code_for_tests import is_odd, divide

def test_is_odd_when_number_is_odd_returns_true():
    'Para um numero impar a funcao deve reotrnar o valor True'
    assert is_odd(3) is True

def test_is_odd_when_number_is_even_returns_false():
    'Para um numero impar a funcao deve reotrnar o valor True'
    assert is_odd(2) is False

def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)

