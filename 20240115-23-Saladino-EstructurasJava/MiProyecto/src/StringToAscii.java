import java.util.Scanner;

public class StringToAscii {

	public static void main(String[] args) {
//		Dada una palabra ingresada por el usuario (por teclado), mostrar su equivalente en ASCII letra por letra
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese una cadena:");
		String myString = scanner.nextLine();
		scanner.close();
		
		int ascii;
		
		// .length() para la longitud del sting
		// charAt(i) devuelve la letra en un index predeterminado
		
		for (int i = 0; i < myString.length(); i++) {
			ascii = (int) myString.charAt(i); // Casteo implicito
            System.out.print(ascii + " ");
        }
	}

}
