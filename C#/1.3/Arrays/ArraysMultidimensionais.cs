
class PlayingWithArrays
{
  public static void muldiDimArrays()
  { // sintaxe para criar um array multidimensional
    int[,] multiDimensionalArray1 = { {1, 2, 3}, {4, 5, 6} };

    // Arrays dentados
    // Somente instanciamos o array mais externo neste primeiro passo
    // Repare que apenas o primeiro colchetes contém números
    int[][] jaggedArray = new int[4][];

    // Agora precisamos instanciar um novo array para cada posição do array mais externo
    jaggedArray[0] = new int[4] { 6, 6, 6, 6 };
    jaggedArray[1] = new int[3] { 6, 6, 6 };
    jaggedArray[2] = new int[5] { 6, 6, 6, 6, 6 };
    jaggedArray[3] = new int[2] { 6, 6 };


    int[,,] multiDimensionalArray3 = new int[2, 3, 3];

    int[,,] multiDimensionalArray4 = { { { 1, 2 }, { 3, 4 } },{ { 5, 6 }, { 7, 8 } } };

    // O array jagged precisa ser instanciado em partes. Primeiro instanciamos o array com 3 dimensões
    int[][][] jaggedArray1 = new int[6][][];

    // Depois vamos instanciar a primeira linha do array, recebendo um novo array jagged de 2 dimensões
    jaggedArray1[0] = new int[3][];

    // E assim finalmente podemos instanciar a primeira coluna da primeira linha do array com um novo array de 1 dimensão
    jaggedArray1[0][0] = new int[4] { 1, 2, 3, 4 };
  }
}
