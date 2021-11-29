# Mis Gastos - Grupo 7

**Link al repositorio:**  [bessonart-pineyro-varela](https://github.com/ORT-FIS-202108/bessonart-pineyro-varela.git)

**Materia:** Fundamentos de Ingeniería de Software

**Profesor:** Alejandro Adorjan

**Grupo:** M4B

|Estudiante | Número de estudiante |
| ---------------- | -------------------- |
| Luca Bessonart   | 231764               |
| Sofía Piñeyro    | 243498               |
| Florencia Varela | 254005               |


## Presentaciones Individuales

#### Sofía Piñeyro - Validación y Verificación de Requerimientos

La validación de requerimientos es el proceso de revisión que verifica que el sistema de software producido cumple con las necesidades del cliente. La verificación de requerimientos es el proceso de revisión que verifica que el sistema producido cumple con las especificaciones en las que se basó. Además de las definiciones de cada proceso, la presentación lista los objetivos, las distintas técnicas de validación y las buenas prácticas a seguir.

Link al material: [Validación y Verificación de Requerimientos](https://docs.google.com/presentation/d/1vqwaJeZCfScrBlU7bJB3fbL41PGVHdLA_z-i4iaZyn8/edit?usp=sharing)

#### Florencia Varela - Material Design: Web Components

Los Material Design - Web components son bloques de construcción interactivos para crear una interfaz de usuario. Estos son componentes web mantenidos por Google que implementan Material Design. Junto con una guía de implementación, en el sitio de Material Design hay una serie de consejos de como utilizar los componentes de forma que respeten las 'guidelines' de UI y UX de Google.

Link al material: [Material Design - Web Components](https://fism4b-2021.slack.com/archives/C02N6D26B42/p1637581182008100)

#### Luca Bessonart -

## Construcción

### Casos de Uso implementados
#### Caso de uso 1.
**Título:** Registrar Amigo

**Curso normal:**
| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
| **1.** Se selecciona el '+'. | **2.** Muestra un diálogo y pide el ingreso de un nombre y, opcionalmente, un método de pago favorito. |
| **3.** Ingresa un nombre y un método de pago favorito. Selecciona 'Agregar'. | **4.** Se agrega el nuevo amigo y actualiza la lista de amigos en pantalla. |

**Cursos alternativos:**

**3.1** Si no se ingresa un nombre: se muestra un mensaje 'Nombre es un campo requerido.'.

**3.2** Si ya existe un amigo con el nombre ingresado: se muestra un mensaje 'Ya existe un amigo con nombre ' y el nombre ingresado.

**3.3** El usuario selecciona 'Cancelar': fin del caso de uso.


#### Caso de uso 2.
**Título:** Eliminar Amigo

**Curso normal:**
| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
| **1.** Selecciona 'Eliminar'. | **2.** Muestra un diálogo pidiendo confirmación. |
| **3.** Confirma la eliminación del amigo | **4.** Se elimina el amigo seleccionado y actualiza la lista de amigos en pantalla. |

**Cursos alternativos:**

**3.1** El usuario selecciona 'Cancelar': fin del caso de uso.

#### Caso de uso 3.
**Título:** Registrar Grupo

**Curso normal:**
| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
| **1.** Se selecciona el '+'. | **2.** Muestra un diálogo y pide el ingreso de un nombre para el grupo. |
| **3.** Ingresa un nombre y selecciona 'Agregar'. | **4.** Se agrega el nuevo grupo y actualiza la lista de grupos en pantalla. |

**Cursos alternativos:**

**3.1** Si no se ingresa un nombre: se muestra un mensaje 'Nombre es un campo requerido.'.

**3.2** Si ya existe un grupo con el nombre ingresado: se muestra un mensaje 'Ya existe un grupo con nombre ' y el nombre ingresado.

**3.3** El usuario selecciona 'Cancelar': fin del caso de uso.

#### Caso de uso 4.
**Título:** Agregar amigos a un grupo

**Curso normal:**
| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
| **1.** Se selecciona el lápiz. | **2.** Muestra un diálogo con una lista de los amigos ingresados. |
| **3.** Selecciona el '+' de los amigos que se quiera agregar  | **4.** Se agrega cada amigo seleccionado y muestra un mensaje 'Se agregó (nombre amigo) al grupo (nombre grupo)'. |
| **5.** Selecciona 'Cerrar' | **6.** Cierra el diálogo. |

#### Caso de uso 5.
**Título:** Eliminar amigos de un grupo

**Curso normal:**
| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
| **1.** Se selecciona el lápiz. | **2.** Muestra un diálogo con una lista de los amigos ingresados. |
| **3.** Selecciona 'eliminar' de los amigos que se quieran eliminar | **4.** Se elimina cada amigo seleccionado y muestra un mensaje 'Se eliminó a (nombre amigo) del grupo (nombre grupo)'. |
| **5.** Selecciona 'Cerrar' | **6.** Cierra el diálogo. |


#### Caso de uso 6.
**Título:** Eliminar Grupo

**Curso normal:**
| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
| **1.** Selecciona 'Eliminar'. | **2.** Muestra un diálogo pidiendo confirmación. |
| **3.** Confirma la eliminación del grupo | **4.** Se elimina el grupo seleccionado y actualiza la lista de grupos en pantalla. |

**Cursos alternativos:**

**3.1** El usuario selecciona 'Cancelar': fin del caso de uso.

#### Caso de uso 7.
**Título:** Agregar Gasto

**Curso normal:**
| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
| **1.** Selecciona un grupo. | **2.** Muestra en pantalla el nombre del grupo, un botón 'Agregar Gasto' y una lista con las deudas. |
| **3.** Selecciona 'Agregar Gasto' | **4.** Muestra un diálogo y pide el ingreso de la descripción, monto y responsable del pago del gasto (por defecto, seleccionado 'YO'). |
| **5.** Ingresa la descripción, monto y selecciona quién pagó. Selecciona 'Agregar'. | **6.** Cierra el diálogo, agrega el gasto, balancea las deudas y actualiza la lista de deudas. |

**Cursos alternativos:**

**2.1** Si no hay deudas, muestra 'No tienes ninguna deuda'.

**5.1** No ingresa el monto, muestra un mensaje 'Debe indicar el monto total'.

**5.2** No ingresa la descripción, muestra un mensaje 'Debe ingresar una descripción'.

**5.3** El usuario selecciona 'Cancelar': fin del caso de uso.


#### Caso de uso 8.
**Título:** Saldar Deuda

**Curso normal:**
| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
| **1.** Selecciona un grupo. | **2.** Muestra en pantalla el nombre del grupo, un botón 'Agregar Gasto' y una lista con las deudas. |
| **3.** Selecciona 'Eliminar' de una deuda | **4.** Muestra un diálogo pidiendo confirmación. |
| **5.** Confirma la eliminación de la deuda | **4.** Se elimina la deuda seleccionada y actualiza la lista de deudas del grupo en pantalla. |

**Cursos alternativos:**

**5.1** El usuario selecciona 'Cancelar': fin del caso de uso.

### Configuración de plataforma tecnológica para desarrollo y producción


### Documentación del uso de librerías externas (package.json)

## Interfaz de usuario

Interfaz de usuario web / mobile (responsive)

Página única con navegación entre secciones

Implementación: Material Design Web Components

Aplicar un sistema de diseño y principios de usabilidad

Cumplimiento de estándar de accesibilidad WCAG

Seguir especificación de estilo

## Codificación

### IDE Visual Studio Code: configuración común del equipo
Para el proyecto todos los integrantes del equipo usamos la IDE Visual Studio Code. A ésta le agregamos la siguente extensión para manejar el análisis estático del código :

- Name: ESLint
- Id: dbaeumer.vscode-eslint
- Description: Integrates ESLint JavaScript into VS Code.
- Version: 2.2.2
- Publisher: Microsoft
- VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint 


### Estándares de codificación Google (HTML, CSS, JavaS)

### Buenas prácticas de OOP
Como buena práctica de OOP, se separó la lógica de la interfaz. Notar que hay dos carpetas: Dominio, donde se encuentra la lógica, clases y tests, e Interfaz, donde se encuentra el código HTML y dos carpetas con los estilos (CSS) y los scripts (JavaScript).

### Análisis estático de código


## Test unitario

Cada clase de la carpeta [Dominio](./dominio) tiene un test, con el mismo nombre de la clase, que prueba todas las funciones de ésta. 

Con dichos tests se buscó comprobar el correcto funcionamiento de todos los métodos de cada clase y detectar la existencia de código inaccesible o valores inesperados. Para esto, se buscó un 100% de cobertura de las pruebas sobre el código.

![Evidencia del 100% de cobertura](.\img\Pruebas.jpeg)

Notar que dentro de la clase Grupo no se incluyó el método balancear en las pruebas. Esto se debe a que dicha función no funciona correctamente en todos los casos, por lo que se decidió reportarlo como issue y no incluirlo en los tests.


## Test de sistema

Realizar test de sistema en un entorno separado del desarrollo

Generar casos de prueba aplicando técnica partición equivalente

Detallar sesiones de prueba exploratoria

## Reporte de issues

- Reportar issues (bugs, improvements, missing features) en GitHub 

- Aplicar buenas prácticas de reporte de issues

- Definir labels para tipos de issue y niveles de severidad

- Dejar issues abiertos para correcciones o mejoras futuras

- Sumarizar número de issues reportados por tipo

- Realizar una evaluación global de la calidad

## Reflexión
### Detalle del trabajo individual

#### Luca:

#### Sofía:

#### Florencia:

### Técnicas aplicadas y aprendizajes
