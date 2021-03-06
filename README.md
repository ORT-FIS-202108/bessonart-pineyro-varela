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

### Requerimientos implementados
#### Requerimientos Funcionales
- RF3: Registro de gasto grupal
- RF4: Borrar gasto grupal
- RF6: Crear grupo
- RF7: No deber haber login
- RF8: Registrar amigo
- RF9: Eliminar amigo de un grupo
- RF10: Eliminar amigo
- RF11: Pagar deuda
- RF14: Consultar Deudas
- RF15: Balancear (Parcialmente implementado)

#### Requerimientos No Funcionales
- RNF1: Primary Color: Deep Purple 700.
- RNF2: Secondary Color: Teal 700. 
- RNF3: Font: Roboto.
- RNF4: Icons: filled.
- RNF7: La aplicación debe de llevar el nombre de MisGastos.
- RNF8: Los lenguajes a utilizar son HTML, JavaScript y CSS.

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

![Web-Amigos](./img/web-amigos.jpg)
![Web-Agregar_Amigo](./img/web-agregar_amigo.jpg)
![Web-Eliminar_Amigo](./img/web-eliminar_amigo.jpg)
![Web-Grupo](./img/web-grupos.jpg)
![Web-Editar_Grupo](./img/web-editar_grupo.jpg)
![Web-Agregar-Gasto](./img/web-agregar_gasto.jpg)
![Web-Deudas](./img/web-deudas.jpg)
![Web-Saldar-Deuda](./img/web-saldar_deuda.jpg)

**Mobile:**

![Mobile-Amigos](./img/mobile-amigos.jpg)
![Mobile-Agregar_Amigo](./img/mobile-agregar_amigo.jpg)
![Mobile-Eliminar_Amigo](./img/mobile-eliminar_amigo.jpg)
![Mobile-Agregar_Grupo](./img/mobile-agregar_grupo.jpg)
![Mobile-Editar_Grupo](./img/mobile-editar_grupo.jpg)
![Mobile-Agregar-Gasto](./img/mobile-agregar_gasto.jpg)
![Mobile-Deudas](./img/mobile-deudas.jpg)
![Mobile-Saldar-Deuda](./img/mobile-saldar_deuda.jpg)

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

![Achecker index.html](./img/Achecker.PNG)

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
Elementos input de tipo text field sin label o sin texto en el atributo label: #17

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

![Carpetas](./img/estructura_carpetas.jpg)

La lógica de la interfaz se encuentra en el archivo [index.js](interfaz/scripts/index.js), y gestiona todos los inputs y outputs ingresados y pedidos por el usuario en la interfaz.

La interfaz se relaciona con el dominio a través de la clase Sistema, donde es posible gestionar los grupos y amigos, y la clase Grupo, que permite gestionar las deudas de dicho grupo.

Las funciones de las clases Amigo y Deuda sirven para agregar, encontrar o eliminar datos de cada instancia de dichas clases.

**Sistema** 

![Clase Sistema](img/clase_sistema.jpg)

**Grupo**

![Clase Grupo](img/clase_grupo.jpg)


**Amigo**

![Clase Amigo](img/clase_amigo.jpg)

**Deuda**

![Clase Deuda](img/clase_deuda.jpg)


### Análisis estático de código
Para el análisis estático de código se utilizó ESLint y la extensión para Visual Studio Code, que permitió detectar potenciales errores de calidad o que podrían provocar problemas de compilación. 

Como resultado, se logró obtener un código fácilmente mantenible y de alta calidad. A continuación, se detallan algunos ejemplos de su uso.

- **Espaciado:** ESLint ayuda a detectar indentaciones incorrectas y espacios innecesarios que no se ajustan al estándar o que dificultan la legibilidad.
- **Variables e imports:** detecta variables e imports que son declarados pero nunca utilizados. También detecta variables declaradas como `let` que no cambian su valor y que deberían usar `const`.
- **Comillas:** de acuerdo a los estilos de Google, se debe usar comillas simples (''), y no comillas dobles("").

## Test unitario

Cada clase de la carpeta [Dominio](./dominio) tiene un test, con el mismo nombre de la clase, que prueba todas las funciones de ésta. 

Con dichos tests se buscó comprobar el correcto funcionamiento de todos los métodos de cada clase y detectar la existencia de código inaccesible o valores inesperados. Para esto, se buscó un 100% de cobertura de las pruebas sobre el código.

![Evidencia del 100% de cobertura](./img/Pruebas.jpeg)

