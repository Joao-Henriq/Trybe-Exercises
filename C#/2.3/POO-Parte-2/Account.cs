namespace POO_Parte_2;


public class Account
{
    public decimal _balance;

    public Client Owner { get; set; }
    public decimal Balance
    {
        get => _balance;
        private set
        {
            if (value < 0)
                throw new ArgumentException("Balance can't be negative!");
            _balance = value;
        }
    }
    
    public Account(Client owner)
    {
        Owner = owner;
    }

    public virtual void Deposit(decimal amount) => Balance += amount;
    public void Withdraw(decimal amount) => Balance -= amount;
}

public class DigitalAccount : Account
{
    public OperatingSystem AccountCreationOS { get; }
    public DateTime AccountCreationDate { get; } = DateTime.Now;
    
    public DigitalAccount(Client owner, OperatingSystem OS) : base(owner) {
        AccountCreationOS = OS;
    }

    //public override void Deposit(decimal amount)
    //o override só funciona caso o membro sobrescrito da superclasse seja definido como abstract ou virtual através de um modificador próprio, como Account não é uma classe abstrata, teremos que usar o virtual no método Deposit em Account
    public override void Deposit(decimal amount)
    {
        Balance += amount;
        Console.WriteLine($"New balance is {Balance}");
    }
}