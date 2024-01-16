import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class CajeroAutomatico {

    private static final List<String> movimientos = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int saldo = 50000;
        int opcion;

        do { 
            mostrarMenu();
            opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    saldo = extraer(scanner, saldo);
                    break;
                case 2:
                    saldo = depositar(scanner, saldo);
                    break;
                case 3:
                    verSaldo(saldo);
                    break;
                case 4:
                    verUltimosMovimientos();
                    break;
                case 5:
                    System.out.println("Gracias por operar con nosotros!");
                    break;
                default:
                    System.out.println("La opción ingresada no es válida");
            }
        } while (opcion != 5);

        scanner.close();
    }

    private static void mostrarMenu() {
        System.out.println("\nIngrese alguna de las siguientes opciones");
        System.out.println("1 - Extraer Dinero");
        System.out.println("2 - Depositar Dinero");
        System.out.println("3 - Consultar Saldo");
        System.out.println("4 - Ver Últimos Movimientos");
        System.out.println("5 - Salir");
    }

    private static int extraer(Scanner scanner, int saldo) {
        System.out.println("Cuánto dinero deseas extraer?");
        int monto = scanner.nextInt();

        if (monto <= saldo) {
            registrarMovimiento("Extraído: $" + monto);
            return saldo - monto;
        } else {
            System.out.println("No puedes sacar más dinero del que tienes");
            return saldo;
        }
    }

    private static int depositar(Scanner scanner, int saldo) {
        System.out.println("Cuánto dinero deseas depositar?");
        int monto = scanner.nextInt();

        if (monto > 0) {
            registrarMovimiento("Depositado: $" + monto);
            return saldo + monto;
        } else {
            System.out.println("El monto a depositar debe ser mayor a cero");
            return saldo;
        }
    }

    private static void verSaldo(int saldo) {
        System.out.println("Saldo actual: $" + saldo);
        registrarMovimiento("Consultado saldo: $" + saldo);
    }

    private static void registrarMovimiento(String movimiento) {
        movimientos.add(movimiento);
    }

    private static void verUltimosMovimientos() {
        System.out.println("\nÚltimos Movimientos");
        for (String movimiento : movimientos) {
            System.out.println(movimiento);
        }
    }
}