Notar que dentro de la clase Grupo no se incluyó el método balancear en las pruebas. Esto se debe a que dicha función no funciona correctamente en todos los casos, por lo que se decidió reportarlo como issue y no incluirlo en los tests.


## Test de sistema

Realizar test de sistema en un entorno separado del desarrollo

Generar casos de prueba aplicando técnica partición equivalente
Se utilizo el tipo de prueba Caja Negra - Partición de Equivalencia para cada caso de uso y luego se condujeron pruebas de los mismos 
### Caso de uso 1
#### Variables de entrada:
-Nombre Amigo
-Metodo de pago favortio 
#### Clases de equivalencia
|Entrada|Clases validas|Clases invalidas|
|-------|--------------|----------------|
|Nombre Amigo|-1)Nombre no registrado|-2)Nombre registrado -3)Input vacio
|Metodo de pago favortio|-4)Todo input -5)Input vacio |  | 
#### Casos de prueba:
|Caso de Prueba| Nombre |Metodo de pago favorito| Resultado esperado | Clases de equivalencia cubiertas|
|--------------|--------|-----------------------|--------------------|---------------------------------|
|CP1|Juan|Tarjeta|Mensaje:Se editó correctamente la lista de amigos| 1, 4|
|CP2|Juan|""|Mensaje:Se editó correctamente la lista de amigos| 1, 5|
|CP2|YO|Tarjeta|Mensaje:ya existe un amigo con nombre YO| 2, 4|
|CP3|YO|""|Mensaje:ya existe un amigo con nombre YO| 2, 5|
|CP4|""|Tarjeta|Mensaje:Nombre es un campo requerido.| 3, 4|

### Caso de uso 2
#### Variables de entrada:
-Amigo
#### Clases de equivalencia
|Entrada|Clases validas|Clases invalidas|
|-------|--------------|----------------|
|Amigo|-1)Amigo seleccionado| |
#### Casos de prueba:
|Caso de Prueba| Amigo | Resultado esperado | Clases de equivalencia cubiertas|
|--------------|-------|--------------------|---------------------------------|
|CP1|Amigoexistente| Mensaje: Se elimino a Amigoexistente de tus amigos |1

### Caso de uso 3
#### Variables de entrada:
-Nombre Grupo
#### Clases de equivalencia
|Entrada|Clases validas|Clases invalidas|
|-------|--------------|----------------|
|Nombre Grupo|-1)Nombre no registrado|-2)Nombre registrado -3)Input vacio|
#### Casos de prueba:
|Caso de Prueba| Amigo | Resultado esperado | Clases de equivalencia cubiertas|
|--------------|-------|--------------------|---------------------------------|
|CP1|Nombre| Se agrega el Grupo "Nombre" a la lista de grupos|1|
|CP2|Nombre| Mensaje: Ya existe un grupo con nombre Nombre|2|
|CP3|""|  Mensaje: Nombre es un campo requerido|1|


### Caso de uso 4
Nota: Se utiliza grupoActual como nombre del grupo en que se esta agregando el amigo
#### Variables de entrada:
-Amigo
#### Clases de equivalencia
|Entrada|Clases validas|Clases invalidas|
|-------|--------------|----------------|
|Amigo|-1)No pertenece al grupoActual|-2)Pertenece al grupoActual|
#### Casos de prueba:
|Caso de Prueba| Amigo | Resultado esperado | Clases de equivalencia cubiertas|
|--------------|-------|--------------------|---------------------------------|
|CP1|AmigoSeleccionado| Mensaje: Se agrega AmigoSeleccionado a grupoActual|1|
|CP2|AmigoSeleccionado| No se agregar el AmigoSeleccionado a grupoActual|2|


### Caso de uso 5
Nota: Se utiliza grupoActual como nombre del grupo en que se esta agregando el amigo
#### Variables de entrada:
-Amigo
#### Clases de equivalencia
|Entrada|Clases validas|Clases invalidas|
|-------|--------------|----------------|
|Amigo|-1)No pertenece al grupoActual|-2)Pertenece al grupoActual|
#### Casos de prueba:
|Caso de Prueba| Amigo | Resultado esperado | Clases de equivalencia cubiertas|
|--------------|-------|--------------------|---------------------------------|
|CP1|AmigoSeleccionado| Mensaje: Se elimino AmigoSeleccionado de grupoActual|1|
|CP2|AmigoSeleccionado| No se elimina el AmigoSeleccionado de grupoActual|2|

