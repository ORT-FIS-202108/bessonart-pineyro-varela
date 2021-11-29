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
Se creó la rama `develop` a partir de la rama `main`, donde se realizó todo el trabajo de desarrollo de las distintas funciones de la aplicación.

Luego de finalizado el desarrollo de la aplicación, se realizaron los test unitarios correspondientes, también en la rama `develop`, y una vez obtenido el 100% de cobertura, se realizó un merge a la rama `main`.

A partir de este punto, se trabajó únicamente en el test del sistema, la documentación de issues y generación del informe. Para realizar el test del sistema, se creó la rama `testing` a partir de la rama `main`, y para la generación del informe académico se trabajó en la rama `develop`.

Luego de finalizadas estas etapas, se realizó un merge de las ramas `testing` y `develop` a la rama `main`.

### Documentación del uso de librerías externas (package.json)
En el archivo package.json, bajo los valores `dependencies` y `devDependecies`, se encuentran las dependencias que refieren a las librerías externas utilizadas.

```
"dependencies": {
    "@material/dialog": "^11.0.0",
    "@material/snackbar": "^11.0.0",
    "@material/textfield": "^11.0.0",
    "material-components-web": "^11.0.0"
},
"devDependencies": {
    "@babel/core": "^7.13.16",
    "@babel/preset-env": "^7.13.15",
    "autoprefixer": "^10.2.5",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.2.4",
    "eslint": "^7.28.0",
    "extract-loader": "^5.1.0",
    "file-loader": "^6.2.0",
    "jest": "^27.3.1",
    "postcss-loader": "^5.2.0",
    "sass": "^1.32.11",
    "sass-loader": "^11.0.1",
    "webpack": "^5.36.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^3.11.2"
} 
```

#### Material Design
Material es un sistema de diseño creado por Google que ayuda a crear experiencias digitales de alta calidad fácilmente. Los componentes de Material son bloques de construcción interactivos para crear una interfaz de usuario.

#### Babel
Babel es un compilador para JavaScript, que permite transformar código escrito con las últimas características de JavaScript y transformarlo en un código que sea entendido por navegadores más antiguos.

#### Autoprefixer
Es un plugin de PostCSS que permite analizar código CSS estándar y añadir los prefixes de CSS necesarios para garantizar que la funcionalidad se adapte lo mejor posible a navegadores antiguos. De esta forma, no hay que hacerlo manualmente y mantener dicho código, lo que habitualmente tiende a ser muy difícil.

#### ESLint
ESLint es un analizador estático de código para JavaScript cuya función es la de encontrar errores de calidad o que podrían provocar problemas de compilación. Esto permitió generar un código de alta calidad y fácil entendimiento. 

#### Webpack
Webpack es un empaquetador de módulos. Su objetivo principal es agrupar archivos JavaScript para su uso en un navegador, pero también es capaz de generar un archivo único con todos aquellos módulos que necesita la aplicación para funcionar.

#### Loaders
Un loader permite pre-procesar archivos. Esto indica cómo transformar el código de un módulo en concreto. Provee una forma de manejar los pasos de construcción al hacer varias fases de transformación. 

#### Jest
Jest es un framework para testing que permite escribir y ejecutar test, y fue utilizado para realizar las pruebas unitarias.

#### SASS
SASS es un pre-procesador CSS. Permite generar de manera automática hojas de estilo, más fáciles de mantener y más reutilizables.

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


### Estándares de codificación Google (HTML, CSS, JavaScript)
Para cumplir con los estándares de codificación de Google se utilizó ESLint como herramienta de análisis estático de código de JavaScript. Además, se buscó seguir las guías de Google para la nomenclatura de los elementos, indentado, espaciado y uso de mayúsculas y minúsculas.

