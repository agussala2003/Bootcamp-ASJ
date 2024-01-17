public class Camion extends Automovil{

	private double cargaMax;
	public Camion(String marca, int anio,double carga) {
		//super();
		super(marca,anio);
		this.setCargaMax(carga);
		System.out.println("Creando instancia del camion");
	}
	public double getCargaMax() {
		return cargaMax;
	}
	public void setCargaMax(double cargaMax) {
		this.cargaMax = cargaMax;
	}
	public void mostrar() {
		System.out.println("Marca Camion: " + super.getMarca() + " | Anio:" + super.getAnio() + " | Color: " + super.getColor() + " | Carga Maxima: " + getCargaMax());
	}
	@Override
	public String toString() {
		return "Camion [cargaMax=" + cargaMax + ", getCargaMax()=" + getCargaMax() + ", getMarca()=" + getMarca()
				+ ", getAnio()=" + getAnio() + ", getColor()=" + getColor() + ", toString()=" + super.toString()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + "]";
	}


	
}
