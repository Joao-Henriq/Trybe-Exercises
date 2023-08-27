class TV:
    def __init__(self, volume = 50, canal = 1, tamanho = None, ligada = False) -> None:
        self.__volume = volume
        self.__canal = canal
        self.__tamanho = tamanho
        self.__ligada = ligada
      
    def aumentar_volume():
        if (__volume == 99):
            raise ValueError('Não é possível aumentar mais o volume')
        __volume += 1
    
    def diminuir_volume():
        if (__volume == 0):
            raise ValueError('Não é possível diminuir mais o volume')
        __volume -= 1
    
    def modificar_canal(canal_value):
        if canal_value < 1 or canal_value > 99:
            raise ValueError(f'Não é possível ir para o canal {canal_value}, somente entre 1 e 99')
        __canal = canal_value
    
    def ligar_desligar():
        if __ligado:
            __ligado = False
        else:
            __ligado = True
