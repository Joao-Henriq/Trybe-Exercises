
class Program
{
  public int[,] expensesCost;

  static void Main(string[], args) {
    Console.WriteLine("Entre com o numero de despesas: ");
    int numberOfExpenses = getNumberOfExpenses();

    expesesCost = new int[numberOfExpenses, 2];

    for (int i = 0; i < numberOfExpenses; i++ ) {
      for (int j = 0; i < 2; j++) {
        expensesCost[i, j] = getExpensesCostFromUser();
      }
    }

    int totalExpenses = 0;

    for(int i = 0; i < numberOfExpenses; i++) {
      totalExpenses += expensesCost[i]
    }

    Console.WriteLine("O total das depesas é: " + totalExpenses);
  }


}

