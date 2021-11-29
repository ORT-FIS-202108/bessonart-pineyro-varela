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

### Interfaz de usuario web / mobile (responsive)
La aplicación cuenta con una interfaz responsive que se ajusta al tamaño del dispositivo y/o browser.

Al momento de diseñar y agregar los componentes se tuvo en cuenta que éstos se ajustaran de manera que no interfirieran entre ellos y mantuviesen el sistema de diseño.

A continuación se muestra un ejemplo de la página principal y su comportamiento responsive en diferentes dispositivos y tamaños.

**Web:**

![Web-Amigos](img\web-amigos.jpg)
![Web-Agregar_Amigo](img\web-agregar_amigo.jpg)
![Web-Eliminar_Amigo](img\web-eliminar_amigo.jpg)
![Web-Grupo](img\web-grupos.jpg)
![Web-Editar_Grupo](img\web-editar_grupo.jpg)
![Web-Agregar-Gasto](img\web-agregar_gasto.jpg)
![Web-Deudas](img\web-deudas.jpg)
![Web-Saldar-Deuda](img\web-saldar_deuda.jpg)

**Mobile:**

![Mobile-Amigos](img\mobile-amigos.jpg)
![Mobile-Agregar_Amigo](img\mobile-agregar_amigo.jpg)
![Mobile-Eliminar_Amigo](img\mobile-eliminar_amigo.jpg)
![Mobile-Agregar_Grupo](img\mobile-agregar_grupo.jpg)
![Mobile-Editar_Grupo](img\mobile-editar_grupo.jpg)
![Mobile-Agregar-Gasto](img\mobile-agregar_gasto.jpg)
![Mobile-Deudas](img\mobile-deudas.jpg)
![Mobile-Saldar-Deuda](img\mobile-saldar_deuda.jpg)

### Página única con navegación entre secciones
La aplicación se desarrolló en un único archivo HTML con diferentes secciones, que dependiendo de las acciones del usuario se muestran u ocultan.

Por ejemplo, la sección de Amigos se muestra al iniciar el sitio, no así la sección de Grupos y de Deudas. Para visualizarlas, es necesario que el usuario seleccione la pestaña de Grupos y un grupo cualquiera, lo que oculta la sección de Amigos, y muestra Grupos y Deudas correspondientemente. Si el usuario vuelve a seleccionar la pestaña de Amigos, Grupos y Deudas se ocultan, y se muestra Amigos.

Con el fin de implementar esta navegación, se utilizó el componente tab-bar de Material Design para navegar entre las secciones. Esta lógica de ocultar y mostrar secciones se encuentra en el archivo index.js, ya que es parte de la interfaz de usuario.

### Implementación: Material Design Web Components

A continuación se detallan los componentes de Material Design utilizados para construir el sitio.

- material-theme con colores primario, secundario y de background.
- mdc-icons - Íconos de material design que se muestran en diferentes secciones/componentes del sitio.
- app-bar-top - Sección para ubicar nombre del sitio, botones para navegar entre las dos secciones principales: Amigos y Grupos.
- tab-bar - Sección para tabs de navegación entre secciones del sitio.
- tab-scroller - Hace posible hacer scroll en la tab bar, para mostrar tabs no visibles en caso de que el tamaño del browser/dispositivo no lo permita.
- tab-indicator - Indicador de tab seleccionada.
- mdc-buttons - Botones para el boton de agregar gasto.
- icon-buttons - Botones para eliminar un Amigo o eliminar y editar los participantes de un Grupo.
- mdc-list - Listado de gastos.
- line-ripple - Efecto de click en los grupos.
- text-fields - Campos de los forms de agregar amigo, grupo y gasto.
- mdc-fab - Botones flotantes para el agregar Amigo y agregar Grupo.

### Aplicar un sistema de diseño y principios de usabilidad

**Sistema de Diseño**

Se utilizó el sistema de diseño Material Design con sus respectivos componentes (tabs, botones, íconos, listas, etc.). Se siguieron los lineamientos y recomendaciones para la utilización de cada componente, que abarcan aspectos de diagramado, navegación, y usabilidad entre otros. Estas recomendaciones pueden ser encontradas en el sitio web de Material Design (mas información y el link al sitio se pueden encontrar en el archivo de Material Design: Web components al comienzo del documento)

**Análisis Heursístico**

Con el fin de identificar fallas de usabilidad en la interfaz del sistema, realizamos un Análisis Heursístico comparando la interfaz y su funcionamiento con las 10 heurísticas de usabilidad de Jakob Nielsen.

Se evaluó el cumplimiento de cada una de las 10 heurísticas en todo el sitio, y en base al resultado del cumplimiento se asigna total, parcial o no cumplido y se crean issues en caso de ser necesario.

A continuación se detalla el nivel de cumplimiento para cada heurística:

