interface IGreeter
{
    void SayGreeting(string greeting);
}

public interface IStartable
{
    void Start()
    {
        Console.WriteLine("Item started");
    }
}