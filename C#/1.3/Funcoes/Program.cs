// estrutura para criar uma função em C#
// tipo do acesso + tipo do retorno + nome + parametros? + { instruções dentro do bloco }
using System;
namespace FunctionsNameSpace
{
  class Functions {
  public double CalculateBMI(int weigth, double height) {
    return weigth / (height * height);
  }



  public void SendEmail() 
  {
    // Bloco de código que vai conter tudo que for necessário para o envio de um e-mail
    // Aqui não precisamos de um return pois o seu retorno voi definido como void ( nada/vazio/sem retorno)
    return;
  }

  public static void Main() {
    var age = CalculateAgeByYear(1989);
    var isOfLegalAge = ValidateComingOfAge(age);
  }

  public static int CalculateAgeByYear(int yearOfBirth) 
  {     
    return DateTime.Now.Year - yearOfBirth;
  }

  public static bool ValidateComingOfAge(int age) 
  {
    return age >= 18;
  }
}
}