### Caso de uso 6
#### Variables de entrada:
-Grupo
#### Clases de equivalencia
|Entrada|Clases validas|Clases invalidas|
|-------|--------------|----------------|
|Grupo|-1)Grupo seleccionado| |
#### Casos de prueba:
|Caso de Prueba| Amigo | Resultado esperado | Clases de equivalencia cubiertas|
|--------------|-------|--------------------|---------------------------------|
|CP1|Grupoexistente| Mensaje: Se elimino a Grupoexistente de tus grupos |1|

### Caso de uso 7
#### Variables de entrada:
-Grupo
-Monto
-Descripción
-Deudor (quien pago)
#### Clases de equivalencia
|Entrada|Clases validas|Clases invalidas|
|-------|--------------|----------------|
|Grupo | -1)Grupo seleccionado| |
|Monto| -2)Monto mayor a cero|-3)Monto menor o igual cero|
|Descripción| -4)Todo input  | -5)Input vacio |
|Deudor| -6)Amigo Seleccionado| |
#### Casos de prueba:
|Caso de Prueba| Grupo |Monto|Descripción|Deudor| Resultado esperado | Clases de equivalencia cubiertas|
|--------------|-------|-----|-----------|------|--------------------|---------------------------------|
|CP1|Grupoexistente| 10 | Detalles |Amigoseleccionado|Mensaje: se agrego correctamente el gasto|1,2,4,6|
|CP2|Grupoexistente| 10 | Detalles |Amigoseleccionado|Mensaje: se debe ingresar una descripción|1,2,5,6|
|CP3|Grupoexistente| 0  | Detalles |Amigoseleccionado|No se debe agregar el gasto|1,3,5,6|

### Caso de uso 8
#### Variables de entrada:
-Deuda
#### Clases de equivalencia
|Entrada|Clases validas|Clases invalidas|
|-------|--------------|----------------|
|Deuda|-1)Deuda seleccionada| |
#### Casos de prueba:
|Caso de Prueba| Deuda | Resultado esperado | Clases de equivalencia cubiertas|
|--------------|-------|--------------------|---------------------------------|
|CP1|Deuda entre A y B| Mensaje: Se saldo la deuda de A con B |1|

### Detallar sesiones de prueba exploratoria
Se realizaron tres sesiones de pruebas exploratorias (una por integrante del equipo). Estas pruebas consisten en definir una misión y durante una sesión de prueba con tiempo acotado, realizar la exploración anotando eventos relevantes (defectos encontrados, inconvenientes, mejoras, riesgos).

Debido a las dimensiones de nuestra aplicación, hicimos sesiones cortas, acotadas a una duración de 30 minutos.

