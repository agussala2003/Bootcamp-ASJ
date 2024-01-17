import java.util.Scanner;

public class ClasePassword {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese la cantidad de contraseñas: ");
        int cantidadContraseñas = scanner.nextInt();
        scanner.nextLine();

        Password[] contraseñas = new Password[cantidadContraseñas];

        for (int i = 0; i < cantidadContraseñas; i++) {
        	System.out.print("Ingrese la longitud para la contraseña " + (i + 1) + ": ");
            int longitud = scanner.nextInt();
            scanner.nextLine();
            contraseñas[i] = new Password(longitud);
        }

        for (int i = 0; i < cantidadContraseñas; i++) {
            String estado = contraseñas[i].esFuerte() ? "FUERTE" : "DEBIL";
            System.out.println("Contraseña_" + (i + 1) + ": " + contraseñas[i].getContraseña() + " - " + estado);
        }


        scanner.close();
	}

}
