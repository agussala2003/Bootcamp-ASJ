
public class Clases {

	public static void main(String[] args) {
		Automovil auto1 = new Automovil("Ferrari", 2024);
		
		auto1.mostrarDatos();
		System.out.println(auto1.getMarca());
		auto1.setMarca("Bmw");
		System.out.println(auto1.getMarca());
		
		auto1.setColor("Plateado");
		auto1.mostrarDatos();
		
		Camion camion1 = new Camion("Scania", 2000, 20000.5);
		System.out.println(camion1.toString());
	}

}
