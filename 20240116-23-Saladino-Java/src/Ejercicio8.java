import java.util.Scanner;

public class Ejercicio8 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] arrLetraStrings = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};

        System.out.println("Ingrese el valor de desplazamiento para el cifrado de César:");
        int valorDesplazamiento = scanner.nextInt();
        scanner.nextLine();

        String textoOriginal;
        do {
            System.out.println("Ingrese el texto a codificar (o escriba 'xyz' para salir):");
            textoOriginal = scanner.nextLine();
            String textoCodificado = cifrarCesar(textoOriginal, valorDesplazamiento, arrLetraStrings);
            System.out.println("Texto codificado: " + textoCodificado);
        } while (!textoOriginal.equalsIgnoreCase("xyz"));

        scanner.close();
    }

    public static String cifrarCesar(String texto, int desplazamiento, String[] alfabeto) {
        StringBuilder resultado = new StringBuilder();

        for (int i = 0; i < texto.length(); i++) {
            char caracter = texto.charAt(i);

            if (Character.isLetter(caracter)) {
                char inicio = Character.isLowerCase(caracter) ? 'a' : 'A';
                int indice = (caracter - inicio + desplazamiento) % alfabeto.length;
                resultado.append(alfabeto[indice]);
            } else {
                resultado.append(caracter);
            }
        }

        return resultado.toString();
    }
}
