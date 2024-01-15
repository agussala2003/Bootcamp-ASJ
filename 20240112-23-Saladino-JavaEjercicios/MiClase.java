
public class MiClase {

	public static void main(String[] args) {
		// Simple linea
		/* Multilinea*/
		
		// Syso + crtrl + barra espaciadora
		System.out.println("Hola Mundo");
		
		//tipo nombre = valor
		
		int edad;
		char letra;
		double num1;
		boolean estado;
		String nombre;
		float precio;
		
		edad = 25;
		letra = 'C';
		num1 = 12.4;
		estado = false;
		nombre = "Agustin";
		precio = 99.9f;
		
		System.out.println("La edad es " + edad);
		System.out.println(letra);
		System.out.println(num1);
		System.out.println(estado);
		System.out.println(nombre);
		System.out.println(precio);
		
		// Estructuras Condicionales
		// Operadores > < >= <= != ==
		if(edad > 18) {
			System.out.println("Es Mayor de edad");
		} else {
			System.out.println("Es Menor de edad");
		}
		
	}

}
