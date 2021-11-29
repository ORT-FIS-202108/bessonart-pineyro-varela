## MISION
Validar que el comportamiento de la aplicación sea igual en Mozilla FireFox y Google Chrome. |

### INICIO 
29/11/2021 - 20:00 pm
### TESTER
Florencia Varela
### ESTRUCTURA DE DIVISIÓN
**DURACIÓN:** Corta (20 min) 

**DISEÑO Y EJECUCIÓN DE PRUEBAS:** % 

**INVESTIGACIÓN Y REPORTE DE DEFECTOS:** % 

**ARMADO DE LA SESIÓN:** %
### NOTAS DE PRUEBA 
**Prueba 1 - Abrir la página de inicio**
- Abrir localhost:8080 en Mozilla FireFox y Google Chrome
- Se muestra la página de Amigos
Estado: Pasa

![Paginas Amigos](..\img\testing-prueba-1-Florencia.jpg)

**Prueba 2 - Agregar amigo con nombre repetido**
- Seleccionar '+'
- Ingresar datos de un nuevo amigo.
- Seleccionar 'Agregar'
- Se actualiza la lista de amigos
- Repetir los pasos con la misma información ingresada al sistema
- Se muestra mensaje de error
Estado: Pasa

![Primer amigo ingresado](..\img\testing-prueba-2-Florencia.jpg)

![Repito el nombre del amigo](..\img\testing-prueba-3-Florencia.png)

![Mensaje de error](..\img\testing-prueba-4-Florencia.png)

**Prueba 3 - Eliminar amigo**
- Seleccionar la basura de un amigo
- Muestra un diálogo pidiendo la confirmación
- Seleccionar 'Aceptar'(se probó también seleccionar 'Cancelar')
- Se actualiza la lista de amigos
Estado: Pasa

![Eliminar amigo](..\img\testing-prueba-5-Florencia.png)
![Mesaje de actualización del sistema](..\img\testing-prueba-6-Florencia.png)

**Prueba 4 - Agregar grupo con nombre ya existente**
- Seleccionar la pestaña Grupos
- Seleccionar '+'
- Ingresar nombre del grupo.
- Seleccionar 'Agregar'
- Se actualiza la lista de grupos
- Repetir los pasos con la misma información ingresada al sistema
- Se muestra mensaje de error
Estado: Pasa

![Agregar grupo](..\img\testing-prueba-9-Florencia.png)
![Repetir datos del grupo ya agregado](..\img\testing-prueba-8-Florencia.png)
![Mensaje de error](..\img\testing-prueba-10-Florencia.png)

**Prueba 5 - Eliminar grupo**
- Seleccionar la basura de un grupo
- Muestra un diálogo pidiendo la confirmación
- Seleccionar 'Aceptar'(se probó también seleccionar 'Cancelar')
- Se actualiza la lista de grupos
Estado: Pasa

![Grupos previos a la eliminacion](..\img\testing-prueba-11-Florencia.png)
![Eliminar grupo](..\img\testing-prueba-12-Florencia.png)
![Mensaje de confirmacion](..\img\testing-prueba-13-Florencia.png)

**Prueba 6 - Editar grupo**
- Seleccionar el lápiz de un Grupo
- Seleccionar '+' para cada integrante que se quiere agregar
- Seleccionar 'Cerrar'
- Seleccionar nuevamente el lápiz
- Notar que a los integrantes agregados se les cambió el '+' por una basura
Estado: Pasa

![Estado previo a la agregacion](..\img\testing-prueba-14-Florencia.png)
![Agregar a Monica](..\img\testing-prueba-16-Florencia.png)
![Mensaje de confirmacion](..\img\testing-prueba-17-Florencia.png)

**Prueba 7 - Agregar Gasto**
- Seleccionar un grupo
- Seleccionar 'Agregar Gasto'  
- Ingresar descripción, monto y seleccionar responsable del pago (se probó también no completar todos los campos)
- Seleccionar 'Agregar'
- Se actualiza la lista de deudas
Estado: Pasa

![Agregar gasto lleno](..\img\testing-prueba-18-Florencia.png)
![Lista de deudas](..\img\testing-prueba-19-Florencia.png)

**Prueba 8 - Saldar Deuda**
- Seleccionar un grupo
- Seleccionar la basura de una de las deudas
- Muestra un diálogo pidiendo confirmación
- Selecciona 'Aceptar' (se probó también seleccionar 'Cancelar')
- Se actualiza la lista de deudas
Estado: Pasa

![Lista de deudas](..\img\testing-prueba-19-Florencia.png)
![saldar deuda](..\img\testing-prueba-20-Florencia.png)
![Lista de deudas actualizada](..\img\testing-prueba-21-Florencia.png)

### DEFECTOS
No se encontraron defectos, ya que en ambos navegadores las interfaces se veían iguales e interactuaban de la misma forma.

### INCONVENIENTES
No hubo inconvenientes.