Se obtuvo los siguientes resultados:
- [Prueba exploratoria #1](testing-exploratorio/testing-1.md)
- [Prueba exploratoria #2](testing-exploratorio/testing-2.md)
- [Prueba exploratoria #3](testing-exploratorio/testing-3.md)

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
- **Bugs:** 7
- **Enhancement:** 7
- **Help wanted:** 1
- **Wontfix:** 1

### Realizar una evaluación global de la calidad
Luego de finalizado el proyecto, se realizó una evaluación global de la calidad del producto final. Durante esta evaluación, se consideraron aspectos de calidad de la interfaz de la aplicación, el cumplimento de los estándares y buenas prácticas, la cobertura de las pruebas unitarias, los resultados del test de sistema y los issues sin resolver.

**Usabilidad**

El Análisis Heurístico dio como resultado que 4 de las 10 heurísticas de Nielsen se cumplen totalmente. Con esto, podemos concluir que es necesario seguir trabajando en busca de que todas se cumplan totalmente.

Para cada heurística con cumplimiento parcial o incumplimiento, se creó un respectivo issue en el proyecto. Luego de resueltos dichos issues, se deberá realizar nuevamente el análisis heurístico hasta lograr que las 10 heurísticas se cumplan totalmente.

**Estándares de Codificación y Buenas Prácticas de OOP**

Esta evaluación devolvió resultados positivos, debido a la utilización de ESLint. De todas formas, se obtuvo algunos errores al validar con W3C, por lo que también se deberá seguir trabajando hasta obtener una correcta validación.

En cuanto a las buenas prácticas de OOP, desde el inicio se diseñó la aplicación de forma de tener una separación clara de Dominio e Interfaz, por lo que se logró de manera correcta.

**Pruebas Unitarias**

Se logró una cobertura del 100% de las clases de Dominio, lo que cumplió el objetivo propuesto. Esto se logró gracias al framework Jest.

Además, todas las pruebas ejecutadas de todas las clases devolvieron como resultado PASSED, por lo que se puede afirmar que las funcionalidades del Dominio, (sin ser por Balancear, que no fue testeada, sino que reportada como issue) funcionan correctamente.

**Test de Sistema**

Se realizaron pruebas de Partición de Equivalencias y Pruebas Exploratorias. 

En las pruebas de Partición de Equivalencia se pudieron testear todos los casos de prueba definidos en esta nueva etapa.

El resultado del Test de Sistema es bueno, ya que se logró descubrir varios issues de funcionamiento inesperado o incorrecto. Sin embargo, esto afecta la calidad global de la aplicación.

**Issues sin resolver**

En la mayoría de estas etapas se descubrieron issues, que fueron reportados pero claramente no fueron resueltos, debido al code freeze.

Notamos que los issues abiertos no son bloqueantes, por lo que la aplicación puede tener un funcionamiento correcto.

**Conclusión**

En base a todos estos puntos mencionados, podemos concluír que hay varios puntos a mejorar en busca de una excelente calidad de código. 

En general, la aplicación cumple las funcionalidades básicas y no tiene problemas que interrumpan su funcionamiento, pero hay varias mejoras para hacer, identificadas en los issues.


## Reflexión
### Detalle del trabajo individual
Si bien trabajamos en conjunto en varias oportunidades por videollamada o verificamos el trabajo que realizaban los otros, a continuación se detalla la participación individual de cada uno.

#### Luca:
- HTML, CSS y JS (funciones y estructura de la parte de Grupos).
- Implementación del formulario de agregar grupo, eliminar grupo y editar integrantes.
- Solución de issues.
- Test Unitarios de la clase Sistema.
- Test de sistema.
- Reporte de issues.
- Documentación.

#### Sofía:
- HTML, CSS y JS (funciones y estructura de la parte de Deudas).
- Implementación del formulario de agregar deuda, saldar deuda y conección entre grupos y deudas, y funcionalidad balancear.
- Solución de issues.
- Test Unitarios de la clase Deuda, Grupo y Sistema.
- Test de W3C.
- Reporte de issues, sumarización de issues. 
- Documentación.

#### Florencia:
- HTML, CSS y JS (funciones y estructura de la parte de Amigos y estructura general de la página).
- Implementación del formulario de agregar amigo, eliminar amigo y editar integrantes de un grupo.
- Solución de issues.
- Test Unitarios de la clase Amigo, Grupo y Sistema.
- Test de WCAG. 
- Reporte de issues.
- Documentación.


### Técnicas aplicadas y aprendizajes
A lo largo del proyecto desarollamos las técnicas y aprendizajes dadas en el curso. La correcta validación y verificación de requerimientos, el uso de Git y GitHub, el manejo de ramas, versiones e issues, el desarrollo de una página web con HTML, CSS y JS, junto con NodeJS. También la importancia de la calidad del código, siguiendo los correspondientes estándares, lo que facilita el entendimiento, mantenimiento y reutilización del mismo, el uso de Jest y los distintos tipos de testing.

Respecto a la primer entrega mejoramos grandemente como equipo, para esta entrega tuvimos mejor comunicación y mejor manejo del tiempo. Nos organizamos mejor, distribuyendo las tareas en cuanto decidimos las funciones a implementar. Tuvimos una demora a la hora de seleccionar las funciones principales para desarollar, que nos retraso una semana, por lo que al implementar la funcion balancear, decidimos no hacerlo completamente. Otro contra-tiempo que tuvimos fue un problema que surgió de unos cambios hechos a los archivos .json el viernes previo al code-freeze. El sábado en la mañana descubirmos que no funcionaba la aplicación, estuvimos todo el día viendo el problema y recién a la noche pudimos resolverlo (se puede ver en GitHub que revertimos los úlimos commits realizados hasta encontrar el commit donde se habian modificado los archivos).

Respecto a el uso de Material Design nos parecio que se nos brindó poca información, nos resultó bastante complicado entender como se colocaban los elementos en el HTML y como manipularlos con JavaScript. Pensamos que de haber, por lo pronto, recibido alguna clase básica de como hacer un form con MD se nos hubiera facilitado enormemente la entrega y ayudado a enfocarnos en la secciones de testing y de usabilidad de la interfaz.

NodeJS y Jest nos resultaron muy útile, se no dificultó obtener el 100% de cobertura con este último. Pero en base a esas dificultades aprendimos lo que son las 'branches' dentro de una funcion y como encontrarlas. 

En general, encontramos el proyecto interesante, pero muy justo de tiempo en esta segunda entrega. Recolectamos conceptos y técnicas que consideramos que nos vana resultar útiles en el futuro, la parte de testing y UI. 

