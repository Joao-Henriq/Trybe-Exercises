using System.Reflection.Metadata;

public class Program
{
    private static int valueConverted;

    public static void Main()
    {
        long someLongNumber = 516144066604654;
        // int intNumber = someLongNumber; sem casting gera erro  error CS0266: Não é possível converter implicitamente tipo "long" em "int".
        int intNumber = (int) someLongNumber; // com casting não gera erro caso senha possível converter 666775150

        // int otherIntNumberCasting = Convert.ToInt32(someLongNumber); // esse casting ainda gera erro

        Console.WriteLine(intNumber);

        string someString = "42";
        int stringToNumber = Convert.ToInt32(someString);
        Console.WriteLine(stringToNumber); // 42 
        string? userEntry = Console.ReadLine();
        bool canConvert = Int32.TryParse(userEntry, out valueConverted);
        Console.WriteLine(canConvert);
    }
}