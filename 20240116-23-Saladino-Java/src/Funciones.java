
public class Funciones {

	public static void main(String[] args) {
		helloWorld();
		System.out.println(nombreUsuario("Agustin"));
	}
	// modificador void nombre (int dato, String nombre){}
	
	// modificador int nombre (int dato) {return dato} 
	public static void helloWorld () {
		System.out.println("Hola mundo");
	}
	public static String nombreUsuario(String name) {
		return "Hola " + name + " buen dia";
	}
}
