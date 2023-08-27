// sintaxe para criar um array em C# <Tipo>[] <NomeDoArray>; 

//Criando o array
int[] myFirstArray;

//instanciando array: 
//array = new tipo[tamanhoDoArray];
myFirstArray = new int[5];
 
// ou ...
int[] myFirstArray1 = new int[] {1, 2, 3, 4, 5};

int[] myFirstArray2 = {1, 2, 3, 4, 5};

string[] myFirsStringArray1 = new string[] {"Vamo", "que", "vamo", "!"};

string[] myFirsStringArray2 = {"Vamo", "que", "vamo", "!"};

int[] myArray = new int[4] {6, 9, 5, 8};
int[,] Bank;
Bank = new int[50, 4];



Console.WriteLine(Bank.Length);
