class Password {
    private int longitud;
    private String contraseña;

    // Constructor por defecto
    public Password() {
        this.longitud = 8;
        generarPassword();
    }

    // Constructor con longitud personalizada
    public Password(int longitud) {
        this.longitud = longitud;
        generarPassword();
    }

    // Método para verificar si la contraseña es fuerte
    public boolean esFuerte() {
        int mayusculas = 0, minusculas = 0, numeros = 0;

        for (char caracter : this.contraseña.toCharArray()) {
            if (Character.isUpperCase(caracter)) {
                mayusculas++;
            } else if (Character.isLowerCase(caracter)) {
                minusculas++;
            } else if (Character.isDigit(caracter)) {
                numeros++;
            }
        }

        return mayusculas > 2 && minusculas > 1 && numeros > 5;
    }

    // Método para generar la contraseña aleatoria
    public void generarPassword() {
        StringBuilder passwordGenerada = new StringBuilder();
        for (int i = 0; i < this.longitud; i++) {
            char caracter;
            if (Math.random() < 0.5) {
                // Generar un dígito
                caracter = (char) ('0' + (int) (Math.random() * 10));
            } else {
                // Generar una letra aleatoria (mayúscula o minúscula)
                int offset = Math.random() < 0.5 ? 'A' : 'a';
                caracter = (char) (offset + (int) (Math.random() * 26));
            }
            passwordGenerada.append(caracter);
        }

        this.contraseña = passwordGenerada.toString();
    }

    // Métodos get y set
    public String getContraseña() {
        return this.contraseña;
    }
    public int getLongitud() {
        return this.longitud;
    }
    public void setLongitud(int longitud) {
        if (longitud > 0) {
            this.longitud = longitud;
            generarPassword();
        } else {
            System.out.println("La longitud debe ser un número positivo.");
        }
    }
}