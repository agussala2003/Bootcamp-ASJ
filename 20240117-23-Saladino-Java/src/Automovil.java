
public class Automovil {
	//Atributos
	private String marca;
	private int anio;
	private String color;
	
	// El constructor se crea cuando se instancia
	public Automovil() {
		System.out.println("Creando instancia de Clase Automovil");
	}
	public Automovil(String m, int a) {
		this.marca = m;
		this.anio = a;
		this.color = "";
		System.out.println("Creando instancia de Clase Automovil");
	}
	
	private void calculo() {
		// Realice algun calculo
	}
	
	// Get = Devolver un atributo
	// Set = Cambiar el valor de un atrubuto
	
	public String getMarca() {
		return this.marca;
	}
	public void setMarca(String valor) {
		this.marca = valor;
	}
	public int getAnio() {
		return anio;
	}
	public void setAnio(int anio) {
		this.anio = anio;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}

	// Metodos
	public void mostrarDatos() {
		this.calculo();
		System.out.println("Marca = " + this.marca + " - Año = " + this.anio + " - Color = " + this.color);
	}
	@Override
	public String toString() {
		return "Automovil [marca=" + marca + ", anio=" + anio + ", color=" + color + "]";
	}
	
}
