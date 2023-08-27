
internal class Program
{
    private static void Main(string[] args)
    {
      string textOne = "Você está aprendendo sobre ";
      string textTwo = "Strings em C#, ";
      string textThree = "e agora sabe concatenar textos utilizando a função Concat()!";

      string concatResult = string.Concat(textOne, textTwo, textThree);
      Console.WriteLine(concatResult);

      string emails = "email1@trybe.com;email2@trybe.com;email3@trybe.com";

      string[] arrayEmails = emails.Split(";");

      foreach (string email in arrayEmails)
      {
        Console.WriteLine(email);
      };

      string trybe = "Trybe";
      int index = trybe.IndexOf("s");
      Console.WriteLine(index);

      string trybe2 = "I love Trybe";
      int index2 = trybe2.IndexOf("e", 6);
      //int index3  = trybe2.IndexOf("e", 13);
      Console.WriteLine(index2);
      //Console.WriteLine(index3);

      List<string> languages = new List<string>
      {
        "c#",
        "java",
        "javascript",
        "python"
      };

      string languageSearch = "c#";

      bool languageExists = languages.Contains(languageSearch);
      if (languageExists)
      {
          Console.WriteLine("Essa linguagem existe no sistema");
      }
      else
      {
          Console.WriteLine("Essa linguagem não existe no sistema");      }
      IEnumerable<int> listNumbers = Enumerable.Range(1, 10);      string numbersText = string.Join(',', listNumbers);
      // interpolação de strings 
      string name = "joão henrique";
      string apresentacao = $"Olá meu nome é {name} e eu estou aprendendo C#";
      Console.WriteLine(apresentacao);
      
      // definindo uma data
      var data = new DateTime(2023, 8, 20, 22, 49, 0);
      Console.WriteLine(data.ToString());

      /*
      DateTime.Now
      Essa propriedade obtém e retorna uma instância da classe DateTime com os campos configurados para o momento de tempo exato em que a propriedade foi chamada, e expressa como a hora local
      */
      var dataType = DateTime.Now;
      Console.WriteLine(dataType.GetType());

      // public string getTimeNow()
      // {
      //     return "O momento de tempo atual é " +DateTime.Now;
      // }

      var date = new DateTime(2022, 10, 2, 8, 35, 0);
      var dateOnly = date.Date;
      Console.WriteLine(dateOnly.ToString());
      
      var dayOnly = date.Day;
      Console.WriteLine(dayOnly.ToString());

      var yearOnly = date.Year;
      Console.WriteLine(yearOnly.ToString());

      /*Para não repetir: De forma similar, temos as propriedades .Hour, .Minute, .Second, .Millisecond e .DayOfWeek, que retornam os componentes de Hora, Minuto, Segundo, Milissegundo e Dia da semana, respectivamente. */

      var today = DateTime.Now;
      var duration = new TimeSpan(36, 0, 0, 0);
      var answer = today.Add(duration);

      System.Console.WriteLine("Hoje é " +today.Day +"/" +today.Month +" - " +today.DayOfWeek);
      System.Console.WriteLine("Daqui a 36 dias será "+answer.Day +"/" +answer.Month +" - " +answer.DayOfWeek);

      //Vale lembrar que o TimeSpan adicionado pode ser negativo para calcular dias antecedentes a uma data:
      /*
        Pergunta🧐: E se eu quiser adicionar especificamente e de forma mais legível uma quantidade de anos, meses, dias, horas, minutos, segundos ou até mesmo milissegundos?

        Resposta🤩: A DateTime possui diversas métodos Add para valores específicos. Olha só:

        .AddYears(int value): Adiciona uma quantidade de anos a uma data.
        .AddMonths(int value): Adiciona uma quantidade de meses a uma data.
        .AddDays(double value): Adiciona uma quantidade de dias a uma data.
        .AddHours(double value): Adiciona uma quantidade de horas a uma data.
        .AddMinutes(double value): Adiciona uma quantidade de minutos a uma data.
        .AddSeconds(double value): Adiciona uma quantidade de segundos a uma data.
        .AddMilliseconds(double value): Adiciona uma quantidade de milissegundos a uma data.
      */
      DateTime date1 = new DateTime(2010, 9, 1, 5, 0, 0);
      DateTime date2 = new DateTime(2022, 8, 10, 12, 0, 0);
      int result = DateTime.Compare(date1, date2);
      string relationship;
      if (result < 0) relationship = "é anterior à";
      else if (result == 0) relationship = "é o mesmo que";
      else relationship = "é posterior à";
      Console.WriteLine("{0} {1} {2}", date1, relationship, date2);
      int i = 0;
    }
}