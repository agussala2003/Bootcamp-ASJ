
public class Arrays {

	public static void main(String[] args) {
		// Array unidimensional
		int datos[] = new int[5];
		int[] datos1 = new int[8];
		byte arr[] = {1,2,3,4};
		
		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
		
		//array multidimensional
		//int [][] matriz = new int [3][2];
		int [][] matriz = {{1,2},{3,4},{5,6}};
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				System.out.print(matriz[i][j]);
				System.out.print(" ");
			}
			System.out.print('\n');
		}
	}

}
