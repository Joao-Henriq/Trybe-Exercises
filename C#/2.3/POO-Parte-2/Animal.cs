public abstract class Animal
{
    public int Age { get; set; }
    public abstract string EatingHabits { get; set; }
    public abstract string Habitat { get; set; }

    public abstract void Feed();
    public abstract void Move();

    public void Sleep()
    {
        Console.WriteLine("Zzzz");
    }
}

public class Dog : Animal
{
    public override string EatingHabits { get; set; } = "Carnivore";
    public override string Habitat { get; set; } = "Human homes";

    public override void Feed()
    {
        Console.WriteLine("Feeding the dog");
    }
    public override void Move()
    {
        Console.WriteLine("Dog is walking");
    }

    public void Bark()
    {
        Console.WriteLine("Woof!");
    }
}