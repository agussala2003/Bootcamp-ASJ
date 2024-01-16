import java.util.Scanner;

public class Ejercicio6 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int [][] arr = new int [4][4];
		int op;
		boolean flag = true;
		do {
			mensaje();
			op = scanner.nextInt();
			if (op == 1 && flag) {
				cargarMatriz(arr,scanner);
				flag = false;
			} else if (op != 1 && flag) {
				System.out.println("Debes cargar la matriz primero");
			} else if (flag == false) {
				switch (op) {
				case 1:
					cargarMatriz(arr,scanner);
					break;
				case 2:
					sumarFila(arr, scanner);
					break;
				case 3:
					sumarColumna(arr, scanner);
					break;
				case 4:
					sumarDiagonalPrincipal(arr);
					break;
				case 5:
					sumarDiagonalInversa(arr);
					break;
				case 6:
					sumarMedia(arr);
					break;
				case 7:
					System.out.println("Gracias por jugar con nosotros!");
					break;
				default:
					System.out.println("No es una opcion valida");
					break;
				}
			}
		} while(op!=7);
		
	}
	public static void mensaje () {
		System.out.println("Ingrese alguna de las siguentes opciones:");
		System.out.println("1 - Rellenar la matriz");
		System.out.println("2 - Sumar una fila a eleccion");
		System.out.println("3 - Sumar una columna a eleccion");
		System.out.println("4 - Sumar los valores de la diagonal principal");
		System.out.println("5 - Sumar los valores de la diagonal inversa");
		System.out.println("6 - Media de todos los valores de la matriz");
		System.out.println("7 - Salir");
	}
	
	public static void cargarMatriz (int [][] arr, Scanner scanner) {
		int num;
		for (int i = 0; i < arr.length; i++) {
			for (int j = 0; j < arr[i].length; j++) {
				System.out.println("Que numero deseas cargar? (" + (i+1) + "X" + (j+1) + ")");
				num = scanner.nextInt();
				arr[i][j] = num;
			}
		}
	}
	
	public static void sumarFila (int [][] arr, Scanner scanner) {
		for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
		System.out.println("Que fila deseas sumar?");
		int op;
		int total = 0;
		do {
			System.out.println("Rango " + 1 + " - " + arr.length);
			op = scanner.nextInt();
		} while (op < 1 || op > arr.length);
		
		for (int i = 0; i < arr.length; i++) {
			total += arr[op-1][i];
		}
		System.out.println("El total de suma de la fila " + op + " es:" + total);
	}
	
	public static void sumarColumna (int [][] arr, Scanner scanner) {
		for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
		System.out.println("Que columna deseas sumar?");
		int op;
		int total = 0;
		do {
			System.out.println("Rango " + 1 + " - " + arr.length);
			op = scanner.nextInt();
		} while (op < 1 || op > arr.length);
		
		for (int i = 0; i < arr.length; i++) {
			total += arr[i][op-1];
		}
		System.out.println("El total de suma de la columna " + op + " es:" + total);
	}
	
	public static void sumarDiagonalPrincipal(int [][] arr) {
		int total = 0;
		for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
                if (i == j) {
                	total += arr[i][j];
                }
            }
            System.out.println();
        }
		System.out.println("El total de suma de la diagonal principal es:" + total);
	}
	
	public static void sumarDiagonalInversa(int[][] arr) {
		for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
	    int total = 0;
	    int columna = arr.length - 1;
	    for (int fila = 0; fila < arr.length; fila++) {
	        total += arr[fila][columna];
	        columna--;
	    }
	    System.out.println("\nEl total de suma de la diagonal inversa es: " + total);
	}
	
	public static void sumarMedia(int[][] arr) {
	    int total = 0;
	    int aux = 0;
	    for (int i = 0; i < arr.length; i++) {
	        for (int j = 0; j < arr[i].length; j++) {
	            System.out.print(arr[i][j] + " ");
	            total += arr[i][j];
	            aux++;
	        }
	        System.out.println();
	    }
	    System.out.println("La media de los numeros de la matriz es: " + ((float) total / aux));
	}

}
