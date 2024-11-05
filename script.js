let nombre = prompt("Ingresar el nombre");

let estado = parseInt(prompt("Seleccione su estado civil (1: Soltero, 2: Casado, 3: Separado, 4: Viudo, 5: Unión libre):"));


switch (estado) {
  case 1:
    alert(nombre + ", " + "soltero");
    break;
  case 2:
    alert(nombre + ", " + "casado");
    break;
  case 3:
    alert(nombre + ", " + "separado");
    break;
  case 4:
    alert(nombre + ", " + "viudo");
    break;
  case 5:
    alert(nombre + ", " + "union libre");
    break;
  default:
    alert(nombre + ", " + "codigo invalido");
    break;
}





