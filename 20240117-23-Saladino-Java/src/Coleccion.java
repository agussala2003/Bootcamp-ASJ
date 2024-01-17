import java.util.ArrayList;
import java.util.ListIterator;

public class Coleccion {
	private String nombreColeccion;
	private ArrayList<Figura> listaFiguras;
	
	public Coleccion (String nombreColeccion) {
		this.nombreColeccion = nombreColeccion;
		this.listaFiguras = new ArrayList<Figura>();
	}

	public String getNombreColeccion() {
		return nombreColeccion;
	}

	public void setNombreColeccion(String nombreColeccion) {
		this.nombreColeccion = nombreColeccion;
	}
	
	public void agregarFigura(Figura fig) {
		this.listaFiguras.add(fig);
	}
	
	public void subirPrecio(double cantidad,String id) {
		boolean flag = false;
		ListIterator<Figura>iterador = this.listaFiguras.listIterator();
		while (iterador.hasNext() && flag == false) {
			Figura figura = iterador.next();
			if(figura.getCodigo() == id) {
				figura.subirPrecio(cantidad);
				iterador.set(figura);
				flag = true;
			}
		}
	}
	
	public String conCapa() {
		String superheoresConCapaString = "";
		for (Figura figura : listaFiguras) {
			if(figura.getSuperheroe().getCapa()) {
				superheoresConCapaString += figura.toString() + "\n";
			}
		}
		return superheoresConCapaString;
	}
	
	public Figura masValioso() {
		Figura figMasValiosa = null;
		double mayorPrecio = 0;
		for (Figura figura : listaFiguras) {
			if(figura.getPrecio() > mayorPrecio) {
				figMasValiosa = figura;
				mayorPrecio = figura.getPrecio();
			}
		}
		return figMasValiosa;
	}
	
	public double getValorColeccion() {
		double precioTotal = 0;
		for (Figura figura : listaFiguras) {
			precioTotal += figura.getPrecio();
		}
		return precioTotal;
	}
	
	public double getVolumenColeccion() {
		double dimension = 0;
		for (Figura figura : listaFiguras) {
			dimension += figura.getDimension().getVolumen();
		}
		dimension += 200;
		return dimension;
	}

	@Override
	public String toString() {
		String text = "Coleccion [nombreColeccion=" + nombreColeccion + ", listaFiguras= ";
		for (Figura figura : listaFiguras) {
			text += "\n               "  + figura.toString();
		}
		text += "]";
		return text;
	}
	
	
}
