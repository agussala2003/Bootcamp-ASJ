
public class Cuenta {
	private String titular;
	private double cantidad;
	
	public Cuenta (String titular) {
		this.titular = titular;
		this.cantidad = 0;
	}
	public Cuenta (String titular, double cantidad) {
		this.titular = titular;
		this.cantidad = cantidad;
	}
	
	// Getters, Setters
	public String getTitular() {
		return titular;
	}
	public void setTitular(String titular) {
		this.titular = titular;
	}
	public double getCantidad() {
		return cantidad;
	}
	public void setCantidad(double cantidad) {
		this.cantidad = cantidad;
	}
	
	// Metodos
	public void ingresar(double cantidad) {
		if (cantidad > 0) {
			this.cantidad += cantidad;
		}
	}
	public void retirar(double cantidad) {
		if (cantidad > 0) {
			this.cantidad -= cantidad;
		}
		if (this.cantidad < 0) {
			this.cantidad = 0;
		}
	}
	@Override
	public String toString() {
		return "Cuenta [titular=" + titular + ", cantidad=" + cantidad + ", getTitular()=" + getTitular()
				+ ", getCantidad()=" + getCantidad() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	
}