Se utilizó como referencia y material de consulta las guías de estilo de Google para [JavaScript](https://google.github.io/styleguide/jsguide.html) y [HTML y CSS](https://google.github.io/styleguide/htmlcssguide.html).

Por otra parte, se realizó una validación del archivo HTML mediante el validador online W3C, obteniendo varios errores y advertencias que no se pudieron solucionar debido a que dicha validación se realizó luego del code freeze.

### Buenas prácticas de OOP
Como buena práctica de OOP, se separó la lógica de la interfaz. Notar que hay dos carpetas: Dominio, donde se encuentra la lógica, clases y tests, e Interfaz, donde se encuentra el código HTML y dos carpetas con los estilos (CSS) y los scripts (JavaScript).

![Carpetas](.\img\estructura_carpetas.jpg)

La lógica de la interfaz se encuentra en el archivo [index.js](interfaz\scripts\index.js), y gestiona todos los inputs y outputs ingresados y pedidos por el usuario en la interfaz.

La interfaz se relaciona con el dominio a través de la clase Sistema, donde es posible gestionar los grupos y amigos, y la clase Grupo, que permite gestionar las deudas de dicho grupo.

Las funciones de las clases Amigo y Deuda sirven para agregar, encontrar o eliminar datos de cada instancia de dichas clases.

**Sistema** 

![Clase Sistema](img\clase_sistema.jpg)

**Grupo**

![Clase Grupo](img\clase_grupo.jpg)


**Amigo**

![Clase Amigo](img\clase_amigo.jpg)

**Deuda**

![Clase Deuda](img\clase_deuda.jpg)


### Análisis estático de código
Para el análisis estático de código se utilizó ESLint y la extensión para Visual Studio Code, que permitió detectar potenciales errores de calidad o que podrían provocar problemas de compilación. 

Como resultado, se logró obtener un código fácilmente mantenible y de alta calidad. A continuación, se detallan algunos ejemplos de su uso.

- **Espaciado:** ESLint ayuda a detectar indentaciones incorrectas y espacios innecesarios que no se ajustan al estándar o que dificultan la legibilidad.
- **Variables e imports:** detecta variables e imports que son declarados pero nunca utilizados. También detecta variables declaradas como `let` que no cambian su valor y que deberían usar `const`.
- **Comillas:** de acuerdo a los estilos de Google, se debe usar comillas simples (''), y no comillas dobles("").

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

### Reportar issues (bugs, improvements, missing features) en GitHub 
A partir de las actividades de testing, se identificaron varios issues, en su mayoría bugs o posibles mejoras, que se documentaron en la [sección de issues del proyecto](https://github.com/ORT-FIS-202108/bessonart-pineyro-varela/issues).

Mientras continuaba el desarrollo del código, se buscó solucionar la mayor cantidad de issues etiquetados como `bugs`, cerrándolos cuando era posible. Los issues etiquetados como `enhancement` son posibles mejoras, que podrían ser implementados en una siguiente fase.

### Aplicar buenas prácticas de reporte de issues
Para el reporte de issues, se siguieron las siguientes prácticas.
- Título: debe ser claro y preciso.
- Resumen: debe ser una descripción clara y detallada del problema.
- Plataforma y ambiente donde se observa el problema.
- Severidad: indica la gravedad con la que afecta la aplicación.
- Prioridad: indica la urgencia con la que se debe resolver el problema.
- Pasos a reproducir: detalla los pasos para reproducir el problema.
- Labels: categorizan el tipo de issue.

### Definir labels para tipos de issue y niveles de severidad
#### Labels
Para categorizar los issues se utilizaron las siguientes labels:
- **Bug:** el problema describe comportamiento incorrecto o inesperado. 
- **Enhancement:** el problema describe posibles mejoras.
- **Help wanted:** indica que quien creó el issue necesita o quiere ayuda para resolver el problema.
- **Wont fix:** indica que el problema no será resuelto.
#### Severidad
Se utilizó los siguientes niveles de severidad:
- **Bloqueante:** impide el funcionamiento de las funcionalidades básicas del sistema.
- **No bloqueante:** problemas en la usabilidad del sistema y la navegación de la interfaz, que no impiden realizar las funcionalidades básicas.
- **Posible mejora:** mejoras en la usabilidad y accesibilidad del sistema.

### Dejar issues abiertos para correcciones o mejoras futuras
Los siguientes issues quedaran abiertos para futuras correciones o mejoras:
- **#5**: División de deudas en un grupo.
- **#7**: Al borrar un amigo que pertenece a un grupo, a ese grupo se le borran todos los integrantes.
- **#8**: Luego de eliminado, se muestran las deudas del grupo seleccionado.
- **#10**: Mejor distinción entre los botones de agregar Amigo y Grupo.
- **#11**: Icono para agregar integrantes poco descriptivo.
- **#12**: Se puede agregar muchas veces a la misma persona a un grupo.
- **#13**: Falta de shortcuts para usuarios expertos.
- **#14**: La función balancear no funciona correctamente en todos los casos.

### Sumarizar número de issues reportados por tipo
Los issues reportados se dividen en los siguientes tipos:
- **Bugs:** 7
- **Enhancement:** 4
- **Help wanted:** 1
- **Wontfix:** 1

### Realizar una evaluación global de la calidad

## Reflexión
### Detalle del trabajo individual

#### Luca:

#### Sofía:

#### Florencia:

### Técnicas aplicadas y aprendizajes
