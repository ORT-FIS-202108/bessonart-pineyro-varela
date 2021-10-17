# Mis Gastos - Grupo 7

- Luca Bessonart - 231764
- Sofía Piñeyro - 243498
- Florencia Varela - 254005
---
## Glosario
- Usuario: dentro de este proyecto se considera usario al público que usará la aplicación, no como un usuario que requiere un login.
- 
## Repositorio Git

### Creación y uso de repositorios locales y remotos
Un repositorio es una estructura de directorios en disco, donde se almacenan los elementos de software producidos a lo largo de todo un proyecto.
Git es el sistema de control de versiones distribuido más utilizado del mundo. Es un proyecto de código abierto maduro y con un mantenimiento activo que desarrolló originalmente Linus Torvalds en el año 2005.
GitHub es una plataforma de desarrollo colaborativo de software para alojar proyectos utilizando el sistema de control de versiones Git. GitHub aloja respositorios de código y brinda herramientas muy útiles para el trabajo en equipo.
Para este proyecto, se creó el repositorio en GitHub. Cada integrante del equipo trabajará en un repositorio local, que se mantendrá actualizado con el repositorio remoto.
### Comandos Git ejecutados desde terminal y desde el IDE
Los comandos de Git que utilizamos son los siguientes.

`git clon <repo url>`

Este comando se usa para crear una copia o clonar un repositorio remoto. Git es compatible con varios protocolos de red y sus formatos de URL correspondiente. 

`git pull <remoto> <rama>`

Este comando se emplea para extraer y descargar contenido desde un repositorio remoto y actualizar al instante el repositorio local para reflejar ese contenido, es decir, recupera las nuevas confirmaciones y las fusiona en una rama local.
`<remoto>` es el nombre del repositorio remoto, por lo general `origin`, y `<rama>` es el nombre de la rama local, por ejemplo `main`.
Notar que si hay cambios no confirmados, la fusión fallará y la rama local quedará intacta.

`git push <remoto> <rama>`

Este comando se usa para subir cambios realizados en una rama local a un repositorio remoto. Envía la rama especificada, junto con toos los commits y objetos internos necesarios, creando una rama local en el repositorio de destino.
Se puede usar `git push <remoto> --all` para enviar todas las ramas locales al repositorio remoto.  

`git status`

Este comando muestra el estado del directorio de trabajo y del área del entorno de ensayo. Permite ver los cambios que se han preparado, los que no y los archivos en los que Git no está realizando un seguimiento. 

`git log`

Este comando muestra las instantáneas confirmadas. Te permite ver el historial del proyecto, filtrarlo y buscar cambios concretos. 
Se puede personalizar de distintas maneras:
* `git log -n <limite>`, limita el número de confirmaciones que se muestran.
* `git log --oneline`, permite agrupar cada confirmación en una sola línea.
* `git log --stat`, incluye información sobre los archivos que se han modificado y el número relativo de líneas que se han añadido o eliminado en cada uno de ellos.
* `git log -p`, muestra la diferencia completa de cada confirmación.
* `git log --author="<nombre>"`, busca confirmaciones por un autor en concreto.
* `git log --grep="<patrón>"`, busca confirmaciones con un mensaje de confirmación que coincida con el patrón.
* `git log <archivo>`, muestra las confirmaciones que incluyen el archivo especificado.

`git add <file>`

Este comando añade un cambio del directorio de trabajo en el entorno de ensayo, indicando a Git que se quiere incluir actualizaciones en un archivo concreto en la próxima confirmación. 
Existen otras opciones para ejecutar este comando, como:

* `git add <directory>`, prepara todos los cambios de `<directory>`.
* `git add -A`, prepara todos los archivos que hay en el repositorio. Esto incluye archivos nuevos, modificados y eliminados. La opción `-A` es equivalente a `--all`.
* `git add .`, prepara los archivos nuevos y modificados, pero no los eliminados.
* `git add -u`, prepara los archivos modificados y eliminados, pero no los archivos nuevos.

Notar que `git add` no afecta al repositorio de manera significativa, los cambios no se registran hasta ejecutar `git commit`.

`git commit`

