import java.util.Scanner;

public class ClasePersona {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

        // Primer Objeto
        System.out.println("Ingrese nombre, edad, sexo, peso y altura para la Persona 1:");
        String nombre = scanner.nextLine();
        int edad = scanner.nextInt();
        char sexo = scanner.next().charAt(0);
        double peso = scanner.nextDouble();
        double altura = scanner.nextDouble();
        Persona persona1 = new Persona(nombre, edad, sexo, peso, altura);
        int resultadoIMC1 = persona1.calcularIMC();
        boolean esMayor1 = persona1.esMayorDeEdad();
        String resultado1 = cadenaIMCString(resultadoIMC1);

        // Segundo Objeto
        System.out.println("Ingrese nombre, edad, sexo para la Persona 2:");
        scanner.nextLine(); // Consumir el salto de línea pendiente
        nombre = scanner.nextLine();
        edad = scanner.nextInt();
        sexo = scanner.next().charAt(0);
        Persona persona2 = new Persona(nombre, edad, sexo);
        int resultadoIMC2 = persona2.calcularIMC();
        boolean esMayor2 = persona2.esMayorDeEdad();
        String resultado2 = cadenaIMCString(resultadoIMC2);

        // Tercer Objeto
        Persona persona3 = new Persona();
        int resultadoIMC3 = persona3.calcularIMC();
        boolean esMayor3 = persona3.esMayorDeEdad();
        String resultado3 = cadenaIMCString(resultadoIMC3);

        System.out.println(persona1.toString());
        System.out.println("Resultado IMC Persona 1: " + resultado1);
        System.out.println("¿Persona 1 es mayor de edad? " + (esMayor1 ? "Si" : "No"));
        System.out.println();

        System.out.println(persona2.toString());
        System.out.println("Resultado IMC Persona 2: " + resultado2);
        System.out.println("¿Persona 2 es mayor de edad? " + (esMayor2 ? "Si" : "No"));
        System.out.println();

        System.out.println(persona3.toString());
        System.out.println("Resultado IMC Persona 3: " + resultado3);
        System.out.println("¿Persona 3 es mayor de edad? " + (esMayor3 ? "Si" : "No"));

        scanner.close();
	}

	public static String cadenaIMCString(int result) {
        String resultado = "";
        if (result == -1) {
            resultado = "Por debajo del peso ideal";
        } else if (result == 0) {
            resultado = "En el peso ideal";
        } else if (result == 1) {
            resultado = "Por encima del peso ideal";
        }
        return resultado;
    }
}
