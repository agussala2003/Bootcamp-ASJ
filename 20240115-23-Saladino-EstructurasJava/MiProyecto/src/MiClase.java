
public class MiClase {

	public static void main(String[] args) {
		// Similar al "Console.log()"
		
		/*TIPOS DE DATOS
		 * int
		 * double
		 * float
		 * boolean
		 * String
		 * char
		 * short
		 * long
		 * byte
		 * */
		
		int entero;
		double doble;
		float flotante;
		boolean booleano;
		String string;
		char character;
		byte myByte;
		short myShort;
		long myLong;

		System.out.println("Tipo - Minimo - Maximo");
		System.out.println("Int: " + Integer.MIN_VALUE + " - " + Integer.MAX_VALUE);
		System.out.println("Double: " + Double.MIN_VALUE + " - " + Double.MAX_VALUE);
		System.out.println("Float: " + Float.MIN_VALUE + " - " + Float.MAX_VALUE);
		System.out.println("Byte: " + Byte.MIN_VALUE + " - " + Byte.MAX_VALUE);
		System.out.println("Short: " + Short.MIN_VALUE + " - " + Short.MAX_VALUE);
		System.out.println("Long: " + Long.MIN_VALUE + " - " + Long.MAX_VALUE);
		
		String palabra1 = "A";
		String palabra2 = "B";
		
		System.out.println(palabra1.compareTo(palabra2));
		System.out.println(palabra1.equals(palabra2));
		
		int variableInt = 77;
		
	}

}
