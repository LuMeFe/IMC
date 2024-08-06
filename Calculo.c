#include <stdio.h>

int main() {
    float peso, altura, imc;
    
    printf("Digite o seu peso em Kg: ");
    scanf("%f", &peso);
    
    printf("Digite a sua altura em metros: ");
    scanf("%f", &altura);
    
    imc = peso / (altura^2);
    
    printf("O seu IMC é: %.2f\n", imc);
    
      if (imc < 18.5) {
        printf(" Magreza\n");
    } else if (imc >= 18.5 && imc < 24.9) {
        printf("Normal\n");
    } else if (imc >= 25.0 && imc < 29.9) {
        printf("Sobrepeso\n");
    } else {
        printf("Obesidade\n");
    }
    
    return 0;
}
