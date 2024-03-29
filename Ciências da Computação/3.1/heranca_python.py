class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):

        self.__cor = nova_cor

class Liquidificador(Eletrodomestico):
    def esta_ligado(self):
        return "sim" if super.esta_ligado() else "não"

class Secador(Eletrodomestico):
    pass
class Maquina_de_lavar(Eletrodomestico):
    pass

novo_secador = Secador("Preto", 10, 10, 100)
nova_maquina_de_lavar = Maquina_de_lavar("branca", 100, 100, 1000)

print(f'o preço do secador é {novo_secador.preco}')
print('o preço da máquina de lavar é ', nova_maquina_de_lavar.preco)

