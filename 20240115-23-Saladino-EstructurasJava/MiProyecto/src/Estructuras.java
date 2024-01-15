import java.util.Scanner;

public class Estructuras {

	public static void main(String[] args) {
		// Estructuras condicionales
		/*
		boolean flag = true;
		
		// IF
		if (flag) {
			// Sentencia
		} else if (flag) {
			// Sentencia
		} else {
			// Sentencia
		}
		
		// SWITCH
		char letra = 'A';
		switch (letra) {
		case 'A': {
			// Sentencia
			break;
		}
		default:
			//Sentencia
			break;
		};
		
		// TERNARIO
		boolean status = false;
		String myVar = status ? "Correcto" : "Icorrecto";
		
		// FOR
		for (int i = 0; i < args.length; i++) {
			// Sentencia
		}
		
		// WHILE
		while (status) {
			// Sentencia
		}
		
		// DO WHILE
		do {
			// Sentencia
		}while(status);
		
		*/
		
		// Pedir al usuario que ingrese. Cuantas notas quiere ingresar?
		// Segun eso, pedir el valor de cada nota (1 al 10)
		// Sacar el promedio
		// P/D: Hacerlo con FOR,WHILE,DO WHILE
		
		Scanner scanner = new Scanner(System.in);
		int cantNotas;
		
		do {
			System.out.println("Cuantas notas desea ingresar?");
			cantNotas = scanner.nextInt();
		} while (cantNotas < 1);
		
		int nota = 0;
		int total = 0;
		
		
		// FOR
		for (int i = 0; i < cantNotas; i++) {
			do {
				System.out.println("Ingrese la nota " + (i + 1));
				nota = scanner.nextInt();
			} while (nota < 1 || nota > 10);
			total += nota;
		}
		System.out.println("El promedio de las " + cantNotas + " notas es: " + ((float)total/cantNotas));
		
		// WHILE 

		int i = 0;
		total = 0;
		nota = 0;
		while (i<cantNotas) {
			do {
				System.out.println("Ingrese la nota " + (i + 1));
				nota = scanner.nextInt();
			} while (nota < 1 || nota > 10);
			total += nota;
			i++;
		}
		System.out.println("El promedio de las " + cantNotas + " notas es: " + ((float)total/cantNotas));
		
		// DO WHILE
		
		i = 0;
		total = 0;
		nota = 0;
		do {
			do {
				System.out.println("Ingrese la nota " + (i + 1));
				nota = scanner.nextInt();
			} while (nota < 1 || nota > 10);
			total += nota;
			i++;
		} while(i<cantNotas);
		System.out.println("El promedio de las " + cantNotas + " notas es: " + ((float)total/cantNotas));	
	
		scanner.close();
	}

}
