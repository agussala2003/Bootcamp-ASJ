
public class Persona {
	private String nombre;
	private String dni;
	private int edad; 
	private char sexo;
	private double peso;
	private double altura;
	
	// Constructor por defecto
	public Persona () {
		this.nombre = "";
		this.dni = generarDni();
		this.edad = 0;
		this.sexo = 'H';
		this.peso = 0;
		this.altura = 0;
		comprobarSexo();
	}
	
	// Constructor con el nombre, edad y sexo, el resto por defecto.
	public Persona(String nombre, int edad, char sexo) {
		this.nombre = nombre;
		this.edad = edad;
		this.sexo = sexo;
		this.peso = 0;
		this.dni = generarDni();
		this.altura = 0;
		comprobarSexo();
	}

	// constructor con todos los atributos como parámetro.
	public Persona(String nombre, int edad, char sexo, double peso, double altura) {
		this.nombre = nombre;
		this.dni = generarDni();
		this.edad = edad;
		this.sexo = sexo;
		this.peso = peso;
		this.altura = altura;
		comprobarSexo();
	}
	

	// Metodo de generar DNI
	public String generarDni() {
		StringBuilder passwordGenerada = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            char caracter;
            caracter = (char) ('0' + (int) (Math.random() * 10));
            passwordGenerada.append(caracter);
        }
        return passwordGenerada.toString();
	}
	
	public int calcularIMC() {
	    double result = this.peso / (Math.pow(this.altura, 2));
	    if(this.peso == 0) {
	    	return -1;
	    }
	    if (result < 20) {
	        return -1;  // Por debajo del peso ideal
	    } else if (result >= 20 && result <= 25) {
	        return 0;   // En el peso ideal
	    } else {
	        return 1;   // Por encima del peso ideal
	    }
	}

	public boolean esMayorDeEdad() {
		return this.edad > 17;
	}
	
	private void comprobarSexo() {
	    char sexoMinuscula = Character.toLowerCase(this.sexo);
	    if (sexoMinuscula != 'h' && sexoMinuscula != 'm') {
	        this.sexo = 'h';
	    }
	}

	@Override
	public String toString() {
		return "Persona [nombre=" + nombre + ", dni=" + dni + ", edad=" + edad + ", sexo=" + sexo + ", peso=" + peso
				+ ", altura=" + altura + "]";
	}	
	
}

