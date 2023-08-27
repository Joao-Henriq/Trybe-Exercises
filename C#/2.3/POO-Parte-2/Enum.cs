enum PaymentType
{
    // Credit tem valor 0
    Credit = 0,

    // Debit tem valor 1
    Debit = 1
}

class Order
{
    public PaymentType PayType
}

Order myOrder = new Order();

myOrder.PayType = PaymentType.Credit;