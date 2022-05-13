var INSSAliquota8 = 0.08
var INSSAliquota9 = 0.09;
var INSSAliquota11 = 0.11;
var INSSAliquotaMax = 570.88;
var IRAliquota1 = 0.075;
var IRAliquota2 = 0.15;
var IRAliquota3 = 0.225;
var IRAliquota4 = 0.275;
var parcelaIRAliquota1 = 142.80;
var parcelaIRAliquota2 = 354.80;
var parcelaIRAliquota3 = 636.13;
var parcelaIRAliquota4 = 869.36;
var salarioBase = 0;         // Salario descontado do inss 
var salarioLiquido = 0;     // salarioLiquido = salarioBase - ((salarioBase * aliquotaIR) - parcelaIR);
var salarioBruto = 10000.82;
if (salarioBruto <= 1556.94 ){  /*paga alíquota de 8%*/
    salarioBase += salarioBruto - ( salarioBruto * INSSAliquota8);
    salarioLiquido = salarioBase; // pois é livre de IR 
    console.log('1 O seu salário é de: ', salarioLiquido); 
}
else if( salarioBruto > 1556.94 && salarioBruto <= 2594.92){  
    salarioBase = salarioBruto - (salarioBruto * INSSAliquota9);
    
    if(salarioBase <= 1903.98){ 
        salarioLiquido += salarioBase;
        console.log('3 seu salário líquido é',salarioLiquido);
    } else if (salarioBase > 1903.98 && salarioBase <= 2826.65){ 
        salarioLiquido += salarioBase - ((salarioBase * IRAliquota1) - parcelaIRAliquota1);
        console.log('4 seu salário liquido é:', salarioLiquido)
    }
}
else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    salarioBase += salarioBruto - ( salarioBruto * INSSAliquota11 );
    console.log('salariobase', salarioBase)
    
    if (salarioBase > 1903.98 && salarioBase <= 2826.65){ 
        salarioLiquido += salarioBase - ((salarioBase * IRAliquota1) - parcelaIRAliquota1);
        console.log('4 seu salário liquido é:', salarioLiquido)
    }
    else if ( salarioBase >= 2826.66 && salarioBase <= 3751.05){
        salarioLiquido += salarioBase - ((salarioBase * IRAliquota2) - parcelaIRAliquota2);
        console.log('5 Seu salário líquido é:', salarioLiquido);
    } 
    else if ( salarioBase > 3751.06 && salarioBase <= 4664.68){
        salarioLiquido += salarioBase - ((salarioBase * IRAliquota3) - parcelaIRAliquota3);
        console.log('6 Seu salário líquido é:', salarioLiquido);
    }
}
else if ( salarioBruto > 5189.82){
    salarioBase += salarioBruto - 570.88;
  
    if ( salarioBase > 3751.06 && salarioBase <= 4664.68){
        salarioLiquido += salarioBase - ((salarioBase * IRAliquota3) - parcelaIRAliquota3);
        console.log('7 Seu salário líquido é:', salarioLiquido);
    }
    else if ( salarioBase > 4664.68){
        salarioLiquido = salarioBase - ((salarioBase * IRAliquota4) - parcelaIRAliquota4);
        console.log('8 o seu salário líquido é:', salarioLiquido);
    }
}