Las confirmaciones de cambios realizados se crean con este comando para capturar el estado de un proyecto en ese determinado momento. El comando abrirá un editor de texto pidiendo un mensaje para la confirmación. Una vez escrito el mensaje, guarda el archivo y cierra el editor para crear la confirmación.

Se puede utilizar un comando de atajo `git commit -m "mensaje"`, que crea inmediatamente una confirmación con el mensaje determinado. 


`git branch`

Este comando enumera todas las ramas que hay en un repositorio.
Existen otras opciones que permiten crear y eliminar ramas, así como cambiar su nombre. Estas son:
* `git branch <rama>`, crea una nueva rama llamada `<rama>`.
* `git branch -d <rama>`, elimina la rama especificada. Git evita que la rama se elimine si tiene cambios que no se han fusionado, por lo que es una operación segura.
* `git branch -D <rama>`, fuerza la eliminación de la rama especificada.
* `git branch -m <rama>`, cambia el nombre de la rama actual a `<rama>`.
* `git branch -a`, enumera todas las ramas remotas.

`git checkout <rama>`

Este comando permite cambiar a una rama específica ya existente. 
Acepta el argumento `-b <nueva rama>`, que permite crear una nueva rama y cambiar a ella al instante.

---
## Versionado
### Aplicar buenas prácticas de versionado
A partir del décimo commit empezamos a implementar el siguiente sistema de versionado, donde el mensaje del commit tiene la siguiente estructura:
1. **fix:** un commit del tipo `fix` arregla un bug del código.
2. **feat:** un commit del tipo `feat` introduce una nueva feature al código.
3. *types* además de `fix` y `feat` se pueden usar, por ejemplo, `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, y otros.

Este sistema de versionado está basado en [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/ "Conventional Commits").
### Uso de ramas separadas de 'main'
Utilizamos dos ramas principales, **Develop** y **Main**.
Main: push final, cuando funciona la app.
Develop: para ir desarrollando la app.
Utilizamos la rama **Hotfix** para solucionar problemas y errores.
### Resumen de commits y evolución del proyecto

---
## Elicitación

### Lluvia de Ideas
Una de las técnicas de elicitación utilizada fue la lluvia o tormenta de ideas. Esta técnica permite liberar la creatividad de los equipos, generando un número extenso de ideas. Se obtuvo la siguiente lista de posibles funciones.
- Ingresar nombre de usuario, para personalizar los mensajes a mostrar.
- Elegir foto de perfil, de una lista predefinida.
- Ingresar preferencias, p.e. medio de pago favorito.
- Registrar gastos personales.
- Ingresar lista de amigos.
- Registrar un nuevo amigo.
- Crear grupos entre distintos usuarios.
- Registrar gastos grupales.
- Editar gasto grupal
- Consultar preferencias de un amigo.
- Consultar deudas en grupos.
- Consultar historial de gastos personales.
- Consultar historial de gastos grupales.

### Entrevistas
Esta técnica consiste en realizar entrevistas a distintos tipos de usuarios. En este caso, seleccionamos tres jóvenes de 19, y 23 años.
  Agregar resumen entrevistas
### Encuestas
Las encuestas son una forma de "entrevistar" a grandes grupos para comprender sus necesidades. 
  Agregar resumen encuestas
### Ingeniería Inversa
#### Settle Up
#### Splitwise


### Evidencia de actividades de investigación
### Referencias a fuentes de información
---
### Caracterización de usuarios: User Personas
#### User Persona 1.
![User Persona 1](https://i.imgur.com/d6lXpHr.jpg)
#### User Persona 2.
![User Persona 2](https://i.imgur.com/AFIuS4w.jpg)
### Modelo conceptual del problema
---
## Especificación
### Definición de requerimientos funcionales y no funcionales
Como forma de estandarizar los requerimientos se definió una forma de identificación que consiste en el tipo de requerimiento seguido de un número. Para cada requerimiento se especifica una breve descripción y una prioridad (Alta, Media o Baja).
### Requerimientos Funcionales
Los requerimientos funcionales especifican servicios o funciones del sistema. Describen el comportamiento del sistema en ciertas condiciones, y las posibles tareas de los usuarios.
Dentro de los requerimientos funcionales el actor siempre será el usuario (ver glosario).

#### RF1: Registro de gasto personal

**Origen:** Tormenta de ideas

**Descripción:**  El sistema debe contar con una funcionalidad que permita a los usuarios registrar un gasto personal. Se le debe de pedir al usuario el monto, la moneda y la descripción del gasto. Se le debe dar al usuario la opción de cancelar en cualquier instancia del registro.

**Prioridad:** Alta

#### RF2: Borrar gasto personal

**Origen:** Tormenta de ideas

**Descripción:** El sistema debe contar con una funcionalidad que permita al usuario borrar un gasto personal. El usuario debe elegir el gasto a borrar. Se le debe pedir al usuario confirmar la acción.

**Prioridad:** Alta

#### RF3: Registro de gasto grupal

**Origen:** Tormenta de ideas - Ingeniería Inversa

**Descripción:**  El sistema debe contar con una funcionalidad que permita al usuario registrar un gasto grupal. El usuario debe de poder elegir, dentro del grupo, quiénes pagaron y para quiénes se realizó el gasto. Se le debe pedir al usuario el monto, la moneda y una descripción; se le debe dar la opción al usuario de cambiar la proporción de distribuición de la compra (predeterminadamente equitativa). Se le debe dar al usuario la opción de cancelar en cualquier instancia del registro.

**Prioridad:** Alta

#### RF4: Borrar gasto grupal

**Origen:** Tormenta de ideas

**Descripción:** El sistema debe contar con una funcionalidad que permita al usuario borrar un gasto grupal. El usuario deberá elegir el gasto a borrar. Se le debe pedir al usuario confirmar la acción.

**Prioridad:** Alta

#### RF5: Editar gasto grupal

**Origen:** Tormenta de ideas

**Descripción:** El sistema debe contar con una funcionalidad que permita al usuario editar un gasto grupal. El usuario debe elegir el gasto a editar. Se le debe permitir al usuario modificar el monto y la descripción. No se le debe permitir al usuario modificar la moneda.

**Prioridad:** Media

#### RF6 Crear grupo

**Origen:** Tormenta de ideas

**Descripción:** El sistema debe contar con una funcionalidad que permita al usuario crear un grupo. El usuario deberá seleccionar los amigos (deben ser previamente registrados) de una lista y asignarle un nombre al grupo.

**Prioridad:** Alta

#### RF7: El usuario NO debe ser tratado con prioridad

**Origen:** Tormenta de ideas

**Descripción:** El sistema no debe ser tratado con prioridad. No se le debe solicitar ningún dato personal. Y se lo debe agregar como un amigo si se lo desea agregar a un grupo.

**Prioridad:** Alta

#### RF8: Registrar amigo

**Origen:** Tormenta de ideas

**Descripción:** El sistema debe contar con la funcionalidad de agregar un amigo. Se le debe pedir al usuario el nombre y la preferencia de pago.

**Prioridad:** Alta


#### RF9: Eliminar amigo de un grupo

**Origen:** Tormenta de ideas

**Descripción:** El sistema debe contar con la funcionalidad de eliminar a un amigo de un grupo. Solo debe de permitírsele al usuario eliminar a un amigo si su deuda con cualquier integrante del grupo es 0(cero). Se le debe pedir al usuario confirmar la acción.

**Prioridad:** Media

#### RF10: Eliminar amigo

**Origen:** Tormenta de ideas

**Descripción:** El sistema debe contar con la funcionalidad de eliminar a un amigo. Se le debe pedir al usuario confirmar la acción.

**Prioridad:** Alta 

#### RF11: Balancear

**Origen:** Tormenta de ideas

**Descripción:** El sistema debe contar con la funcionalidad de balancear las deudas de un grupo. Para esto, se debe desplegar una lista de las deudas del grupo, y permitir al usuario seleccionar una deuda para pagarla. Una vez seleccionada, se le debe mostrar al usuario el monto total y pedir que se ingrese el monto a pagar. Se le debe pedir al usuario confirmar la acción. Luego de realizado el balanceo el sistema debe mostrar la información actualizada.

**Prioridad:** Alta 

#### RF12: Consultar historial de gastos personales

**Origen:** Tormenta de ideas

**Descripción:** El sistema debe contar con la funcionalidad de consultar el historial de gastos personales. El usuario debe poder filtrar por antigüedad.

**Prioridad:** Baja

#### RF13: Consultar historial de gastos grupales

**Origen:** Tormenta de ideas

**Descripción:** El sistema debe contar con la funcionalidad de consultar el historial de gastos grupales. El usuario debe poder filtrar por antigüedad, amigo a cargo del gasto, o por monto.

**Prioridad:** Baja

#### RF14: Registrar nombre del usuario

**Origen:** Tormenta de ideas

**Descripción:** Al inciar por primera vez la app, se debe pedir un nombre para referirse al usuario.

---

### User Stories
Las user stories describen una funcionalidad simple del sistema. Se trata de una explicación general para discutir el valor que provee el sistema a distintos interesados.

#### ID: #1
**Título:** Registrar gasto personal

**Narrativa:** 
  
**Como** usuario 
    
**Quiero poder** registrar un nuevo gasto personal
   
**Para** guardarlo en el sistema

**Criterios de aceptación:** 
 * se registra en el sistema un nuevo gasto con su monto, moneda y descripción.

#### ID: #2
**Título:** Registrar amigo

**Narrativa:** 
  
**Como** usuario 
    
**Quiero poder** ingresar el nombre y la preferencia de pago de un nuevo amigo
   
**Para** registrarlo en el sistema y luego unirlo a grupos.

**Criterios de aceptación:** 
 * se registra en el sistema un nuevo amigo con su nombre y preferencia de pago.

#### ID: #3
**Título:** Eliminar amigo de un grupo

**Narrativa:** 
  
**Como** usuario 
    
**Quiero poder** seleccionar un amigo dentro de un grupo
   
**Para** eliminarlo de dicho grupo.

**Criterios de aceptación:** 
 * el amigo eliminado ya no pertenece al grupo.

#### ID: #4
**Título:** Eliminar amigo

**Narrativa:** 
  
**Como** usuario 
    
**Quiero poder** seleccionar un amigo de una lista con todos mis amigos
   
**Para** eliminar al amigo seleccionado de mis amigos.

**Criterios de aceptación:** 
 * el amigo eliminado ya no pertenece a mis amigos, y toda referencia a él es eliminada, (excepto de los historiales).



### Use Cases
#### Caso de uso 1.

**Título:** Registrar gasto personal

**Actor:** Usuario

**Referencia:** Requerimiento Funcional RF1

**Curso normal:**
| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
| **1.** Selecciona "Nuevo gasto personal" | **2.** Muestra un input type number y una lista de tipos de moneda (pesos, dólares, reales, euros, otro). |
| **3.** Ingresa el monto (número mayor a 0) y selecciona el tipo de moneda | **4.** Muestra una caja de texto y sugerencias |
| **5.** Ingresa la descripción, que debe ser menor a 40 caracteres | **6.** Muestra todos los datos ingresados en pantalla y pide una confirmación|
| **7.** Confirma los datos | **8.** Se registra el nuevo gasto|

**Cursos alternativos:**

**3.1** Si el monto es menor a 0: se muestra un mensaje "El monto debe ser mayor a 0".

**3.2** Si no se ingresa un monto: se muestra un mensaje "Por favor, ingrese un monto".

**3.3** Si no se selecciona el tipo de moneda: se muestra un mensaje "Por favor, seleccione el tipo de moneda".

**5.1** Si la descripción es mayor a 40 caracteres: se muestra un mensaje "La descripción debe ser menor a 40 caracteres".

**5.2** Si no se ingresa una descripción: se muestra un mensaje "Por favor, ingrese una descripción".

**7.1** Si no confirma los datos (selecciona cancelar o cerrar): fin caso de uso.

![Caso de Uso 1](https://i.imgur.com/Ir1iiQ6.png)

#### Caso de uso 2.
**Título:** Crear un grupo de amigos

**Actor:** Usuario

**Referencia:** Requerimiento Funcional: RF6

**Curso normal:**
| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
| **1.** Selecciona "Nuevo grupo de amigos" | **2.** Muestra una lista con los amigos ya registrados |
| **3.** Selecciona uno o más amigos | **4.** Pide que se ingrese un nombre para el grupo  |
| **5.** Ingresa el nombre del grupo, que es un string de letras únicamente | **6.** Muestra los datos ingresados y pide confirmación |
| **7.** Confirma los datos | **8.** Crea el grupo |

**Cursos alternativos:**

**2.1** Si no hay amigos ingresados: Muestra un mensaje "Debes ingresar a tus amigos primero para crear un grupo".

**3.1** Si no se selecciona ningún amigo: se muestra un mensaje "Debes seleccionar al menos un amigo".

**5.1** Si no se ingresa un nombre: se muestra un mensaje "Por favor, ingrese un nombre".

**5.2** Si el nombre ingresado es incorrecto: se muestra un mensaje "El nombre debe contener letras únicamente. Por favor, reingrese".

**7.1** Si no confirma los datos (selecciona cancelar o cerrar): fin caso de uso.

![Caso de Uso 2](https://i.imgur.com/Jb6Xam6.png)

#### Caso de uso 3.
**Título:** Balancear

**Actor:** Usuario

**Referencia:** Requerimiento Funcional: RF11

**Curso normal:**
| Acción de los actores | Respuesta del sistema |
| --------------------- | --------------------- |
| **1.** Dentro de un grupo, selecciona la opción "Ver deudas"  | **2.** Muestra todas las deudas que hay en el grupo |
| **3.** Selecciona opción "Pagar" | **4.** Muestra un modal con una lista con las deudas |
| **5.** Selecciona una de las deudas de la lista | **6.** Muestra el monto total y pide que se ingrese el monto a pagar |
| **7.** Ingresa monto a pagar (número entre 1 y el monto total)| **8.** Muestra los datos de la deuda a cancelar (monto ingresado, monto restante, personas involucradas) y pide confirmación |
| **9.** Confirma los datos | **10.** Actualiza la deuda con el monto restante |

**Cursos alternativos:**

**2.1** Si no hay deudas: Muestra un mensaje "No hay deudas pendientes".

**5.1** Si no se selecciona ninguna deuda: se muestra un mensaje "Debes seleccionar una deuda".

**7.1** Si no se ingresa un monto: se muestra un mensaje "Por favor, ingrese un monto".

**7.2** Si el monto ingresado es incorrecto: se muestra un mensaje "El monto debe ser mayor a 0 y menor al monto total. Por favor, reingrese".

**9.1** Si no confirma los datos (selecciona cancelar o cerrar): fin caso de uso.

**10.1** Si el monto restante es igual a 0: la deuda es eliminada.

![Caso de Uso 3](https://i.imgur.com/rrlRvgL.png)

### Bocetos de IU
Prototipo: [Link al prototipo](https://www.figma.com/proto/lgVU9pjV62HU5Ybg9OlCT4/FIS?page-id=0%3A1&node-id=17%3A880&viewport=241%2C48%2C0.35&scaling=scale-down)
Menú:
![Menú](https://i.imgur.com/UZaGLWI.png)

---
## Validación y verificación
### Verificar la especificación
| El requerimiento | RF1 | RF2 | RF3 | RF4 | RF5 | RF6 | RF7 | RF8 | 
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| ¿es viable?   | 
| ¿es consistente?    |
| ¿es preciso y no ambiguo?    | 
| ¿es verificable?    |
| ¿esta priorizado?    | 
| ¿se identifica claramente el origen?    | 

| El requerimiento | RF9 | RF10 | RF11 |
| -------- | -------- | -------- | -------- | 
| ¿es viable?   | 
| ¿es consistente?    |
| ¿es preciso y no ambiguo?    | 
| ¿es verificable?    |
| ¿esta priorizado?    | 
| ¿se identifica claramente el origen?    | 
### Validar la solución con personas no involucradas en el proyecto
---
## Reflexión
### Detalle del trabajo individual
### Técnicas aplicadas y aprendizajes

---
## Bibliografía
[¿Qué es Git?](https://www.atlassian.com/es/git/tutorials/what-is-git "¿Qué es Git? Atlassian Git Tutorial")

[¿Qué es Github?](https://conociendogithub.readthedocs.io/en/latest/data/introduccion/ "Conociendo GitHub")

[Tutoriales de Git y comandos](https://www.atlassian.com/es/git/tutorials "Tutoriales de Git")

[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet "Markdown Cheatsheet")