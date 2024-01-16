import java.util.Scanner;

public class PairProgramming {
	public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input;

        String letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        char[] letras2 = letras.toCharArray(); // ['A', 'B', 'C', ...]

        System.out.println("Ingrese un texto:");
        input = scanner.nextLine();

        decodificar(input, letras2);

        scanner.close();
    }

    private static void decodificar(String input, char[] letras2) {
        String[] partes = input.split(" ");
        String palabras = "";

        for (String parte : partes) {
            palabras += letra(parte.charAt(0), parte.length(), letras2);
        }

        System.out.println("Texto decodificado: " + palabras);
    }

    private static char letra(char numero, int cantidad, char[] letras2) {
        int inicio = 0;
        
        switch(numero) {
            case '2':
                inicio += cantidad - 1;
                break;
            case '3':
                inicio = 3;
                inicio += cantidad - 1;
                break;
            case '4':
                inicio = 6;
                inicio += cantidad - 1;
                break;
            case '5':
                inicio = 9;
                inicio += cantidad - 1;
                break;
            case '6':
                inicio = 12;
                inicio += cantidad - 1;
                break;
            case '7':
                inicio = 15;
                inicio += cantidad - 1;
                break;
            case '8':
                inicio = 19;
                inicio += cantidad - 1;
                break;
            case '9':
                inicio = 22;
                inicio += cantidad - 1;
                break;
            case '0':
                return ' ';
        }
        
        return letras2[inicio];
    }

}
