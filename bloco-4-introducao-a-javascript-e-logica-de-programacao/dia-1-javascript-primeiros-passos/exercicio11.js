let salarioBruto = 3000.00;
let salarioBase;
let salarioLiquido;
let aliquotainss;
let aliquotair;

if(salarioBruto <=1556.94){
    aliquotainss=salarioBruto*0.08;
    salarioBase=salarioBruto-aliquotainss;

}else if(salarioBruto >=1556.95 && salarioBruto<= 2594.92){
    aliquotainss=salarioBruto*0.09;
    salarioBase=salarioBruto-aliquotainss;

}else if(salarioBruto >=2594.93 && salarioBruto<= 5189,82){
    aliquotainss=salarioBruto*0.11;
    salarioBase=salarioBruto-aliquotainss;

}else if(salarioBruto >5189.82){
    aliquotainss = 570.88;
    salarioBase = salarioBruto-aliquotainss;
 
}
console.log(salarioBase);

if(salarioBase <= 1903.98){
    aliquotair=0;
}else if (salarioBase >=1903.99 && salarioBase <=2826.65){
    aliquotair = salarioBase * 0.075-142.80;
    salarioLiquido = salarioBase-aliquotair;
   
}else if (salarioBase >=2826.66 && salarioBase <=3751.05){
    aliquotair = salarioBase * 0.15-354.80;
    salarioLiquido = salarioBase-aliquotair;
   
}else if (salarioBase >=3751.06 && salarioBase <=4664.68){
    aliquotair = salarioBase * 0.225-636.13;
    salarioLiquido = salarioBase-aliquotair;
}else if (salarioBase > 4664.68){
    aliquotair = salarioBase * 0.275-869.36;
    salarioLiquido = salarioBase-aliquotair;
}
console.log(salarioLiquido);

