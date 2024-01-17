import java.util.Scanner;

public class ClaseCuenta {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Selecciona una de las siguientes opciones:");
		System.out.println("1 - Solo Ingresar Titular");
		System.out.println("2 - Ingresar Titular y Cantidad");
		int op = scanner.nextInt();
		if(op == 1) {
			System.out.println("Ingrese Titular");
			scanner.nextLine();
			String titular = scanner.nextLine();
			Cuenta c1 = new Cuenta(titular);
			operaciones(scanner, c1);
		} else if (op == 2) {
			System.out.println("Ingrese Titular");
			scanner.nextLine();
			String titular = scanner.nextLine();
			System.out.println("Ingrese Cantidad");
			double cantidad = scanner.nextDouble();
			Cuenta c1 = new Cuenta(titular,cantidad);
			operaciones(scanner, c1);
		}
		scanner.close();
	}

	public static void operaciones (Scanner scanner, Cuenta c1) {
		int op;
		do {
			System.out.println("Selecciona una de las siguientes opciones (finaliza con 0):");
			System.out.println("1 - Ingresar Dinero");
			System.out.println("2 - Retirar Dinero");
			op = scanner.nextInt();
			if(op == 1) {
				System.out.println("Cuanto desea ingresar?");
				double monto = scanner.nextDouble();
				c1.ingresar(monto);
				System.out.println(c1.toString());
			}
			if(op == 2) {
				System.out.println("Cuanto desea retirar?");
				double monto = scanner.nextDouble();
				c1.retirar(monto);
				System.out.println(c1.toString());
			}
		} while(op != 0);
	}
}
