
public class Operaciones {
	private int num1;
	private int num2;
	
	public Operaciones (int num1,int num2) {
		this.num1 = num1;
		this.num2 = num2;
	}
	
	// Getters, Setters
	public int getNum1() {
		return num1;
	}
	public void setNum1(int num1) {
		this.num1 = num1;
	}
	public int getNum2() {
		return num2;
	}
	public void setNum2(int num2) {
		this.num2 = num2;
	}
	
	// Operaciones
	
	public int Suma() {
		return this.num1 + this.num2;
	}
	
	public int Resta() {
		return this.num1 - this.num2;
	}
	
	public int Producto() {
		return this.num1 * this.num2;
	}
	
	public double Division() {
	    if (this.num2 != 0) {
	        return (double) this.num1 / this.num2;
	    } else {
	        System.out.println("No se puede dividir por cero.");
	        return Double.NaN;
	    }
	}
	
}
