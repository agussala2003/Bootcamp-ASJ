import java.util.Iterator;
import java.util.Scanner;

public class EjerciciosVariado {

    public static void main(String[] args) {
    	
    	// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.
    	
        Scanner scanner = new Scanner(System.in);
        
//        int ang1;
//        int ang2;
//        int ang3;
//        do {
//            System.out.println("Ingrese los 3 ángulos del triángulo con el siguiente formato");
//            System.out.println("Angulo1 Angulo2 Angulo3");
//            System.out.println("Ejemplo: 60 60 60");
//            ang1 = scanner.nextInt();
//            ang2 = scanner.nextInt();
//            ang3 = scanner.nextInt();
//            if ((ang1 + ang2 + ang3) == 180) {
//                double lado1 = Math.sqrt(2 * Math.pow(1, 2) * (1 - Math.cos(Math.toRadians(ang1))));
//                double lado2 = Math.sqrt(2 * Math.pow(1, 2) * (1 - Math.cos(Math.toRadians(ang2))));
//                double lado3 = Math.sqrt(2 * Math.pow(1, 2) * (1 - Math.cos(Math.toRadians(ang3))));
//                if ((lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1)) {
//                    System.out.println("Es un triángulo válido");
//                } else {
//                    System.out.println("No es un triángulo válido");
//                }
//            } else {
//                System.out.println("La suma de los ángulos no es 180 grados. No es un triángulo válido.");
//            }
//        } while (ang1 != 0);
        
        // Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.
       
//        System.out.println("Ingrese una cadena:");
//        String myString = scanner.nextLine();
//        System.out.println();
//        if((int) myString.charAt(0) > 47 && (int) myString.charAt(0) < 58) {
//        	System.out.println("Tu cadena empieza por un numero");
//        } else if (((int) myString.charAt(0) > 64 && (int) myString.charAt(0) < 91) || ((int) myString.charAt(0) > 96 && (int) myString.charAt(0) < 123) || ((int) myString.charAt(0) > 159 && (int) myString.charAt(0) < 166)) {
//        	System.out.println("Tu cadena empieza por una letra");
//        }
        
        
        // Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.
        
//        System.out.println("Ingrese un rango de numeros N-M");
//        int num1 = scanner.nextInt();
//        int num2 = scanner.nextInt();
//        int total = 0;
//        for (int i = num1; i <= num2; i++) {
//			if(i%2 == 0) {
//				total += i;
//				System.out.println(total);
//			}
//		}
//        System.out.println("El total es: " + total);
        
        // Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a la suma de sus divisores positivos, excluido él mismo., Ejemplos 6 = 1 + 2 + 3)
        
//        System.out.println("Ingrese un numero para ver si es perfecto");
//        int num1 = scanner.nextInt();
//        int total = 0;
//        for (int i = 1; i < num1; i++) {
//			if (num1 % i == 0) {
//				total += i;
//			}
//		}
//        if (total == num1) {
//        	System.out.println("Perfecto");
//        } else {
//        	System.out.println("No perfecto");
//        }
        
        // Recrear el siguiente dibujo
        
        System.out.println("Cuantas lineas quieres mostrar?");
//        int num1 = scanner.nextInt();
//        String cadena1 = "";
//        String cadena2 = "";
//        for (int i = 0; i < num1; i++) {
//			cadena1 += "* ";
//			if (i>0) {
//				cadena2 += "* ";
//			}
//		}
//        for (int i = 1; i <= num1; i++) {
//			if(i%2 == 0) {
//				System.out.println(" " + cadena2);
//			} else {
//				System.out.println(cadena1);
//			}
//		}
        
        scanner.close();
    }

}
