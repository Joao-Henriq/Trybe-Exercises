from abc import ABC, abstractmethod
import math 
pi = math.pi

class FiguraGeometrica:
    @abstractmethod
    def perimetro():
        ...
    @abstractmethod
    def area():
        ...
    
class Quadradro(FiguraGeometrica):
    def __init__(self, lado) -> None:
        super().__init__()
        self.lado = lado

    def area(self):
        if self.lado <= 0:
            raise ValueError('O valor não pode ser menor ou igual a 0')
        return self.lado**2
    
    def perimetro(self):
        if self.lado <= 0:
            raise ValueError('O valor não pode ser menor ou igual a 0')
        return self.lado*4

class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura) -> None:
        super().__init__()
        self.base = base
        self.altura = altura

    def area(self):
        if self.base <= 0 or self.altura <= 0:
            raise ValueError('O valor não pode ser menor ou igual a 0')
        return (self.base * self.altura)
    
    def perimetro(self):
        if self.base <= 0 or self.altura <= 0:
            raise ValueError('O valor não pode ser menor ou igual a 0')
        
        return 2* (self.base + self.altura)

class Circulo(FiguraGeometrica):
    def __init__(self, raio) -> None:
        super().__init__()
        self.raio = raio

    def area(self):
        if self.raio <= 0:
            raise ValueError('O valor não pode ser menor ou igual a 0')
        return pi * (self.raio**2)

    def perimetro(self):
        if self.raio <= 0:
            raise ValueError('O valor não pode ser menor ou igual a 0')
        
        return 2*pi*self.raio
