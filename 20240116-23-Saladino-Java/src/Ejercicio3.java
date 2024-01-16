public class Ejercicio3 {

    public static void main(String[] args) {
        int[] arr = new int[20];
        int[] arrPar = new int[20];
        int[] arrImpar = new int[20];
        int num = 0;
        carga(arrPar, arrImpar, num);
        cargaFinal(arrPar, arrImpar, arr);

        // Imprimir el array resultante
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }

    public static void carga(int[] arrPar, int[] arrImpar, int num) {
        for (int i = 0; i < 20; i++) {
            num = (int) Math.round(Math.random() * 100);
            if (num % 2 == 0) {
                arrPar[i] = num;
            } else {
                arrImpar[i] = num;
            }
        }
    }

    public static void cargaFinal(int[] arrPar, int[] arrImpar, int[] arr) {
        int aux = 0;

        // Copiar números pares al array resultante
        for (int i = 0; i < arrPar.length; i++) {
            if (arrPar[i] != 0) {
                arr[aux] = arrPar[i];
                aux++;
            }
        }

        // Copiar números impares al array resultante
        for (int i = 0; i < arrImpar.length; i++) {
            if (arrImpar[i] != 0) {
                arr[aux] = arrImpar[i];
                aux++;
            }
        }
    }
}