1. Visibilidad del estado del sistema: Total
2. Adecuación entre el sistema y el mundo real: Total
3. Libertad y control por parte del usuario: Total
4. Consistencia y estándares: Parcial
5. Prevención de errores: Parcial
6. Reconocimiento antes que recuerdo: Parcial
7. Flexibilidad y eficiencia en el uso: No cumplido
8. Diseño estético y minimalista: Total
9. Ayuda a los usuarios a reconocer, diagnosticar y recuperarse de los errores: Parcial
10. Ayuda y documentación: No cumplido

El resultado final de la evaluación muestra que hay varias de las heurísticas que no se cumplen o se cumplen parcialmente. Por lo tanto se deberá trabajar en los issues generados durante esta evaluación y una vez cerrados se deberá volver a hacer la evaluación para validar de que se hayan resuelto las deficiencias de usabilidad.

### Cumplimiento de estándar de accesibilidad WCAG

Para la validación del cumplimiento del estándar de accessibilidad WCAG, se utilizó la herramienta AChecker.

Esta herramienta permite subir un archivo (index.html en este caso), y validar el cumplimiento de estándares de usabilidad. Al momento de validar el archivo se seleccionó el estándar Web Content Accessibility Guidelines (WCAG), Version 2.0, Level AA que es el estándar seleccionado por defecto en el validador.

![Achecker index.html](.\img\Achecker.png)

**Resultados:**
La validación arrojó 22 errores separados en siete categorías:

1. Text Alternatives: Provide text alternatives for any non-text content.
2. Adaptable: Create content that can be presented in different ways (for example simpler layout) without losing information or structure.
3. Distinguishable: Make it easier for users to see and hear content including separating foreground from background.
4. Navigable: Provide ways to help users navigate, find content, and determine where they are.
5. Readable: Make text content readable and understandable.
6. Input Assistance: Help users avoid and correct mistakes.
7. Compatible: Maximize compatibility with current and future user agents, including assistive technologies.

Para ver un listado detallando cada error, puede acceder al archivo: [Listado de Errores](./docs/listadoErrores.txt)

En base a los resultados obtenidos, se crearon en GitHub los issues correspondientes:

Elementos de imagen sin texto alternativo: #15
Al comienzo del HTML no se le indica cuál es el idioma: #16
Elementos input de tipo text field sin label o sin texto en el atributo label: #7

### Seguir especificación de estilo
Se construyó el sitio siguiendo las especificaciones definidas en la letra para la letra, colores y tipos de íconos:

Colors primary: Deep Purple 700, secondary: Teal 700
Font: Roboto
Icons: filled

Tanto los colores como la fuente, fueron definidas en el archivo index.scss.

Para los íconos, al momento de seleccionarlos en la página de Google Fonts, se seleccionó el filtro 'filled'.

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
- **#15**: Imagen de logo de la app sin texto alternativo.
- **#16**: Al html no se le indica el idioma de la app.
- **#17**: Hay varios text-fields sin label.

### Sumarizar número de issues reportados por tipo
Los issues reportados se dividen en los siguientes tipos:
- **Bugs:** 5
- **Enhancement:** 7
- **Help wanted:** 1
- **Wontfix:** 1

### Realizar una evaluación global de la calidad

## Reflexión
### Detalle del trabajo individual
Si bien trabajamos en conjunto en varias oportunidades por videollamada o verificamos el trabajo que realizaban los otros, a continuación se detalla la participación individual de cada uno.

#### Luca:
HTML, CSS y JS (funciónes de Grupos).
Implementación del formulario de agregar grupo, eliminar grupo y editar integrantes.
Solución de issues.
Test Unitarios de la clase Sistema.
Test de sistema.
Reporte de issues.
Documentación.

#### Sofía:
HTML, CSS y JS (funciónes de Deudas).
Implementación del formulario de agregar deuda, saldar deuda y conección entre grupos y deudas.
Test Unitarios de la clase Deuda.
Test de W3C.
Reporte de issues, sumarización de issues. 
Documentación.

#### Florencia:
HTML, CSS y JS (funciónes de Amigos y estructura general de la página).
Implementación del formulario de agregar amigo, eliminar amigo y editar integrantes de un grupo.
Test Unitarios de la clase Amigo, Grupo y Sistema.
Reporte de interfaz de usuario. 
Documentación.


### Técnicas aplicadas y aprendizajes
Detallamos las técnicas y aprendizajes obtenidas a lo largo del curso:
- Correcta validación y verificación de requerimientos.
- Uso de Git y GitHub, el manejo de ramas, versiones e issues. 
- Desarrollo de una página web en HTML, CSS y JS, junto con NodeJS.
- Importancia de la calidad del código, siguiendo los correspondientes estándares, lo que facilita el entendimiento, mantenimiento y reutilización del mismo.
- Uso de Jest, lo que nos permite analizar que el código sea de calidad y sin errores.
- Testing: 