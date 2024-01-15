import java.util.Scanner;

public class Ejercicio2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int myInt1 = scanner.nextInt();
		double myDouble = scanner.nextDouble();
		scanner.nextLine();
		String myString = scanner.nextLine();
		scanner.close();

		System.out.println("\nString: " + myString);
		System.out.println("Double: " + myDouble);
		System.out.println("Int: " + myInt1);
	}

}
