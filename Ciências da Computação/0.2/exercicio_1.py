name = input('Insira um nome \n')
n = len(name)
for i in range(n, 0, -1):
    print(name[:i])