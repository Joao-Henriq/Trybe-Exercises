
public int DivideNumbers(int numberOne, int numberTwo) 
{
  return numberOne / numberTwo;
}

string[] chemicalProduct = new string[3];

try
{
 chemicalProduct[0] = "Cálcio";
 chemicalProduct[1] = "Zinco";
 chemicalProduct[2] = "Hidrazina";
 chemicalProduct[3] = "Anilina"; 
}
catch (IndexOutOfRangeException ex) 
{
 Console.WriteLine("Erro Específico, sabemos exatamente o motivo do erro.");
}
catch (Exception ex)
{
 Console.WriteLine("Temos a mensagem, porém é um pouco incerto o que ocorreu.");
}

public bool VerifyIsPartner(string tax)
{
  try
  {
   var partner = new PartnershipRepository().GetPartnerByTax(tax);

   if (partner == null)
   {
    throw new NullReferenceException("Parceria não encontrada!");
   }     
  }
  catch (NullReferenceException ex)
  {
   Console.WriteLine(ex.Message);
   throw;
  }

  return true;   
}

public bool VerifyProductValidity(int productId)
{
  Database db = new Database();

  try
  {
    db.Open();

    var product = db.GetProduct(productId);
          
    if (product == null)
    {
      throw new NullReferenceException("Produto não encontrado.");
    }   

    return product.IsValid; 
  }
  catch (NullReferenceException ex)
  {
    Console.WriteLine(ex.Message);
    throw;
  }
  finally
  {
    db.Close();
  }  
}