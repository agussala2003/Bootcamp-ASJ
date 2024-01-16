import java.util.Random;

public class Ejercicio7 {

	 public static void main(String[] args) {
	        int[][] encuesta = new int[10][3];
	        generarEncuestaAleatoria(encuesta);
	        mostrarResultados(encuesta);
	    }

	    public static void generarEncuestaAleatoria(int[][] encuesta) {
	        Random random = new Random();
	        for (int i = 0; i < encuesta.length; i++) {
	            encuesta[i][0] = random.nextInt(2) + 1;
	            encuesta[i][1] = random.nextInt(2) + 1;
	            if (encuesta[i][1] == 1) {
	                encuesta[i][2] = random.nextInt(1401) + 600;
	            } else {
	                encuesta[i][2] = 0;
	            }
	        }
	    }

	    public static void mostrarResultados(int[][] encuesta) {
	        porcentajeHombres(encuesta);
	        porcentajeMujeres(encuesta);
	        porcentajeHombresTrabajan(encuesta);
	        porcentajeMujeresTrabajan(encuesta);
	        sueldoPromedioHombresTrabajan(encuesta);
	        sueldoPromedioMujeresTrabajan(encuesta);
	    }

	    public static void porcentajeHombres(int[][] encuesta) {
	        int hombres = 0;
	        for (int i = 0; i < encuesta.length; i++) {
	            if (encuesta[i][0] == 1) {
	                hombres++;
	            }
	        }
	        float porcentaje = ((float) hombres / encuesta.length) * 100;
	        System.out.println("Porcentaje de hombres: %" + porcentaje);
	    }

	    public static void porcentajeMujeres(int[][] encuesta) {
	        int mujeres = 0;
	        for (int i = 0; i < encuesta.length; i++) {
	            if (encuesta[i][0] == 2) {
	                mujeres++;
	            }
	        }
	        float porcentaje = ((float) mujeres / encuesta.length) * 100;
	        System.out.println("Porcentaje de mujeres: %" + porcentaje);
	    }

	    public static void porcentajeHombresTrabajan(int[][] encuesta) {
	        int hombresTrabajan = 0;
	        for (int i = 0; i < encuesta.length; i++) {
	            if (encuesta[i][0] == 1 && encuesta[i][1] == 1) {
	                hombresTrabajan++;
	            }
	        }
	        float porcentaje = ((float) hombresTrabajan / encuesta.length) * 100;
	        System.out.println("Porcentaje de hombres que trabajan: %" + porcentaje);
	    }

	    public static void porcentajeMujeresTrabajan(int[][] encuesta) {
	        int mujeresTrabajan = 0;
	        for (int i = 0; i < encuesta.length; i++) {
	            if (encuesta[i][0] == 2 && encuesta[i][1] == 1) {
	                mujeresTrabajan++;
	            }
	        }
	        float porcentaje = ((float) mujeresTrabajan / encuesta.length) * 100;
	        System.out.println("Porcentaje de mujeres que trabajan: %" + porcentaje);
	    }

	    public static void sueldoPromedioHombresTrabajan(int[][] encuesta) {
	        int totalSueldoHombresTrabajan = 0;
	        int hombresTrabajan = 0;
	        for (int i = 0; i < encuesta.length; i++) {
	            if (encuesta[i][0] == 1 && encuesta[i][1] == 1) {
	                totalSueldoHombresTrabajan += encuesta[i][2];
	                hombresTrabajan++;
	            }
	        }

	        if (hombresTrabajan > 0) {
	            float promedio = ((float) totalSueldoHombresTrabajan / hombresTrabajan);
	            System.out.println("Sueldo promedio de hombres que trabajan: $" + promedio);
	        } else {
	            System.out.println("No hay hombres que trabajan en la encuesta.");
	        }
	    }

	    public static void sueldoPromedioMujeresTrabajan(int[][] encuesta) {
	        int totalSueldoMujeresTrabajan = 0;
	        int mujeresTrabajan = 0;
	        for (int i = 0; i < encuesta.length; i++) {
	            if (encuesta[i][0] == 2 && encuesta[i][1] == 1) {
	                totalSueldoMujeresTrabajan += encuesta[i][2];
	                mujeresTrabajan++;
	            }
	        }

	        if (mujeresTrabajan > 0) {
	            float promedio = ((float) totalSueldoMujeresTrabajan / mujeresTrabajan);
	            System.out.println("Sueldo promedio de mujeres que trabajan: $" + promedio);
	        } else {
	            System.out.println("No hay mujeres que trabajan en la encuesta.");
	        }
	    }
}
