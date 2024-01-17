import java.util.ArrayList;
import java.util.Iterator;

public class ListaArrays {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<String> miLista = new ArrayList<String>();
		miLista.add("Rojo");
		miLista.add("Azul");
		miLista.add("Verde");
		
		for(int i = 0; i < miLista.size(); i++) {
			System.out.println(miLista.get(i));
		}
		
		System.out.println("----");
		miLista.add("Negro");
		miLista.add("Blanco");
		miLista.add(3, "Amarillo");
		
		imprimir(miLista);
		
		// Eliminar un elemento
		miLista.remove("Verde");
		miLista.remove(3);
		System.out.println("----");
		
		imprimir(miLista);
		// Indice
		System.out.println(miLista.indexOf("Amarillo"));
		System.out.println(miLista.lastIndexOf("Amarillo")); // Si aparece varias veces devuelve el ultimo indice
		
		// Iterador del arraylist
		System.out.println("----");
		Iterator<String> miIterador = miLista.iterator();
		while (miIterador.hasNext()) {
			String elemento = miIterador.next();
			System.out.print(elemento + " ");
		}
		// Eliminar toda la lista
		miLista.clear();
		
		System.out.println(miLista.isEmpty());
	}
	
	public static void imprimir(ArrayList<String> lista) {
		for (String item : lista) {
			System.out.println(item);
		}
	}
}
