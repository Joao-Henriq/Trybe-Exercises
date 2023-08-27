using System;

namespace Program
{
    class Rocket
    {
        public string Name { get; set; } // Adicionando "public" aqui
        public int Fuel { get; set } = 0;
        public decimal Price { get; set; }

        public Rocket(string name, decimal price)
        {
            Name = name;
            Price = price;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var firstRocket = new Rocket("Apollo 11");
            var secondRocket = new Rocket("Falcon 9");

            Console.WriteLine($"First Rocket Name: {firstRocket.Name}");
            Console.WriteLine($"Second Rocket Name: {secondRocket.Name}");
        }
    }

  class Bakery
  {
    public Bread fabricateBread(int weight)
    {
        return new Bread
        {
            Weight = weight,
            Type = "White"
        };
    }

    public Cake fabricateChocolateCake(string size)
    {
        return new Cake
        {
            Size = size,
            Flavour = "Chocolate"
        };
    }
  }

  class Bread
  {
    string _type = "";

    public int Weight { get; set; }
    public string Type
    {
        get { return _type; }
        set
        {
            if (value != "White" && value != "Wheat")
                throw new ArgumentException("Invalid bread type");

            _type = value;
        }
    }
  }
  class Cake
  {
    public string Size { get; set; }
    public string Flavour { get; set; }
  }
}
